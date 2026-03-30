import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";
import { getSiteUrl } from "@/lib/site";
import { GoogleTagManager } from "@next/third-parties/google";

import "@/styles/tailwind.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    template: "%s - Justin Moore",
    default:
      "Justin Moore - Software designer, cloud architect, founder, and amateur AI researcher",
  },
  description:
    "I’m Justin, a software designer and entrepreneur based in Southern California. I’m the founder and CEO of Red Arrow Solutions, where we develop technologies that empower regular people and small businesses on their own terms.",
  alternates: { types: { "application/rss+xml": `${siteUrl}/feed.xml` } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-R4NPWFQ1ZG" />
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
