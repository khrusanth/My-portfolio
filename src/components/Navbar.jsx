import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', to: '#hero' },
    { name: 'About', to: '#about' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Experience', to: '#timeline' },
    { name: 'Achievements', to: '#achievements' },
    { name: 'Contact', to: '#contact' },
  ]

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">KS</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.to}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <motion.span whileHover={{ color: '#00d4ff' }}>
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
