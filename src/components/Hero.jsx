import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import ShinyText from './ShinyText'
import DecryptedText from './DecryptedText'
import profileImg from '../assets/profile.jpg'
import '../styles/Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-content">
          <motion.h1
            className="hero-title"
            variants={itemVariants}
          >
            <span className="welcome">Hey, I'm</span>
            <ShinyText text="Khrusanth S" className="name-highlight" duration={4} />
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            <DecryptedText text="Creative Developer | Problem Solver | Tech Enthusiast" speed={30} />
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            I craft beautiful, functional digital experiences with React, Python, and modern web technologies.
            Passionate about turning ideas into reality and solving complex problems.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <a href="#projects">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </a>

            <motion.a
              href="mailto:khrusanthsj@gmail.com"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="image-container">
            <div className="glow-effect"></div>
            <img
              src={profileImg}
              alt="Khrusanth"
              className="profile-image"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about">
          <FiArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  )
}
