'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { personalInfo } from '@/data/personal'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // Create a simple resume download link
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You would need to add the actual resume file
    link.download = 'Dinesh_Kumar_S_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-accent-black via-accent-black-light to-accent-black-medium">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob bumblebee-glow"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          >
            {personalInfo.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building scalable web applications with modern technologies. 
            Experienced in React, Node.js, and cloud platforms with a focus on delivering 
            high-quality software solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToNext()}
              className="btn-primary flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <button
              onClick={downloadResume}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent-black-medium border border-primary-500/30 text-gray-300 hover:bg-primary-500/10 hover:border-primary-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent-black-medium border border-primary-500/30 text-gray-300 hover:bg-primary-500/10 hover:border-primary-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent-black-medium border border-primary-500/30 text-gray-300 hover:bg-primary-500/10 hover:border-primary-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero
