"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import Section from "./Section";
import { Card } from "./ui/card";
import DockerIcon from "./ui/icon/DockerIcon";
import NIcon from "./ui/icon/NIcon";
import ReactIcon from "./ui/icon/ReactIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => (
  <span
    className={cn(
      "bg-accent/30 font-mono border border-accent p-1 m-1 rounded-sm hover:bg-accent/50 transition-colors",
      className
    )}
    {...props}
  />
);

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <Section className="flex flex-col gap-5 items-start">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
          J'aime travailler sur...
        </h2>
      </motion.div>
      <section className="flex max-md:flex-col gap-5">
        <motion.div
          className="flex-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <Card className="card-3d flex flex-col gap-2 p-4 shadow-md hover:shadow-lg items-center justify-center hover:shadow-purple-500/10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              React
            </h4>
            <ReactIcon size={64} />
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              J'utilise principalement la librairie <Code>React</Code>.
              J'utilise également le framework <Code>Next.js</Code>
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="flex-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <Card className="card-3d flex flex-col gap-2 p-4 shadow-md hover:shadow-lg items-center justify-center hover:shadow-purple-500/10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Nest.js
            </h4>
            <NIcon size={64} />
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Pour le back-end, j'utilise <Code>Nest.js</Code> pour mes projets
              en raison de son architecture robuste et évolutive.
            </p>
          </Card>
        </motion.div>

        <motion.div
          className="flex-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <Card className="card-3d flex flex-col gap-2 p-4 shadow-md hover:shadow-lg items-center justify-center hover:shadow-purple-500/10">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Docker
            </h4>
            <DockerIcon size={64} />
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              J'utilise <Code>Docker</Code> pour containeriser mes apps et
              garantir la cohérence entre les différents environnements.
            </p>
          </Card>
        </motion.div>
      </section>
    </Section>
  );
};

export default Skills;
