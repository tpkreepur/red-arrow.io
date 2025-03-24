import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Justin Moore. I live in Southern California, where I design
            solutions for the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved learning about computers and electronics since I was a
              child. I remember taking apart my mom&apos;s old VHS player when I
              was 6, just to see how it worked. I spent hours tinkering with the
              circuit boards and wires, fascinated by the intricate components
              inside. I was so enthralled that I didn&apos;t even notice when my
              mom walked in and caught me red-handed. Even after a stern
              talking-to, I couldn&apos;t shake the feeling of excitement that
              came from understanding how things worked.
            </p>
            <p>
              It was only after numerous electronics I murdered through out my
              childhood that I got my first real interaction with a computer. I
              was in the 2nd grade and was in Mrs. Ironman&apos;s class when I
              was introduced to the Apple IIe. I remember sitting in front of
              that green screen, typing in commands and watching as the computer
              responded. It was like magic to me. I spent hours playing games
              like Oregon Trail, ABM, and Battle Chess. I was hooked. I wanted
              to know everything about how computers worked, how they
              communicated with each other, and how I could make them do what I
              wanted.
            </p>
            <p>
              Fast forward to today, and I’ve spent the last 20 years working in
              tech, from building websites to designing complex systems for
              Fortune 500 companies. I’ve worked with some of the brightest
              minds in the industry and have been fortunate enough to lead teams
              that have created innovative solutions to real-world problems. I’m
              passionate about using technology to empower people and make their
              lives easier.
            </p>
            <p>
              When I’m not working, you can find me spending time with my
              family, annoying my dogs, creating smart home devices from
              scratch, or tinkering with the latest AI models. I’m always
              looking for new ways to push the boundaries of what’s possible
              with technology, and I love sharing my knowledge with others. I
              believe that technology should be accessible to everyone, and I’m
              committed to helping others learn and grow in this ever-changing
              field.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:justin@red-arrow.io"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              justin@red-arrow.io
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
