"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Folder } from "lucide-react"

const projects = [
  {
    title: "AI Prioritization Engine",
    subtitle: "Product Teams",
    problem: "Manual scoring frameworks were subjective, inconsistent, and time-consuming.",
    role: "Senior Product Manager (AI Platform)",
    decisions: [
      "Hybrid scoring (rules + ML) for explainability",
      "Prioritized trust over automation",
      "Designed for extensibility across orgs",
    ],
    metrics: ["35% reduction in planning time", "+28% roadmap confidence score", "Improved cross-team alignment"],
    tags: ["LLM", "Decision Science", "Platform"],
  },
  {
    title: "GenAI Knowledge Assistant",
    subtitle: "Enterprise RAG System",
    problem: "Knowledge fragmented across Confluence, Jira, Slack—high onboarding time.",
    role: "AI Product Manager",
    decisions: [
      "RAG over fine-tuning for iteration speed",
      "Source attribution for trust",
      "Phased rollout to high-usage teams",
    ],
    metrics: ["40% reduction in search time", "~30% fewer repetitive questions", "2+ weeks faster onboarding"],
    tags: ["RAG", "LLM", "Search"],
  },
  {
    title: "Enterprise Data Platform",
    subtitle: "Analytics Infrastructure",
    problem: "Data silos, inconsistent metrics, slow analytics turnaround.",
    role: "Senior Technical PM",
    decisions: [
      "Self-serve access over centralized reporting",
      "Early investment in metric standardization",
      "Balance flexibility with governance",
    ],
    metrics: ["50% faster analytics turnaround", "2x increase in data reuse", "Enabled downstream AI/ML"],
    tags: ["Data Platform", "APIs", "Governance"],
  },
  {
    title: "Agentic AI Workflows",
    subtitle: "Process Automation",
    problem: "Manual, repetitive processes consuming high-cost talent time.",
    role: "AI Product Manager",
    decisions: [
      "Human-in-the-loop for risk reduction",
      "Trust + completion over automation rate",
      "Started with narrow, high-confidence workflows",
    ],
    metrics: ["30-40% workflow automation", "Hundreds of hours saved quarterly", "Significant error rate reduction"],
    tags: ["Agents", "Automation", "LLM"],
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">03.</span>
            Featured Case Studies
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Project Info */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                    <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-4">
                        <Folder className="h-5 w-5 text-primary" />
                        <span className="text-xs font-mono text-primary">{project.subtitle}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        <span className="text-foreground font-medium">Problem:</span> {project.problem}
                      </p>

                      <p className="text-muted-foreground text-sm mb-4">
                        <span className="text-foreground font-medium">Role:</span> {project.role}
                      </p>

                      <div className="mb-4">
                        <span className="text-foreground font-medium text-sm">Key Decisions:</span>
                        <ul className="mt-2 space-y-1">
                          {project.decisions.map((decision) => (
                            <li key={decision} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5">▹</span>
                              {decision}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <span className="text-foreground font-medium text-sm">Impact:</span>
                        <ul className="mt-2 space-y-1">
                          {project.metrics.map((metric) => (
                            <li key={metric} className="text-sm text-primary flex items-start gap-2">
                              <span className="text-primary mt-1.5">✓</span>
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a href="#" className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline">
                        View Case Study
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
