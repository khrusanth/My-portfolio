import { motion } from 'framer-motion'
import '../styles/Timeline.css'

export default function Timeline() {
  const timelineEvents = [
    {
      title: 'Bachelor of Computer Science & Engineering',
      institution: 'Saranathan College of Engineering',
      date: '2021 - 2025',
      details: 'Focused on software engineering, systems thinking, and practical product development.',
      metric: 'CGPA 8.2',
      icon: '◉',
    },
    {
      title: 'Higher Secondary',
      institution: 'Sri Vageesha Vidyasharam (CBSE)',
      date: '2019 - 2021',
      details: 'Built a strong foundation in analytical thinking, problem solving, and disciplined execution.',
      metric: '89% Score',
      icon: '◌',
    },
    {
      title: 'Secondary Education',
      institution: 'Sri Vageesha Vidyasharam (CBSE)',
      date: '2017 - 2019',
      details: 'Developed consistency, curiosity, and a strong work ethic early in academic life.',
      metric: '92% Score',
      icon: '◎',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.16 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <section id="timeline" className="timeline">
      <div className="section-container">
        <motion.div
          className="timeline-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Background</p>
          <h2>
            Building a <span>strong technical foundation</span> with clear professional growth.
          </h2>
          <p>
            My path has been shaped by disciplined study, hands-on projects, and a steady focus on
            becoming a dependable engineer and builder.
          </p>
        </motion.div>

        <motion.div
          className="timeline-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {timelineEvents.map((event, index) => (
            <motion.article
              key={event.title}
              className="timeline-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="timeline-card-head">
                <span className="timeline-index">0{index + 1}</span>
                <span className="timeline-icon">{event.icon}</span>
              </div>
              <div className="timeline-card-body">
                <h3>{event.title}</h3>
                <p className="timeline-institution">{event.institution}</p>
                <p className="timeline-date">{event.date}</p>
                <p className="timeline-details">{event.details}</p>
                <div className="timeline-metric">{event.metric}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
