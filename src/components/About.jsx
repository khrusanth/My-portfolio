import { motion } from 'framer-motion'
import '../styles/About.css'

export default function About() {

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    { label: 'Current Role', value: 'Graduate Engineer Trainee @ HCLTech' },
    { label: 'Specialization', value: 'Java Full-Stack Development' },
    { label: 'Core Stack', value: 'Java, Spring Boot, React' },
    { label: 'Education', value: 'B.E CSE - 8.2 CGPA' }
  ]

  return (
    <section id="about" className="about">
      <div className="section-container">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="title-highlight">About</span> Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Highlight Cards */}
          <motion.div className="about-highlights" variants={containerVariants}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 212, 255, 0.15)',
                  borderColor: 'rgba(0, 212, 255, 0.6)',
                }}
              >
                <div className="highlight-label">{item.label}</div>
                <div className="highlight-value">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* About Paragraphs */}
          <motion.div className="about-text" variants={containerVariants}>
            <motion.p variants={itemVariants}>
              I’m currently working as a <span className="accent">Graduate Engineer Trainee at HCLTech</span>, specializing in <span className="accent">Java Full-Stack Development</span>. I completed my Bachelor of Computer Science and Engineering from <span className="accent">Saranathan College of Engineering</span> with a CGPA of <span className="accent">8.2</span>.
            </motion.p>

            <motion.p variants={itemVariants}>
              I have a strong interest in backend and frontend development using <span className="accent">Java, Spring Boot, and React</span>, and I’m continuously working on strengthening my fundamentals. As a tech enthusiast, I enjoy exploring how different technologies connect together to build complete applications. I focus on improving my problem-solving skills, writing structured code, and understanding core concepts deeply.
            </motion.p>

            <motion.p variants={itemVariants}>
              Currently, I’m focused on gaining practical, real-world experience beyond theoretical knowledge. <br />I’m exploring <span className="accent">AI-powered development tools</span> to improve productivity and code quality, and actively learning how to deploy and manage the applications I build. I’m particularly interested in understanding the complete development lifecycle — from writing code to testing, deployment, and maintenance — so I can grow into a developer who not only builds features but also understands how they run in real environments.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
