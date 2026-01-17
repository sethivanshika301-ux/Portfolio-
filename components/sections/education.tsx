"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    type: "degree",
    title: "MBA, Business Analytics",
    institution: "University of Massachusetts",
    year: "2025",
  },
  {
    type: "degree",
    title: "B.S. Electronics and Communication",
    institution: "UIET, Minor in Computer Science",
    year: "2021",
  },
]

const certifications = [
  "AWS Certified Machine Learning – Specialty",
  "Google Cloud Professional Data Engineer",
  "Pragmatic Institute Product Certified",
  "Stanford AI Professional Program",
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">05.</span>
            Education & Certifications
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <span className="text-xs font-mono text-primary">{item.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Certifications</h3>
              </div>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">▹</span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
