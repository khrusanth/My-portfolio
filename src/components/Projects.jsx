import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import CardSwap, { Card } from './CardSwap'
import GlareHover from './GlareHover'
import '../styles/Projects.css'

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: 'Smart Toilet Management System',
      description:
        'Innovative IoT solution with automated cleaning and real-time cleanliness monitoring. Won 1st place at Engineering Projects Expo by SHAR, ISRO.',
      tags: ['IoT', 'Python', 'Hardware', 'Cloud'],
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d4ff?text=Smart+Toilet',
      award: '🏆 1st Place - ISRO SHAR',
      date: 'Apr 2023',
    },
    {
      id: 2,
      title: 'Gesture Controller for Computer',
      description:
        'Advanced gesture-based control system leveraging Python and machine learning for intuitive hands-free computer interaction.',
      tags: ['Python', 'ML', 'OpenCV', 'Mediapipe'],
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d4ff?text=Gesture+Control',
      award: '⭐ Innovation Award',
      date: 'Jan 2023',
    },
    {
      id: 3,
      title: 'Weather Prediction Application',
      description:
        'Real-time weather application with web scraping and user-friendly GUI providing accurate weather forecasting and alerts.',
      tags: ['Python', 'Web Scraping', 'GUI', 'API'],
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d4ff?text=Weather+App',
      date: 'Nov 2022',
    },
    {
      id: 4,
      title: 'Bank Account Management System',
      description:
        'Secure, feature-rich banking system built with Java OOP principles including transactions, security, and account management.',
      tags: ['Java', 'OOP', 'Database', 'Security'],
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d4ff?text=Bank+System',
      date: 'Feb 2023',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
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
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Featured <span className="title-highlight">Projects</span>
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: '0 30px 50px rgba(0, 212, 255, 0.2)',
              }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.award && (
                    <motion.span className="project-award" whileHover={{ scale: 1.1 }}>
                      {project.award}
                    </motion.span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-date">{project.date}</div>

                <motion.div
                  className="project-tags"
                  variants={containerVariants}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="project-tag"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="project-links">
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> GitHub
                  </motion.a>
                  <motion.a
                    href="#"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink /> View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
