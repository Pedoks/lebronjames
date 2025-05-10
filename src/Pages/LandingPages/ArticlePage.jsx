import React from 'react'
import { CalendarDays, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ArticleList from './ArticleList'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

function ArticlePage() {
  const articles = ArticleList()

  return (
    <div className="px-6 py-12 md:px-12 lg:px-24 bg-gradient-to-b from-[#2d1155] to-[#552583] min-h-screen">
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#FDB927] mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FDB927] to-[#f8d56a]">
            LeDaddy Chronicles
          </span>
        </h1>
        <p className="text-lg text-[#FDB927]/90 max-w-2xl mx-auto">
          Exclusive stories about LeBron's legacy in purple and gold
        </p>
      </motion.div>

      {/* Article Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <Link to={`/articles/${article.id}`}>
              <div className="group bg-white/5 backdrop-blur-sm border border-[#FDB927]/20 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(253,_185,_39,_0.3)] transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="inline-block px-3 py-1 bg-[#FDB927] text-[#552583] text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#FDB927]/80 mb-3 gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {article.date}
                    <span className="flex items-center ml-auto">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#FDB927] transition">
                    {article.title}
                  </h2>
                  <p className="text-[#FDB927]/70 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ArticlePage