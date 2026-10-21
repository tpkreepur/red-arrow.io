import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Prose } from '@/components/Prose'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for WaveMind.',
}

export default function Privacy() {
  return (
    <SimpleLayout
      title="Privacy Policy for WaveMind"
      intro="Effective Date: July 27, 2026"
    >
      <Prose>
        <p>
          This privacy policy applies to the WaveMind mobile application.
          WaveMind is designed to produce binaural tones for working, relaxing,
          thinking, or sleeping.
        </p>
        <p>
          We believe your privacy is fundamental. This policy clearly outlines
          that WaveMind does not collect, store, share, or transmit any of your
          personal data.
        </p>
        <ul>
          <li>
            <strong>Data Collection:</strong> WaveMind does not collect any
            personal information, usage data, or device identifiers.
          </li>
          <li>
            <strong>Network Access:</strong> The application operates completely
            locally on your device and does not transmit data to external
            servers.
          </li>
          <li>
            <strong>Permissions:</strong> WaveMind does not request access to
            your contacts, location, camera, or any other sensitive personal
            device data.
          </li>
          <li>
            <strong>Third-Party Services:</strong> We do not integrate any
            third-party tracking, analytics, or advertising frameworks into the
            app.
          </li>
        </ul>
        <p>
          If you have any questions or concerns regarding this policy, please
          contact the development team.
        </p>
      </Prose>
    </SimpleLayout>
  )
}
