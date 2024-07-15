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
            Qui-je suis ?
          </h2>
        </motion.div>
        <h3 className="text-3xl font-caption">
          Développeur Full Stack React, Next.js et Nest.js
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          En transition vers le développement web, je mets à profit plus de 15
          ans d'expérience en{" "}
          <Code className="inline-flex items-center gap-1 rounded">
            <span role="img" aria-label="engineering">
              🧑‍🎓
            </span>
            ingénierie
          </Code>{" "}
          de production, gestion de projet et amélioration continue. Certifié en
          développement{" "}
          <Code className="inline-flex items-center rounded">
            <span role="img" aria-label="full stack">
              🚀
            </span>
            full stack
          </Code>
          et contributeur à des projets open-source, je combine mes compétences
          techniques avec une solide expertise en gestion de projet. En dehors
          du travail, je suis passionné de sport et je m'implique activement
          dans ma communauté en gérant la communication et le site web de mon
          club de
          <Code className="inline-flex items-center gap-1 rounded">
            <span role="img" aria-label="cycling">
              🚴‍♂️
            </span>
            cycling
          </Code>
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
