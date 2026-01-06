import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner"

import Providers from "./providers"

const roboto = Roboto({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "CodeLeap Network",
  description: "A simple social network to share posts."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} bg-background mx-auto flex min-h-screen flex-col font-serif antialiased`}
      >
        <Providers>
          {children}
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  )
}
