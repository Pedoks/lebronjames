import React from 'react'
import { useParams } from 'react-router-dom'
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import ArticleList from './ArticleList'
import NotFoundPage from './NotFoundPage'
import { Link } from 'react-router-dom'

function ArticleListPage() {
  const { id } = useParams()
  const article = ArticleList().find(item => item.id === parseInt(id))

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#1a0a2e] to-[#552583]"
    >
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link to="/articles" className="inline-flex items-center text-[#FDB927] hover:text-white transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Articles
        </Link>
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Meta Data */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-[#FDB927]">
          <span className="flex items-center">
            <CalendarDays className="w-5 h-5 mr-2" />
            {article.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            {article.readTime}
          </span>
          <span className="px-3 py-1 bg-[#FDB927] text-[#552583] text-sm font-bold rounded-full">
            {article.category}
          </span>
        </div>

        {/* Article Header */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
        >
          {article.title}
        </motion.h1>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 rounded-xl overflow-hidden shadow-2xl border-2 border-[#FDB927]/30"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="prose prose-lg max-w-none text-white"
        >
          <p className="text-xl leading-relaxed text-[#FDB927]/90">
            {article.description}
          </p>
          
          {/* Example expanded content (would be dynamic in real app) */}
          <div className="mt-12 space-y-6 text-white/80">
            <p>LeBron James cemented his legacy with the Los Angeles Lakers during their unforgettable 2020 championship run, leading the team through an unprecedented NBA season disrupted by the global pandemic. Inside the Orlando bubble, LeBron's leadership, experience, and unmatched basketball IQ guided the Lakers to their 17th NBA title, tying them with the Boston Celtics for the most in league history. Alongside Anthony Davis, LeBron delivered dominant performances night after night, silencing critics and bringing glory back to L.A. in honor of the late Kobe Bryant. The 2020 championship wasn't just a win—it was a testament to resilience, unity, and the enduring greatness of LeBron James.</p>
            
            <h2 className="text-2xl font-bold text-[#FDB927] mt-8">The Legacy Continues</h2>
            
            <p>LeBron's impact on the Lakers franchise extends beyond statistics and championships. His leadership both on and off the court has revitalized the Lakers brand and inspired a new generation of players.</p>
            
            <blockquote className="border-l-4 border-[#FDB927] pl-4 italic text-lg">
              "Wearing the purple and gold comes with tremendous responsibility. Every time I put on that Lakers uniform, I'm representing some of the greatest to ever play this game."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ArticleListPage