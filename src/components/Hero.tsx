"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import Section from "./Section";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => (
  <span
    className={cn(
      "bg-accent/30 font-mono border border-accent px-1 py-0 mx-1 rounded-sm hover:bg-accent/50 transition-colors",
      className
    )}
    {...props}
  />
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <Section className="flex max-md:flex-col gap-5 items-center">
      <div className="flex-[3] flex flex-col gap-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
            Who am I?
          </h2>
        </motion.div>
        <h3 className="text-3xl font-caption">
          Développeur Full Stack React, Node.js, Next.js
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Transitioning into full stack web development, I am passionate about
          leveraging over 15 years of experience in production
          <Code className="inline-flex items-center gap-1 rounded">
            <span role="img" aria-label="engineering">
              🧑‍🎓
            </span>
            engineering
          </Code>
          , project management, and continuous improvement. Certified in
          <Code className="inline-flex items-center rounded">
            <span role="img" aria-label="full stack">
              🚀
            </span>
            full stack
          </Code>
          development and contributing to open-source projects, I merge
          technical skills with management expertise. Outside of work, I am an
          avid sports enthusiast and actively involved in community engagement,
          managing communication and the website for my
          <Code className="inline-flex items-center gap-1 rounded">
            <span role="img" aria-label="cycling">
              🚴‍♂️
            </span>
            cycling
          </Code>
          club.
        </p>
      </div>
      <div className="flex-[2] m-auto">
        <img
          src="/profile-pic.png"
          className="rounded-full w-full m-auto h-auto max-w-xs max-md:w-56 shadow-lg shadow-purple-700/10"
          alt="Profile"
        />
      </div>
    </Section>
  );
}
