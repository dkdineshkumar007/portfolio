'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { blogPosts, blogCategories } from '@/data/blog'
import { useState } from 'react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visiblePosts, setVisiblePosts] = useState(3)

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length))
  }

  return (
    <section id="blog" className="section-padding bg-accent-black-light">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and insights about technology, development, and industry trends
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {blogCategories.map((category, index) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setVisiblePosts(3)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-400 to-primary-600 text-black shadow-lg transform scale-105 bumblebee-glow'
                  : 'bg-accent-black-medium border border-primary-500/30 text-gray-400 hover:bg-primary-500/10 hover:border-primary-400/40 hover:text-primary-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-accent-black-medium border border-primary-500/20 rounded-2xl overflow-hidden hover:border-primary-400/40 hover:bg-primary-500/5 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-400 to-primary-600 text-black text-xs font-bold rounded-full bumblebee-glow">
                    Featured
                  </span>
                </div>
              )}

              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-black">
                    <div className="text-4xl font-bold mb-2">
                      {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                    </div>
                    <div className="text-sm opacity-80">{post.category}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-accent-black-light border border-primary-500/30 text-primary-300 rounded-md text-xs font-medium"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm hover:gap-3 transition-all duration-200 group-hover:text-primary-300">
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={loadMore}
              className="btn-primary inline-flex items-center gap-2"
            >
              Load More Posts
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default Blog
