import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Custom build desktop">
            I built a custom desktop PC for my workstation and it’s been
            amazing. I went with an AMD Ryzen 9 5950X, 64GB of RAM, 2TB of NVMe
            storage and dual GeForce RTX 3060s. I’ve never had a machine that
            could handle everything I throw at it, including running multiple
            virtual machines, Docker containers, and a ton of other applications
            all at once. It’s a beast.
          </Tool>
          <Tool title="Custom build AI workstation">
            I built a second custom desktop for AI development and it’s even
            more powerful than my workstation. I went with an AMD Ryzen 7 8700F,
            96GB of RAM, 2TB of NVMe storage and GeForce RTX 3090 with 24GB of
            VRAM. It’s a monster and can handle everything from
            Deepseek-R1&apos;s advanced reasoning model to running a mutli-agent
            ReAct system with multiple LLMs all at once. It’s a dream machine
            for AI development.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            I’ve tried a lot of different IDEs and text editors over the years
            but I always come back to VS Code. It’s fast, lightweight, and has a
            ton of great extensions that make it easy to customize for my
            workflow. I love the built-in terminal and the ability to easily
            switch between different programming languages and frameworks. It’s
            the best IDE I’ve ever used.
          </Tool>
          <Tool title="Windows Terminal">
            I use Windows Terminal for all of my command line needs. It’s fast,
            customizable, and has a ton of great features like tabs, split
            panes, and support for multiple shells. I love being able to run
            PowerShell, WSL, and even SSH sessions all in the same terminal
            window. It’s a great tool for anyone who spends a lot of time in the
            command line.
          </Tool>
          <Tool title="Ollama">
            Ollama is a new tool for running LLMs locally and it’s been a game
            changer for me. I love being able to run models like Llama 2 and
            Mistral 7B on my own hardware without having to worry about cloud
            costs or latency. It’s super easy to use and has a great interface
            for managing models and running inference. If you’re interested in
            AI development, I highly recommend checking it out.
          </Tool>
          <Tool title="Docker">
            Docker has been a game changer for my development workflow. I love
            being able to spin up containers for different projects and
            environments without having to worry about dependencies or
            configuration. It’s made it so much easier to work on multiple
            projects at once and keep everything organized. I also love being
            able to use Docker Compose to define and manage multi-container
            applications. It’s a powerful tool that has saved me a ton of time.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I just started using Figma for design work and I’m really impressed.
            It’s super easy to use and has a ton of great features for
            collaboration and prototyping. I love being able to work on designs
            with others in real-time and the ability to easily share designs
            with clients and stakeholders. It’s a great tool for anyone who does
            design work.
          </Tool>
          <Tool title="Mermaid">
            I use Mermaid for creating diagrams and flowcharts in my
            documentation and it’s been a great addition to my workflow. I love
            being able to create diagrams using simple text syntax and the
            ability to easily embed them in Markdown files. It’s a great way to
            visualize complex ideas and processes without having to use a
            separate tool. If you do any kind of documentation or technical
            writing, I highly recommend it for your next project.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
