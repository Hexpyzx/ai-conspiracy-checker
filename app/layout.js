import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'AI Conspiracy Checker',
  description: 'Fact-check conspiracy theories using AI.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/submit">Submit Claim</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
          </div>
        </nav>

        {/* Page content */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
