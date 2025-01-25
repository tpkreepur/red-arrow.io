import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import LoadingFallback from "@/components/LoadingFallback";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from 'react';

// Dynamically import with structured loading states
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <LoadingFallback height="400px" />,
});
const ExperienceSection = dynamic(
  () => import("@/components/ExperienceSection"),
  {
    loading: () => <LoadingFallback height="600px" />,
  }
);
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <LoadingFallback height="300px" />,
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <ErrorBoundary fallback={<div>Error loading section</div>}>
        <Suspense fallback={<LoadingFallback height="400px" />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback height="600px" />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback height="300px" />}>
          <ContactSection />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
