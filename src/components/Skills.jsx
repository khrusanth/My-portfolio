import { motion } from 'framer-motion'
import MagicBento from './MagicBento'
import '../styles/Skills.css'

export default function Skills() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Technical <span className="title-highlight">Skills</span>
        </motion.h2>

        <div className="magic-bento-wrapper">
          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </div>
      </div>
    </section>
  )
}
