"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Brain, Database, LineChart, Users, Zap } from "lucide-react"

const skills = [
  {
    icon: Target,
    title: "Product Strategy & Roadmapping",
    description: "End-to-end product lifecycle, from discovery to launch and iteration",
  },
  {
    icon: Brain,
    title: "GenAI (LLMs, RAG, Agents)",
    description: "Build vs buy decisions, model evaluation, prompt engineering, and AI safety",
  },
  {
    icon: Database,
    title: "Data Platforms & APIs",
    description: "Platform architecture, API design, and data infrastructure",
  },
  {
    icon: LineChart,
    title: "ML Lifecycle & Model Evaluation",
    description: "MLOps, model monitoring, A/B testing, and evaluation frameworks",
  },
  {
    icon: Users,
    title: "Stakeholder & Exec Communication",
    description: "Cross-functional alignment, executive storytelling, and influence without authority",
  },
  {
    icon: Zap,
    title: "Metrics, OKRs & Experimentation",
    description: "Data-driven decision making, hypothesis testing, and outcome measurement",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">02.</span>
            Core Skills
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <skill.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
