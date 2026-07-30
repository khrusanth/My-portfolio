import { motion } from 'framer-motion'
import '../styles/About.css'

export default function About() {
  const highlights = [
    { label: 'Core focus', value: 'Building practical, polished digital products' },
    { label: 'Primary stack', value: 'React, Python, modern UI systems' },
    { label: 'Approach', value: 'Design-driven engineering with clean execution' },
  ]

  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-content">
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="highlight-label">{item.label}</div>
                <div className="highlight-value">{item.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="about-text">
            <p>
              I build practical web experiences with a focus on clarity, reliability, and maintainable implementation.
              My work combines product thinking, frontend craftsmanship, and strong engineering judgment to create interfaces
              that are both usable and well structured.
            </p>
            <p>
              Whether I am shaping a user flow or developing a feature end to end, I focus on clean execution,
              thoughtful decision making, and a dependable final experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
