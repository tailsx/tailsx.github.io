import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-secondary py-8 text-primary">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2">Stay Connected</h3>
          <a
            href="https://www.linkedin.com/in/tailsx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent inline-flex items-center"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} David Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
