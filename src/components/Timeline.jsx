import { motion } from 'framer-motion'
import '../styles/Timeline.css'

export default function Timeline() {
  const timelineEvents = [
    {
      title: 'Bachelor of Computer Science & Engineering',
      institution: 'Saranathan College of Engineering',
      date: '2021 - 2025',
      details: 'Developed a foundation in software engineering, systems thinking, and practical product development.',
      metric: 'CGPA 8.2',
      icon: '◉',
      label: 'Academic milestone',
    },
    {
      title: 'Higher Secondary',
      institution: 'Sri Vageesha Vidyasharam (CBSE)',
      date: '2019 - 2021',
      details: 'Strengthened analytical thinking, consistency, and a disciplined approach to solving complex problems.',
      metric: '89% Score',
      icon: '◌',
      label: 'Foundation stage',
    },
    {
      title: 'Secondary Education',
      institution: 'Sri Vageesha Vidyasharam (CBSE)',
      date: '2017 - 2019',
      details: 'Developed the habits of curiosity, persistence, and long-term focus from an early stage.',
      metric: '92% Score',
      icon: '◎',
      label: 'Early learning',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.16 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
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
          <p className="eyebrow">Foundation</p>
          <h2>
            Built on <span>discipline, curiosity, and steady growth</span>.
          </h2>
          <p>
            My academic background reflects a progression from fundamentals to applied engineering thinking.
          </p>
        </motion.div>

        <motion.div className="timeline-grid" variants={containerVariants} initial="hidden" animate="visible">
          {timelineEvents.map((event, index) => (
            <motion.article key={event.title} className="timeline-card" variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }}>
              <div className="timeline-accent" />
              <div className="timeline-card-head">
                <div className="timeline-pill">
                  <span className="timeline-index">0{index + 1}</span>
                  <span className="timeline-icon">{event.icon}</span>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-chip">{event.label}</span>
                  <p className="timeline-date">{event.date}</p>
                </div>
              </div>
              <div className="timeline-card-body">
                <h3>{event.title}</h3>
                <p className="timeline-institution">{event.institution}</p>
                <p className="timeline-details">{event.details}</p>
                <span className="timeline-metric">{event.metric}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
