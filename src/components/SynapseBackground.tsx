'use client'

import { useEffect, useRef } from 'react'
import type P5 from 'p5'

const LINK_DISTANCE = 150
const PULSE_FRAMES = 45

type Neuron = { x: number; y: number; vx: number; vy: number }
type Pulse = { a: Neuron; b: Neuron; age: number }

export function SynapseBackground() {
  let container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let instance: P5 | undefined
    let cancelled = false

    import('p5').then(({ default: p5 }) => {
      if (cancelled || !container.current) return

      let reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      instance = new p5((p) => {
        let neurons: Neuron[] = []
        let pulses: Pulse[] = []

        function seed() {
          let count = Math.round(
            Math.min(110, Math.max(40, (p.width * p.height) / 18000)),
          )
          neurons = Array.from({ length: count }, () => ({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.25, 0.25),
            vy: p.random(-0.25, 0.25),
          }))
          pulses = []
        }

        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight)
          seed()
          if (reduceMotion) p.noLoop()
        }

        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight)
          seed()
        }

        p.draw = () => {
          let dark = document.documentElement.classList.contains('dark')
          let [r, g, b] = dark ? [45, 212, 191] : [0, 150, 137]

          p.clear()

          if (!reduceMotion) {
            for (let n of neurons) {
              n.x = (n.x + n.vx + p.width) % p.width
              n.y = (n.y + n.vy + p.height) % p.height
            }
          }

          // Synapses: lines fade in as neurons approach each other.
          p.strokeWeight(1)
          let linked: [Neuron, Neuron][] = []
          neurons.forEach((a, i) => {
            for (let j = i + 1; j < neurons.length; j++) {
              let c = neurons[j]
              if (!c) continue
              let d = p.dist(a.x, a.y, c.x, c.y)
              if (d > LINK_DISTANCE) continue
              p.stroke(r, g, b, (1 - d / LINK_DISTANCE) * 90)
              p.line(a.x, a.y, c.x, c.y)
              linked.push([a, c])
            }
          })

          // Signals: an occasional pulse travels along a live synapse.
          let pick = linked[Math.floor(Math.random() * linked.length)]
          if (!reduceMotion && pick && Math.random() < 0.06) {
            pulses.push({ a: pick[0], b: pick[1], age: 0 })
          }
          p.noStroke()
          pulses = pulses.filter((pulse) => pulse.age < PULSE_FRAMES)
          for (let pulse of pulses) {
            let t = pulse.age++ / PULSE_FRAMES
            p.fill(r, g, b, Math.sin(t * Math.PI) * 255)
            p.circle(
              p.lerp(pulse.a.x, pulse.b.x, t),
              p.lerp(pulse.a.y, pulse.b.y, t),
              5,
            )
          }

          p.fill(r, g, b, 150)
          for (let n of neurons) p.circle(n.x, n.y, 3)
        }
      }, container.current)
    })

    return () => {
      cancelled = true
      instance?.remove()
    }
  }, [])

  return (
    <div
      ref={container}
      aria-hidden
      className="pointer-events-none fixed inset-0"
    />
  )
}
