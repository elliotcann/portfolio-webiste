"use client";

import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

type AnimationType = "fade-up" | "fade-in" | "zoom-out" | "fade-left" | "fade-right";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const variants: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  "zoom-out": {
    hidden:  { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1 },
  },
  "fade-left": {
    hidden:  { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden:  { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  );
}
