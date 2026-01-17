"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-sm mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight"
          >
            Vanshika Sethi.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6 tracking-tight"
          >
            Senior AI Product Manager
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-xl mb-4 leading-relaxed"
          >
            <span className="text-primary">GenAI, Platforms & Data Products</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            I build AI-powered platforms that scale from 0→1 to enterprise adoption. Currently focused on transforming
            how organizations leverage GenAI for measurable business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
            >
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                View Case Studies
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-primary">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/images/vanshika.jpeg" alt="Vanshika Sethi" fill className="object-cover object-top" priority />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/10 -z-10 translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </section>
  )
}
