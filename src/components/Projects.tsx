'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Server, Smartphone } from 'lucide-react'
import { projectModules } from '@/data/experience'

const Projects = () => {
  const getProjectIcon = (type: string) => {
    if (type.includes('Management') || type.includes('System')) return Database
    if (type.includes('Integration') || type.includes('API')) return Server
    if (type.includes('Interactive') || type.includes('UI')) return Smartphone
    return Code
  }

  return (
    <section id="projects" className="section-padding bg-accent-black-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Enterprise-level modules and systems I've built during my professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectModules.map((project, index) => {
            const IconComponent = getProjectIcon(project.type)
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-accent-black-medium border border-primary-500/20 rounded-2xl p-6 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl bumblebee-glow">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-accent-black-light border border-primary-500/30 rounded-lg hover:bg-primary-500/10 hover:border-primary-400/40 transition-colors duration-200 opacity-0 group-hover:opacity-100">
                        <Github size={16} className="text-gray-400 hover:text-primary-400" />
                      </button>
                      <button className="p-2 bg-accent-black-light border border-primary-500/30 rounded-lg hover:bg-primary-500/10 hover:border-primary-400/40 transition-colors duration-200 opacity-0 group-hover:opacity-100">
                        <ExternalLink size={16} className="text-gray-400 hover:text-primary-400" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-200">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-primary-400 font-medium mb-3">
                    {project.type}
                  </p>
                </div>

                {/* Project Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-black-light border border-primary-500/30 text-gray-300 rounded-md text-xs font-medium hover:bg-primary-500/10 hover:border-primary-400/40 hover:text-primary-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Status */}
                <div className="flex items-center justify-between pt-4 border-t border-primary-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">Production Ready</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    Enterprise Module
                  </span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-accent-black-medium border border-primary-500/20 rounded-2xl p-8 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Project <span className="gradient-text">Categories</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <Database className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-1">Management Systems</h4>
                <p className="text-sm text-gray-400">Inventory, Orders, Suppliers</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <Server className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-1">API Integration</h4>
                <p className="text-sm text-gray-400">Multi-channel, Shipping APIs</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <Smartphone className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-1">Interactive UI</h4>
                <p className="text-sm text-gray-400">Real-time, 2D Layouts</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-accent-black-light border border-primary-500/30 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
              >
                <Code className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-1">Process Automation</h4>
                <p className="text-sm text-gray-400">Workflows, Dropship Logic</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-accent-black-medium border border-primary-500/20 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-primary-400 mb-2 bumblebee-glow">9</div>
              <div className="text-gray-400">Enterprise Modules</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-accent-black-medium border border-primary-500/20 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-primary-400 mb-2 bumblebee-glow">15+</div>
              <div className="text-gray-400">API Integrations</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-accent-black-medium border border-primary-500/20 rounded-xl hover:bg-primary-500/10 hover:border-primary-400/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-primary-400 mb-2 bumblebee-glow">100%</div>
              <div className="text-gray-400">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
