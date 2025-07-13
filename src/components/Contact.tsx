'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-accent-black-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-accent-black-medium border border-primary-500/20 rounded-xl hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300"
              >
                <div className="p-3 bg-primary-500/20 border border-primary-500/30 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-accent-black-medium border border-primary-500/20 rounded-xl hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300"
              >
                <div className="p-3 bg-primary-500/20 border border-primary-500/30 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    +91 {personalInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-accent-black-medium border border-primary-500/20 rounded-xl hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300"
              >
                <div className="p-3 bg-primary-500/20 border border-primary-500/30 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">
                    {personalInfo.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-primary-500/20"
            >
              <h4 className="font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent-black-medium border border-primary-500/30 rounded-lg hover:bg-primary-500/10 hover:border-primary-400/40 text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent-black-medium border border-primary-500/30 rounded-lg hover:bg-primary-500/10 hover:border-primary-400/40 text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent-black-medium border border-primary-500/30 rounded-lg hover:bg-primary-500/10 hover:border-primary-400/40 text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-accent-black-medium border border-primary-500/20 rounded-2xl p-8 hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-500/30 rounded-lg bg-accent-black-light text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-500/30 rounded-lg bg-accent-black-light text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-500/30 rounded-lg bg-accent-black-light text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-primary-500/30 rounded-lg bg-accent-black-light text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
