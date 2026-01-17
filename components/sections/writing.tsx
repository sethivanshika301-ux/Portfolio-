"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"

const articles = [
  {
    title: "AI & Product Management: A New Operating Model",
    description:
      "How AI is fundamentally changing the PM role—from intuition-driven to evidence-augmented decision making.",
    date: "Jan 2026",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "Building GenAI Platforms at Scale",
    description: "Lessons learned from deploying RAG systems and LLM applications across enterprise organizations.",
    date: "Dec 2025",
    readTime: "12 min read",
    href: "#",
  },
  {
    title: "From Models to Products: The PM's Guide to AI",
    description: "Bridging the gap between ML capabilities and user value—a framework for AI product development.",
    date: "Nov 2025",
    readTime: "10 min read",
    href: "#",
  },
]

export function WritingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="writing" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">06.</span>
            Writing & Thought Leadership
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                  <span>·</span>
                  {article.readTime}
                </div>

                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-start gap-1">
                  {article.title}
                  <ArrowUpRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
