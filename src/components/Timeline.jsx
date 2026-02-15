import { motion } from 'framer-motion'
import '../styles/Timeline.css'

export default function Timeline() {

  const timelineEvents = [
    {
      type: 'education',
      title: 'Bachelor of Computer Science & Engineering',
      institution: 'Saranathan College of Engineering',
      date: '2021 - 2025 (Completed)',
      details: 'CGPA: 8.2',
      icon: '🎓',
    },
    {
      type: 'education',
      title: 'Higher Secondary (12th Standard)',
      institution: 'Sri Vageesha Vidyasharam (CBSE)',
      date: '2019 - 2021',
      details: '89% Score',
      icon: '📚',
    },
    {
      type: 'education',
      title: 'Secondary Education (10th Standard)',
      institution: 'Sri Vageesha Vidyasharam (CBSE)',
      date: '2017 - 2019',
      details: '92% Score',
      icon: '✏️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
    <section id="timeline" className="timeline">
      <div className="section-container">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="title-highlight">Education</span>
        </motion.h2>

        <motion.div
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`timeline-event ${event.type}`}
              variants={itemVariants}
              whileHover={{
                x: 10,
                boxShadow: '0 10px 30px rgba(0, 212, 255, 0.15)',
              }}
            >
              <div className="timeline-marker">
                <motion.div
                  className="marker-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {event.icon}
                </motion.div>
              </div>

              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p className="institution">{event.institution}</p>
                <p className="date">{event.date}</p>
                <p className="details">{event.details}</p>
              </div>

              <div className="timeline-line"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
