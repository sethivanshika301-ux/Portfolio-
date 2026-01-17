"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm">07. What's Next?</span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Get In Touch</h2>

          <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto">
            I'm always interested in hearing about new AI product challenges, platform opportunities, or just connecting
            with fellow builders. Let's build something impactful.
          </p>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mb-12 bg-transparent"
          >
            <a href="mailto:sethi.vanshika301@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Say Hello
            </a>
          </Button>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:sethi.vanshika301@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vanshika-sethi-mba-695a54183/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/sethivanshika301-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
