'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { educationData, certificationsData } from '@/data/education'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <GraduationCap className="text-blue-600" />
            Academic Education
          </motion.h3>

          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-6 items-center">
                {/* Institution Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{education.duration}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h4>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {education.field}
                  </p>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin size={16} />
                    <span>{education.institution}, {education.location}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {education.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CGPA Display */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{education.cgpa}</div>
                      <div className="text-sm opacity-90">CGPA</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Out of 10.0
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
          >
            <Award className="text-green-600" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  {category.category}
                </h4>
                
                <div className="space-y-4">
                  {category.certifications.map((cert, certIndex) => (
                    <motion.div
                      key={certIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (certIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {cert.name}
                        </h5>
                        <ExternalLink size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-medium">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                      
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {cert.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Learning Journey
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.5</div>
                <div className="text-gray-600 dark:text-gray-400">CGPA Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">7</div>
                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-400">Learning Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-400">Years of Study</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I believe in lifelong learning and staying updated with the latest technologies. 
              My educational journey reflects a commitment to both theoretical knowledge and practical skills, 
              combining formal education with industry-relevant certifications to stay ahead in the rapidly evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
