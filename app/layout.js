import "./globals.css"
import { Roboto } from "next/font/google"

const font = Roboto({ subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "700"] })

export const metadata = {
  title: "David Chen",
  description: "Profile of Frontend Engineer David Chen",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`theme-leafs`}>{children}</body>
    </html>
  )
}
