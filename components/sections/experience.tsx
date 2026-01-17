"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    company: "State Street",
    role: "Technical Project Intern",
    period: "2024",
    highlights: [
      "Supported technical project delivery for enterprise financial systems",
      "Collaborated with cross-functional teams on product initiatives",
      "Contributed to process improvements and documentation",
    ],
  },
  {
    company: "Arcesium",
    role: "Product Manager, Data Platform",
    period: "2023 — 2024",
    highlights: [
      "Owned data platform roadmap serving internal analysts",
      "Drove product strategy for data infrastructure initiatives",
      "Partnered with engineering teams on platform capabilities",
    ],
  },
  {
    company: "Target",
    role: "Technical Product Manager",
    period: "2021 — 2023",
    highlights: [
      "Led technical product initiatives across multiple teams",
      "Defined product roadmap and prioritization frameworks",
      "Collaborated with stakeholders to deliver business value",
    ],
  },
  {
    company: "Target",
    role: "Software Engineer",
    period: "2020 — 2021",
    highlights: [
      "Built and maintained software systems at scale",
      "Collaborated with product teams on feature development",
      "Contributed to engineering best practices and code quality",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">04.</span>
            Experience
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative grid md:grid-cols-2 gap-6 ${index % 2 === 0 ? "" : "md:text-right"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1 md:-translate-x-1.5 mt-1.5" />

                  {/* Content */}
                  <div
                    className={`ml-6 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12 md:text-left"}`}
                  >
                    <span className="text-sm font-mono text-primary">{exp.period}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1">{exp.role}</h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>

                    <ul className="space-y-2 text-left">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
