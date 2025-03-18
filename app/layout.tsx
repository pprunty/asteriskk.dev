import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { themeEffect } from "@/components/theme-effect"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Delta Components",
  description: "Progressively styled components for distribution by shadcn.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     <head>
            <script
              dangerouslySetInnerHTML={{
                __html: `(${themeEffect.toString()})();`,
              }}
            />
            <link rel="icon" href="/icons/32x32.png" sizes="any" />
          </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-4 sm:mt-8">{children}</div>
      </body>
    </html>
  )
}

