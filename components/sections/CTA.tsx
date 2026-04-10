"use client";

import Link from "next/link";
import { clinicConfig } from "@/lib/clinic-config";
import { colors } from "@/lib/colors";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardItem, sectionHeader } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: colors.secondaryDark }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{
            backgroundColor: colors.secondaryCard,
            border: `1px solid ${colors.borderTertiary30}`,
            boxShadow: `0 0 60px ${colors.glowTertiary08}`,
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${colors.glowTertiary08} 0%, transparent 70%)`,
            }}
          />

          {/* Decorative top line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{
              width: "120px",
              height: "2px",
              background: colors.gradientDividerH,
            }}
          />

          <motion.div
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: colors.tertiary,
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Get Started Today
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 500,
                color: colors.primaryFaint,
                letterSpacing: "0.03em",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Book Your Consultation Today
            </motion.h2>

            {/* Divider */}
            <motion.div variants={cardItem} className="flex items-center justify-center gap-4 mb-6">
              <div style={{ width: "40px", height: "1px", background: colors.gradientDividerL }} />
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: colors.tertiary }} />
              <div style={{ width: "40px", height: "1px", background: colors.gradientDividerR }} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: colors.textMuted,
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              Get personalized skin &amp; hair treatment guidance from Dr Jyoti.
              <br />
              Expert care, proven results.
            </motion.p>

            {/* Phone number */}
            <motion.a
              href={`tel:${clinicConfig.phone}`}
              className="inline-flex items-center gap-3 mb-8 group"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.bgTertiary15, border: `1px solid ${colors.borderTertiary30}` }}
              >
                <svg width="16" height="16" fill={colors.tertiary} viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  background: colors.gradientTertiary,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.05em",
                }}
              >
                {clinicConfig.phoneDisplay}
              </span>
            </motion.a>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={cardItem}
            >
              <Link href="/book">
                <motion.button
                  className="btn-gold px-10 py-3.5 rounded text-sm"
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase", minWidth: "200px" }}
                  whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Book Appointment
                </motion.button>
              </Link>
              <a href={`tel:${clinicConfig.phone}`}>
                <motion.button
                  className="btn-gold-outline px-10 py-3.5 rounded text-sm"
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase", minWidth: "200px" }}
                  whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Call Now
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
