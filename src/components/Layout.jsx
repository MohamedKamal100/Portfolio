

import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import StarBackground from "./StarBackground"

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const routes = [
    { path: "/", label: "Home", section: "home" },
    { path: "/about", label: "About", section: "about" },
    { path: "/skills", label: "Skills", section: "skills" },
    { path: "/projects", label: "Projects", section: "projects" },
    { path: "/contact", label: "Contact", section: "contact" },
  ]

  const handleNavigation = (route) => {
    if (location.pathname === "/" && route.section) {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(route.section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Otherwise, navigate to the individual page
      navigate(route.path)
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen text-white">
      <StarBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Mohamed Kamal
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {routes.map((route) => (
                <button
                  key={route.path}
                  onClick={() => handleNavigation(route)}
                  className={`transition-colors duration-300 hover:text-blue-400 ${location.pathname === route.path ? "text-blue-400" : "text-white"
                    }`}
                >
                  {route.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {routes.map((route) => (
                <button
                  key={route.path}
                  onClick={() => handleNavigation(route)}
                  className="block w-full text-left py-2 transition-colors duration-300 hover:text-blue-400"
                >
                  {route.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with padding for navbar */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Mohamed Kamal. Built with React & Tailwind CSS.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/mohamed-kamal-b65136325/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MohamedKamal100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a href="mailto:m7maaa82@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
