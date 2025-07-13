'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-accent-black">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-accent-black-medium border border-primary-500/20 rounded-2xl p-6 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary-400 mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-accent-black-light border border-primary-500/20 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full relative bumblebee-glow`}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-accent-black-medium border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Technical Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">3+</div>
                <div className="text-gray-400">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">10+</div>
                <div className="text-gray-400">Frameworks & Libraries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">8+</div>
                <div className="text-gray-400">Development Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">3+</div>
                <div className="text-gray-400">Database Systems</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-primary-500/10 border border-primary-500/20 rounded-xl">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 bumblebee-glow">
                <span className="text-black text-2xl font-bold">F</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Frontend Expert
              </h4>
              <p className="text-gray-400 text-sm">
                Specialized in React.js, Next.js, and modern CSS frameworks for creating responsive UIs
              </p>
            </div>

            <div className="text-center p-6 bg-primary-500/10 border border-primary-500/20 rounded-xl">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 bumblebee-glow">
                <span className="text-black text-2xl font-bold">B</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Backend Developer
              </h4>
              <p className="text-gray-400 text-sm">
                Proficient in Node.js, Express.js, and database management with PostgreSQL and MongoDB
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
