'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react'
import { experienceData } from '@/data/experience'

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-accent-black-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made in various roles
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 to-primary-600"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full border-4 border-accent-black-light z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-accent-black-medium border border-primary-500/20 rounded-2xl p-6 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300 group">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-primary-400 mb-2">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                        <span className="text-gray-400">•</span>
                        <span className="px-2 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs text-primary-300">
                          {experience.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.position}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-400">
                        <Building size={16} />
                        <span className="font-medium">{experience.company}</span>
                        <span className="text-gray-400">•</span>
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.slice(0, 4).map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <ChevronRight size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent-black-light border border-primary-500/30 text-gray-300 rounded-full text-xs font-medium hover:bg-primary-500/10 hover:border-primary-400/40 hover:text-primary-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-primary-400">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-accent-black-medium border border-primary-500/20 rounded-2xl p-8 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Professional <span className="gradient-text">Growth Journey</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-accent-black-light border border-primary-500/30 hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary-400 mb-2 bumblebee-glow">2+</div>
                <div className="text-gray-400">Years of Experience</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-accent-black-light border border-primary-500/30 hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary-400 mb-2 bumblebee-glow">9</div>
                <div className="text-gray-400">Project Modules</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-accent-black-light border border-primary-500/30 hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary-400 mb-2 bumblebee-glow">100%</div>
                <div className="text-gray-400">Project Success Rate</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
