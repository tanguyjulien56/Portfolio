"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import Section from "./Section";
import ReactIcon from "./ui/icon/ReactIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => (
  <span
    className={cn(
      "bg-accent/30 font-mono border border-accent p-1 m-1  rounded-sm hover:bg-accent/50 transition-colors",
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
    <Section className="flex  max-md:flex-col gap-5 items-center">
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
        <p className="leading-7 [&:not(:first-child)]:">
          je suis développeur web full stack
          <Code className="inline-flex items-center gap-1 rounded">
            <ReactIcon size={16} className="inline color-primary" />
            React
          </Code>
          En pleine reconversion professionnelle, je me passionne pour le
          développement full stack après plus de 15 ans d'expérience en
          ingénierie de la production, gestion de projets et amélioration
          continue. Certifié en développement full stack et ayant réalisé des
          projets open source, je combine mes compétences techniques avec mon
          expertise en management. Passionné de sports et engagé dans la vie
          associative, je gère également la communication et le site internet de
          mon club de vélo. 🚀🚴‍♂️
        </p>
      </div>
      <div className="flex-[2] m-auto">
        <img
          src="/profile-pic.png"
          className="rounded-full w-full m-auto h-auto max-w-xs max-md:w-56  shadow-lg shadow-purple-700/10"
        />
      </div>
    </Section>
  );
}
