import { motion } from 'framer-motion'
import '../styles/Achievements.css'

export default function Achievements() {
  const achievements = [
    {
      title: '1st Place — Engineering Projects Expo',
      subtitle: 'Awarded for the Smart Toilet Management System',
      organization: 'SHAR, ISRO',
      date: 'Oct 2023',
      icon: '★',
      accent: 'Leadership',
    },
    {
      title: '1st Place — Mini Project Competition',
      subtitle: 'Recognized for innovation, execution, and thoughtful design',
      organization: 'Saranathan College of Engineering',
      date: 'Oct 2023',
      icon: '✦',
      accent: 'Innovation',
    },
    {
      title: '2nd Place — Tug-of-Code',
      subtitle: 'Acknowledged for strong problem-solving under competitive conditions',
      organization: 'K. Ramakrishnan College',
      date: '2022',
      icon: '◈',
      accent: 'Problem solving',
    },
    {
      title: '3rd Place — Debugging Challenge',
      subtitle: 'Recognized for precision, composure, and technical clarity',
      organization: 'K. Ramakrishnan College',
      date: '2022',
      icon: '⬢',
      accent: 'Precision',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  }

  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <motion.div
          className="achievements-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Recognition</p>
          <h2>
            Selected <span>milestones</span> that reflect focus, consistency, and execution.
          </h2>
          <p>
            These recognitions reflect strong problem solving, clear delivery, and dependable performance.
          </p>
        </motion.div>

        <motion.div className="achievements-grid" variants={containerVariants} initial="hidden" animate="visible">
          {achievements.map((achievement) => (
            <motion.article key={achievement.title} className="achievement-card" variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }}>
              <div className="achievement-top">
                <span className="achievement-icon">{achievement.icon}</span>
                <span className="achievement-accent">{achievement.accent}</span>
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="achievement-subtitle">{achievement.subtitle}</p>
                <p className="achievement-org">{achievement.organization}</p>
              </div>
              <div className="achievement-date">{achievement.date}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
