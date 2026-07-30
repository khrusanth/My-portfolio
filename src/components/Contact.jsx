import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'
import '../styles/Contact.css'

export default function Contact() {
  const socialLinks = [
    { name: 'Email', icon: FiMail, link: 'mailto:khrusanthsj@gmail.com', color: '#4dc7ff' },
    { name: 'LinkedIn', icon: FiLinkedin, link: 'https://linkedin.com/in/khrusanth-s', color: '#0077b5' },
    { name: 'GitHub', icon: FiGithub, link: 'https://github.com/khrusanth', color: '#ffffff' },
    { name: 'Phone', icon: FiPhone, link: 'tel:+919443830984', color: '#d4af37' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-background" />

      <div className="section-container">
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Contact</p>
          <h2>
            Open to <span>engineering roles</span> focused on quality, product delivery, and long-term impact.
          </h2>
          <p>
            If you are building something ambitious, I would be glad to connect and discuss the right fit.
          </p>
        </motion.div>

        <motion.div className="contact-card" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-panel-heading">
              <span className="contact-badge">Available for product-focused engineering roles</span>
              <p>
                I work well with teams that value clarity, precision, and dependable execution from concept to delivery.
              </p>
            </div>

            <div className="contact-details">
              <motion.a href="mailto:khrusanthsj@gmail.com" className="detail-item" whileHover={{ x: 4 }}>
                <FiMail />
                <div>
                  <span>Email</span>
                  <strong>khrusanthsj@gmail.com</strong>
                </div>
              </motion.a>

              <motion.a href="tel:+919443830984" className="detail-item" whileHover={{ x: 4 }}>
                <FiPhone />
                <div>
                  <span>Phone</span>
                  <strong>+91 9443830984</strong>
                </div>
              </motion.a>

              <motion.a href="https://linkedin.com/in/khrusanth-s" target="_blank" rel="noopener noreferrer" className="detail-item" whileHover={{ x: 4 }}>
                <FiLinkedin />
                <div>
                  <span>LinkedIn</span>
                  <strong>linkedin.com/in/khrusanth-s</strong>
                </div>
              </motion.a>
            </div>

            <motion.div className="social-links" variants={containerVariants}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${social.color}` }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
