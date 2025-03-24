import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description: 'I’ve spoken at a few events here and there.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at a few events here and there."
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences and Presentations">
          <Appearance
            href="https://photos.app.goo.gl/DqxtQwGR8Bx9zbQ48"
            title="Analyzing the floating point performance of a Raspberry Pi bramble"
            description="A technical deep-dive into the floating point performance of a Raspberry Pi cluster, and how it compared to Yellowstone, one of the worlds largest supercomputers."
            event="RMACC 2014"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="Rasbperry Pi Performance Benchmarking: An exploration in supercomputing and parallel computing benchmarks"
            description="Leveraging MPI, OpenMP, and the Raspberry Pi to explore the performance of a cluster of Raspberry Pis compared to the Yellowstone supercomputer."
            event="NCAR Extern Presentation Series 2014"
            cta="Watch video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
