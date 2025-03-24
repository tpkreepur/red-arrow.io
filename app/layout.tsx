// app/layout.tsx
import "./globals.css";
import { inter } from "@/app/fonts";
import ClientProviders from "@/app/client-providers";
import Navbar from "@/components/Navbar";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Red Arrow - Native Cloud Solutions',
    template: '%s | Red Arrow'
  },
  description: 'Native-inspired cloud solutions and professional development services',
  metadataBase: new URL('https://red-arrow.io'),
  openGraph: {
    title: 'Red Arrow - Native Cloud Solutions',
    description: 'Native-inspired cloud solutions and professional development services',
    url: 'https://red-arrow.io',
    siteName: 'Red Arrow',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-foreground">
        {/* Wrap everything in the client providers to access theme features */}
        <ClientProviders>
          <Navbar />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
