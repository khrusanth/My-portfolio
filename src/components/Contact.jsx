import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'
import '../styles/Contact.css'

export default function Contact() {

  const socialLinks = [
    {
      name: 'Email',
      icon: FiMail,
      link: 'mailto:khrusanthsj@gmail.com',
      color: '#00d4ff',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      link: 'https://linkedin.com/in/khrusanth-s',
      color: '#0077b5',
    },
    {
      name: 'GitHub',
      icon: FiGithub,
      link: 'https://github.com/khrusanth',
      color: '#333',
    },
    {
      name: 'Phone',
      icon: FiPhone,
      link: 'tel:+919443830984',
      color: '#00d4ff',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="gradient-sphere sphere-4"></div>
        <div className="gradient-sphere sphere-5"></div>
      </div>

      <div className="section-container">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Get In <span className="title-highlight">Touch</span>
        </motion.h2>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <p>
              I'm always open to new opportunities, collaborations, and interesting projects.
              Feel free to reach out and let's create something amazing together!
            </p>

            <div className="contact-details">
              <motion.div
                className="detail-item"
                whileHover={{ x: 10 }}
              >
                <FiMail />
                <div>
                  <p>Email</p>
                  <a href="mailto:khrusanthsj@gmail.com">khrusanthsj@gmail.com</a>
                </div>
              </motion.div>

              <motion.div
                className="detail-item"
                whileHover={{ x: 10 }}
              >
                <FiPhone />
                <div>
                  <p>Phone</p>
                  <a href="tel:+919443830984">+91 9443830984</a>
                </div>
              </motion.div>

              <motion.div
                className="detail-item"
                whileHover={{ x: 10 }}
              >
                <FiLinkedin />
                <div>
                  <p>LinkedIn</p>
                  <a href="https://linkedin.com/in/khrusanth-s" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/khrusanth-s
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div className="social-links" variants={containerVariants}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: `0 0 20px ${social.color}`,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={24} />
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
