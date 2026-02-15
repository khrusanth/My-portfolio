import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="footer-text">
          <p>
            Crafted with <span className="heart">❤️</span> by Khrusanth S
          </p>
          <p className="footer-subtitle">
            © {currentYear} All rights reserved. | Built with React & Framer Motion
          </p>
        </div>

        <a href="#hero">
          <motion.button
            className="scroll-to-top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowUp />
          </motion.button>
        </a>
      </motion.div>
    </footer>
  )
}
