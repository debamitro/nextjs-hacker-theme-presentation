import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CodePromptFu.com presentation - February 2 2025',
  description: 'Presentation about CodePromptFu.com for Sundai.club',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
