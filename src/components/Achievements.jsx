import { motion } from 'framer-motion'
import '../styles/Achievements.css'

export default function Achievements() {

  const achievements = [
    {
      title: '1st Place - Engineering Projects Expo',
      subtitle: 'Smart Toilet Management System',
      organization: 'SHAR, ISRO',
      date: 'Oct 2023',
      icon: '🏆',
      color: '#FFD700',
    },
    {
      title: '1st Place - Mini-Project Competition',
      subtitle: 'Saranathan College of Engineering',
      organization: 'College Event',
      date: 'Oct 2023',
      icon: '🥇',
      color: '#FFD700',
    },
    {
      title: '2nd Place - Tug-of-Code',
      subtitle: 'Competitive Coding Event',
      organization: 'QUBR-IT 2022, K. Ramakrishnan College',
      date: '2022',
      icon: '🥈',
      color: '#C0C0C0',
    },
    {
      title: '3rd Place - Debugging Challenge',
      subtitle: 'Code Debugging Event',
      organization: 'QUBR-IT 2022, K. Ramakrishnan College',
      date: '2022',
      icon: '🥉',
      color: '#CD7F32',
    },
  ]

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="title-highlight">Achievements</span> & Awards
        </motion.h2>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 50px ${achievement.color}30`,
                borderColor: achievement.color,
              }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="achievement-subtitle">{achievement.subtitle}</p>
                <p className="achievement-org">{achievement.organization}</p>
              </div>
              <div className="achievement-date">{achievement.date}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
