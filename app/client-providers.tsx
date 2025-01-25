// app/client-providers.tsx
"use client";

import { ThemeProvider } from "@/lib/theme-provider"; // or your shadcn/ui import
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
