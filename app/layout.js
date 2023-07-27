import "./globals.css"

export const metadata = {
  title: "David Chen",
  description: "Profile of Frontend Engineer David Chen",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
