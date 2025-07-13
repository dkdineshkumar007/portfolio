'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react'
import { personalInfo } from '@/data/personal'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-accent-black-light text-white">
      {/* Main Footer Content */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate about creating innovative web solutions and sharing knowledge 
                with the developer community. Always learning, always building.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-400" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91 {personalInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sky-500 rounded-lg hover:bg-sky-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-gray-400 text-sm mb-3">
                Subscribe for updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-r-lg transition-colors duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-400 text-sm">
                Built for the future
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-primary-400 to-primary-600 text-black rounded-lg transition-all duration-200 transform hover:scale-110 bumblebee-glow"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5 pointer-events-none"></div>
    </footer>
  )
}

export default Footer
