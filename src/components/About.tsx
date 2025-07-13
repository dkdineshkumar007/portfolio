'use client'

import { motion } from 'framer-motion'
import { User, Award, Coffee, Code } from 'lucide-react'
import { personalInfo, aboutMe } from '@/data/personal'

const About = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '2+' },
    { icon: Award, label: 'Projects Completed', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+' },
    { icon: User, label: 'Happy Clients', value: '10+' },
  ]

  return (
    <section id="about" className="section-padding bg-accent-black-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-1 bumblebee-glow">
                <div className="w-full h-full rounded-2xl bg-accent-black-medium flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-primary-400 mb-4">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className="text-lg text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-accent-black-medium border border-primary-500/20 hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              {aboutMe.introduction}
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                Key Highlights
              </h4>
              <ul className="space-y-3">
                {aboutMe.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                Interests & Passions
              </h4>
              <div className="flex flex-wrap gap-3">
                {aboutMe.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-primary-500/20 border border-primary-500/30 text-primary-300 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-primary-500/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium">
                    {personalInfo.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white font-medium">
                    {personalInfo.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-medium">
                    {personalInfo.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-primary-400 font-medium">
                    Available for work
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
