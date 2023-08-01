import "./globals.css"
import type { Metadata } from "next"
import Providers from "./providers"

export const metadata: Metadata = {
  title: "Fantasy",
  description: "Fantasy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="w-full h-full">
      <body className="w-full h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
