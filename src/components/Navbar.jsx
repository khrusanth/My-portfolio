import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { name: 'Home', to: '#hero', id: 'hero' },
    { name: 'About', to: '#about', id: 'about' },
    { name: 'Skills', to: '#skills', id: 'skills' },
    { name: 'Projects', to: '#projects', id: 'projects' },
    { name: 'Experience', to: '#timeline', id: 'timeline' },
    { name: 'Achievements', to: '#achievements', id: 'achievements' },
    { name: 'Contact', to: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.a
          href="#hero"
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">KS</span>
        </motion.a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <motion.span whileHover={{ color: '#d4af37' }}>
                {item.name}
              </motion.span>
            </a>
          ))}
        </div>

        <motion.button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>
    </motion.nav>
  )
}
