import { motion } from 'framer-motion'
import { FiArrowUpRight, FiCpu, FiGithub, FiLayers, FiStar, FiCode } from 'react-icons/fi'
import '../styles/Projects.css'

export default function Projects() {
  const featuredProject = {
    title: 'Smart Toilet Management System',
    description:
      'An award-winning IoT solution that combines sensor monitoring, automation, and cloud visibility to improve sanitation operations in real time.',
    award: '1st Place • SHAR, ISRO',
    date: 'Apr 2023',
    tags: ['IoT', 'Python', 'Hardware', 'Cloud'],
  }

  const projects = [
    {
      id: 2,
      title: 'Gesture Controller for Computer',
      description:
        'A hands-free interaction system powered by computer vision and machine learning for intuitive control.',
      tags: ['Python', 'ML', 'OpenCV', 'Mediapipe'],
      date: 'Jan 2023',
      category: 'Computer Vision',
    },
    {
      id: 3,
      title: 'Weather Prediction Application',
      description:
        'A polished forecasting interface with real-time data flows and an approachable, responsive experience.',
      tags: ['Python', 'Web Scraping', 'GUI', 'API'],
      date: 'Nov 2022',
      category: 'Data Experience',
    },
    {
      id: 4,
      title: 'Bank Account Management System',
      description:
        'A secure Java-based banking platform structured around robust OOP principles and dependable workflows.',
      tags: ['Java', 'OOP', 'Database', 'Security'],
      date: 'Feb 2023',
      category: 'Software Design',
    },
  ]

  const highlights = ['Product-focused engineering', 'Reliable implementation', 'Practical problem solving']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.div
          className="projects-intro"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="projects-copy" variants={itemVariants}>
            <p className="projects-eyebrow">Selected work</p>
            <h2>
              Projects shaped by <span>clarity, engineering discipline, and measurable impact.</span>
            </h2>
            <p>
              Across embedded systems, data-driven tools, and interactive interfaces, each project reflects strong execution,
              practical problem solving, and careful product thinking.
            </p>
          </motion.div>

          <motion.div className="projects-pill-group" variants={itemVariants}>
            {highlights.map((highlight) => (
              <span key={highlight} className="pill-tag">
                <FiStar /> {highlight}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.article
          className="featured-project"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="featured-copy">
            <p className="featured-label">Featured project</p>
            <h3>{featuredProject.title}</h3>
            <p className="featured-description">{featuredProject.description}</p>
            <div className="featured-meta">
              <span>{featuredProject.date}</span>
              <span>{featuredProject.award}</span>
            </div>
            <div className="featured-tags">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="feature-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="featured-actions">
              <a href="https://github.com/khrusanth" target="_blank" rel="noreferrer" className="project-link">
                <FiGithub /> GitHub
              </a>
              <a href="https://khrusanth.github.io" target="_blank" rel="noreferrer" className="project-link secondary">
                <FiArrowUpRight /> Live view
              </a>
            </div>
          </div>

          <div className="featured-visual" aria-hidden="true">
            <div className="visual-card">
              <div className="visual-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="visual-body">
                <div className="visual-panel primary-panel">
                  <FiCpu />
                  <h4>Live sensing</h4>
                  <p>Real-time monitoring and responsive automation</p>
                </div>
                <div className="visual-panel">
                  <FiLayers />
                  <h4>Reliable controls</h4>
                  <p>Clean handoff between hardware and software</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <div className="card-accent"></div>
              <div className="project-topline">
                <span className="project-category">{project.category}</span>
                <span className="project-date">{project.date}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href="https://github.com/khrusanth" target="_blank" rel="noreferrer" className="project-link simple">
                  <FiCode /> Code
                </a>
                <a href="https://khrusanth.github.io" target="_blank" rel="noreferrer" className="project-link simple secondary">
                  <FiArrowUpRight /> Explore
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
