'use client'

import { motion } from 'framer-motion'
import { Clock, Star } from 'lucide-react'
import { timelineData } from '@/data/education'

const Timeline = () => {
  const getTypeColor = (type: string) => {
    // Use bumblebee theme for all types
    return 'from-primary-400 to-primary-600'
  }

  const getTypeBg = (type: string) => {
    // Use consistent dark theme background
    return 'bg-accent-black-medium border border-primary-500/20'
  }

  return (
    <section id="timeline" className="section-padding bg-accent-black-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Key milestones and achievements throughout my personal and professional development
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-400 to-primary-600 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full border-4 border-accent-black-light shadow-lg flex items-center justify-center bumblebee-glow`}>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Year Badge */}
                <div className={`absolute left-16 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-12 z-20 ${
                  index % 2 === 0 ? 'md:translate-x-8' : 'md:-translate-x-8'
                }`}>
                  <div className={`px-4 py-2 bg-gradient-to-r ${getTypeColor(item.type)} text-black rounded-full text-sm font-bold shadow-lg`}>
                    {item.year}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${getTypeBg(item.type)} rounded-2xl p-6 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300 group relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                      <div className="text-6xl text-primary-400">{item.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{item.icon}</div>
                        <div className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(item.type)} text-black rounded-full text-xs font-medium capitalize`}>
                          {item.type}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Timeline connector for mobile */}
                      <div className="md:hidden absolute -left-6 top-6 w-6 h-0.5 bg-gradient-to-r from-transparent to-primary-400"></div>
                    </div>

                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(item.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-accent-black-medium border border-primary-500/20 rounded-2xl p-8 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Journey <span className="gradient-text">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2 bumblebee-glow">5</div>
                <div className="text-gray-400">Years Journey</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2 bumblebee-glow">7</div>
                <div className="text-gray-400">Major Milestones</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2 bumblebee-glow">3</div>
                <div className="text-gray-400">Career Transitions</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary-400 mb-2 bumblebee-glow">∞</div>
                <div className="text-gray-400">Learning Continues</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-600 text-black rounded-full shadow-lg bumblebee-glow">
              <Star className="w-5 h-5" />
              <span className="font-medium">The Journey Continues...</span>
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Every milestone is a stepping stone to the next adventure. 
              I'm excited about the future opportunities to grow, learn, and make a positive impact in the tech industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
