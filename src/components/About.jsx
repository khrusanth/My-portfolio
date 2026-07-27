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
              I’m a developer who enjoys turning ideas into thoughtful, high-quality experiences.
              My work blends product thinking, frontend craftsmanship, and hands-on problem solving
              to create interfaces that feel both elegant and useful.
            </p>
            <p>
              Whether I’m designing a system flow or building a prototype, I focus on clarity,
              reliability, and making the final experience feel effortless for the user.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
