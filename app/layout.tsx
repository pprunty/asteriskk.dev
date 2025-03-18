import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { themeEffect } from "@/components/theme-effect"
import config from "@/app/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
title: `${config.companyName}`,
description: `${config.companyDescription}`,
keywords: [],
manifest:
  process.env.NODE_ENV === 'production'
    ? '/manifest.prod.json'
    : '/manifest.json',
openGraph: {
  title: `${config.companyName}`,
  description: `${config.companyDescription}`,
  url: config.url,
  siteName: config.companyName,
  images: [
    {
      url: `${config.url}/icon.webp`,
      alt: ``,
    },
  ],
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  site: config.socials.twitter,
  creator: config.socials.twitter,
  images: [
    {
      url: `${config.url}/icon.webp`,
      alt: `${config.companyName}`,
    },
  ],
},
icons: {
  icon: [
    { url: '/icons/192x192.png', sizes: '192x192', type: 'image/png' },
  ],
  apple: [
    { url: '/icons/180x180.png', sizes: '180x180', type: 'image/png' },
  ],
},
metadataBase: new URL(config.url),
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

