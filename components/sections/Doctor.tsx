"use client";

import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "@/lib/clinic-config";
import { colors } from "@/lib/colors";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer, cardItem, sectionHeader } from "@/lib/animations";

const credentials = [
  "BAMS – Medical Graduate",
  "Certified Aesthetic Skin Specialist",
  "Laser & Cosmetic Procedure Expert",
  "5+ Years Clinical Experience",
  "500+ Satisfied Patients",
];

const specializations = [
  "Advanced Laser Treatments",
  "Anti-Aging & Skin Rejuvenation",
  "Hair Restoration (PRP & Transplant)",
  "Body Contouring & Slimming",
  "Aesthetic Gynecology",
];

export default function Doctor() {
  return (
    <section
      id="doctor"
      className="w-full py-20"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: colors.tertiary,
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Meet Your Expert
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 500,
              color: colors.primaryFaint,
              letterSpacing: "0.03em",
              marginBottom: "1rem",
            }}
          >
            About Dr Jyoti
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerL }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: colors.tertiary }} />
            <div style={{ width: "50px", height: "1px", background: colors.gradientDividerR }} />
          </motion.div>
        </motion.div>

        {/* Doctor profile card */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            border: `1px solid ${colors.borderTertiary25}`,
            backgroundColor: colors.secondaryCard,
            boxShadow: `0 0 60px ${colors.glowTertiary08}`,
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid md:grid-cols-2 gap-0">

            {/* Image side */}
            <motion.div
              className="relative flex items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${colors.glowTertiary13} 0%, transparent 70%)`,
                borderColor: colors.borderTertiary15,
              }}
              variants={fadeIn}
            >
              {/* Mobile image */}
              <motion.div
                className="md:hidden"
                style={{
                  width: "min(280px, 80vw)",
                  height: "min(380px, 110vw)",
                  overflow: "hidden",
                  border: `2px solid ${colors.borderTertiary40}`,
                  boxShadow: `0 0 40px ${colors.borderTertiary30}`,
                }}
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={clinicConfig.doctor_profile}
                  alt="Dr Jyoti"
                  width={280}
                  height={380}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>
              {/* Desktop image */}
              <motion.div
                className="hidden md:block"
                style={{
                  width: "360px",
                  height: "520px",
                  overflow: "hidden",
                  border: `2px solid ${colors.borderTertiary40}`,
                  boxShadow: `0 0 40px ${colors.borderTertiary30}`,
                }}
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image
                  src={clinicConfig.doctor_profile}
                  alt="Dr Jyoti"
                  width={360}
                  height={520}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>

              {/* Decorative lines */}
              <div
                className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-12 md:h-12 pointer-events-none"
                style={{
                  borderTop: `1px solid ${colors.borderTertiary40}`,
                  borderLeft: `1px solid ${colors.borderTertiary40}`,
                }}
              />
              <div
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 pointer-events-none"
                style={{
                  borderBottom: `1px solid ${colors.borderTertiary40}`,
                  borderRight: `1px solid ${colors.borderTertiary40}`,
                }}
              />
            </motion.div>

            {/* Content side */}
            <motion.div
              className="p-6 sm:p-8 md:p-10 flex flex-col justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={cardItem}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 600,
                  background: colors.gradientTertiary,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "0.25rem",
                  letterSpacing: "0.03em",
                }}
              >
                Dr Jyoti Rathor
              </motion.div>
              <motion.div
                variants={cardItem}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  color: colors.textMuted,
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                Aesthetic Dermatologist &amp; Cosmetologist
              </motion.div>

              {/* Bio */}
              <motion.p
                variants={cardItem}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: colors.primary,
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                With over 4 years of clinical excellence, Dr Jyoti combines medical
                precision with artistic vision to deliver transformative aesthetic
                results. Her patient-first approach has made her one of the most
                trusted names in Navi Mumbai.
              </motion.p>

              {/* Credentials */}
              <motion.div variants={cardItem} style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: colors.tertiary,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Credentials
                </div>
                <ul className="space-y-1.5">
                  {credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: colors.textMuted }}
                    >
                      <span style={{ color: colors.tertiary, fontSize: "8px" }}>●</span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Specializations */}
              <motion.div variants={cardItem} style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: colors.tertiary,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Specializations
                </div>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        border: `1px solid ${colors.borderTertiary25}`,
                        color: colors.textSubtle,
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.05em",
                        backgroundColor: colors.bgTertiary15,
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={cardItem}>
                <Link href="/book">
                  <motion.button
                    className="btn-gold px-8 py-3 rounded text-xs"
                    style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
                    whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    Book a Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
