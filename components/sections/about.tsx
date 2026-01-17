"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-8">
            <span className="text-primary font-mono text-lg">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Product Manager with 3+ years of experience building products at the intersection of{" "}
              <span className="text-primary">artificial intelligence</span>,
              <span className="text-primary"> platform infrastructure</span>, and
              <span className="text-primary"> data systems</span>.
            </p>
            <p>
              My focus is on GenAI products—from LLM-powered applications and RAG systems to agentic workflows and AI
              platforms. I thrive in environments where I can bridge the gap between cutting-edge ML capabilities and
              real-world business value.
            </p>
            <p>
              I believe the best AI products are built on a foundation of deep collaboration between product,
              engineering, and data science teams. My approach combines rigorous experimentation, platform thinking, and
              a relentless focus on measurable outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
