"use client";
import { motion } from "framer-motion";
import Section from "./Section";
import { Spacing } from "./Spacing";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import ArrowLeft from "./ui/icon/ArrowLeft";
import ArrowRight from "./ui/icon/ArrowRight";

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Section className="flex flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="outline" className="m-4">
          Skills
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
          talk about my experience
        </h2>
      </motion.div>
      <section className="relative ml-10 flex max-md:flex-col lg:ml-0">
        <div className="flex-1 border-l-2 border-customColors lg:border-l-0 lg:border-r-2 lg:w-1/2">
          {/* Premier Card */}
          <motion.div
            className="flex-[1]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <Card className="custom-card-right-lg hover:shadow-lg border-1px hover:shadow-purple-500/10">
              <div className="custom-logo-experience-mobile lg:hidden">
                <img
                  src="/question.svg"
                  alt="group rocher"
                  className="flex justify-center items-center p-2.5"
                />
              </div>
              <div className="custom-logo-experience-lg-right">
                <img
                  src="/question.svg"
                  alt="group rocher"
                  className="flex justify-center items-center p-2.5"
                />
              </div>
              <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Comment votre projet ?
              </h3>
              <p className="leading-7 [&:not(:first-child)]:my-4">
                Si vous avez un projet passionnant en tête, je suis prêt à
                collaborer. N&apos;hésitez pas à me contacter - je suis
                enthousiaste à l&apos;idée d&apos;explorer de nouvelles
                opportunités et de discuter de la manière dont nous pouvons
                travailler ensemble !
              </p>
              <div className="absolute top-3 -left-7 ml-0.5 translate-x-1/2 translate-y-1/2">
                <ArrowLeft />
              </div>
            </Card>
          </motion.div>

          {/* Deuxième Card */}
          <Card className="relative p-4 ml-12 lg:mr-20 lg:ml-0 mt-3 hover:shadow-lg border-1px hover:shadow-purple-500/10">
            <div className="custom-logo-experience-mobile lg:hidden">
              <img
                src="/logo-alt.jpeg"
                alt="alt"
                className="flex justify-center items-center"
              />
            </div>
            <div className="hidden lg:flex absolute justify-center items-center -right-28 top-1 bg-white border border-gray-300 rounded-full w-16 h-16 p-1">
              <img
                src="/logo-alt.jpeg"
                alt="alt"
                className="flex justify-center items-center"
              />
            </div>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Développeur Web
            </h3>
            <p className="text-xs">Alt | Incubateur Tech · CDD</p>
            <p className="text-xs text-muted-foreground">
              déc. 2023 - aujourd’hui · 7 mois
            </p>
            <p className="text-xs text-muted-foreground">
              Rennes, Bretagne, France · À distance
            </p>
            <p className="leading-7 [&:not(:first-child)]:my-4">
              Conception et développement d&apos;une plateforme en ligne dédiée
              à faciliter la coordination entre parents, enseignants et élèves
              pour la gestion des sorties extra-scolaires et le soutien
              scolaire.
            </p>
            <div className="hidden lg:block absolute top-3 -right-0.5 translate-x-1/2 translate-y-1/2">
              <ArrowRight />
            </div>
            <div className="lg:hidden absolute top-3 -left-7 ml-0.5 translate-x-1/2 translate-y-1/2">
              <ArrowLeft />
            </div>
            <section className="flex flex-wrap gap-2">
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                React
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Tailwind
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Nestjs
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Docker
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Sql
              </Badge>
            </section>
          </Card>
          {/* Troisième Card */}
          <Card className="custom-card-right-lg hover:shadow-lg border-1px hover:shadow-purple-500/10">
            <div className="custom-logo-experience-mobile lg:hidden">
              <img
                src="/logo-group-rocher.jpg"
                alt="group rocher"
                className="flex justify-center items-center p-2.5"
              />
            </div>
            <div className="custom-logo-experience-lg-right">
              <img
                src="/logo-group-rocher.jpg"
                alt="alt"
                className="flex justify-center items-center p-2.5 "
              />
            </div>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Responsable industrialisation
            </h3>

            <p className="text-xs">Groupe Rocher · CDI</p>

            <p className="text-xs text-muted-foreground">
              août 2012 - dec 2023 · 3 ans et 4 mois
            </p>
            <p className="text-xs text-muted-foreground">
              Ploërmel, Bretagne, France
            </p>
            <p className="leading-7 [&:not(:first-child)]:my-4">
              Assurer l'amélioration de la performance industrielle au travers
              de la réduction des CRP, établir la stratégie industrielle du site
              de production, et manager une équipe de 10 personnes tout en
              respectant les objectifs du groupe, en optimisant les process
              associés.
            </p>
            <div className="absolute top-3 -left-7 ml-0.5 translate-x-1/2  translate-y-1/2  ">
              <ArrowLeft />
            </div>
            <section className=" flexwrap">
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Management
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Stratégie
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                CRP
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Sécurité
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Lean
              </Badge>
            </section>
          </Card>
          <Card className="custom-card-right-lg hover:shadow-lg border-1px hover:shadow-purple-500/10">
            <div className="custom-logo-experience-mobile lg:hidden">
              <img
                src="/logo-group-rocher.jpg"
                alt="group rocher"
                className="flex justify-center items-center p-2.5"
              />
            </div>
            <div className="custom-logo-experience-lg-right">
              <img
                src="/logo-group-rocher.jpg"
                alt="alt"
                className="flex justify-center items-center p-2.5 "
              />
            </div>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Responsable industrialisation
            </h3>

            <p className="text-xs ">Groupe Rocher · CDI</p>

            <p className="text-xs text-muted-foreground">
              août 2012 - dec 2023 · 3 ans et 4 mois
            </p>
            <p className="text-xs text-muted-foreground">
              Ploërmel, Bretagne, France
            </p>
            <p className="leading-7 [&:not(:first-child)]:my-4">
              Assurer l'amélioration de la performance industrielle au travers
              de la réduction des CRP, établir la stratégie industrielle du site
              de production, et manager une équipe de 10 personnes tout en
              respectant les objectifs du groupe, en optimisant les process
              associés.
            </p>
            <div className="absolute top-3 -left-7 ml-0.5 translate-x-1/2  translate-y-1/2  ">
              <ArrowLeft />
            </div>
            <section className=" flexwrap">
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Management
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Stratégie
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                CRP
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Sécurité
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Lean
              </Badge>
            </section>
          </Card>
          <Card className="custom-card-right-lg hover:shadow-lg border-1px hover:shadow-purple-500/10">
            <div className="custom-logo-experience-mobile lg:hidden">
              <img
                src="/logo-group-rocher.jpg"
                alt="group rocher"
                className="flex justify-center items-center p-2.5"
              />
            </div>
            <div className="custom-logo-experience-lg-right">
              <img
                src="/logo-group-rocher.jpg"
                alt="alt"
                className="flex justify-center items-center p-2.5 "
              />
            </div>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Responsable industrialisation
            </h3>

            <p className="text-xs ">Groupe Rocher · CDI</p>

            <p className="text-xs text-muted-foreground">
              août 2012 - dec 2023 · 3 ans et 4 mois
            </p>
            <p className="text-xs text-muted-foreground">
              Ploërmel, Bretagne, France
            </p>
            <p className="leading-7 [&:not(:first-child)]:my-4">
              Assurer l'amélioration de la performance industrielle au travers
              de la réduction des CRP, établir la stratégie industrielle du site
              de production, et manager une équipe de 10 personnes tout en
              respectant les objectifs du groupe, en optimisant les process
              associés.
            </p>
            <div className="absolute top-3 -left-7 ml-0.5 translate-x-1/2  translate-y-1/2  ">
              <ArrowLeft />
            </div>
            <section className=" flexwrap">
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Management
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Stratégie
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                CRP
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Sécurité
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Lean
              </Badge>
            </section>
          </Card>
          <Card className="relative p-4 ml-12 lg:mr-20 lg:ml-0 mt-3 hover:shadow-lg border-1px hover:shadow-purple-500/10">
            <div className="custom-logo-experience-mobile lg:hidden">
              <img
                src="/stef.jpeg"
                alt="alt"
                className="flex justify-center items-center"
              />
            </div>
            <div className="hidden lg:flex absolute justify-center items-center -right-28  top-1   bg-white border border-gray-300 rounded-full w-16 h-16 p-1 ">
              <img
                src="/stef.jpeg"
                alt="alt"
                className="flex justify-center items-center"
              />
            </div>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Developpeur Web
            </h3>
            <p className="text-xs ">Alt | Incubateur Tech · CDD</p>
            <p className="text-xs text-muted-foreground">
              déc. 2023 - aujourd’hui · 7 mois
            </p>
            <p className="text-xs text-muted-foreground">
              Rennes, Bretagne, France · À distance
            </p>
            <p className="leading-7 [&:not(:first-child)]:my-4">
              Conception et développement d'une plateforme en ligne dédiée à
              faciliter la coordination entre parents, enseignants et élèves
              pour la gestion des sorties extra-scolaires et le soutien
              scolaire.
            </p>
            <div className="hidden lg:block absolute top-3 -right-0.5 translate-x-1/2  translate-y-1/2 ">
              <ArrowRight />
            </div>
            <div className=" lg:hidden absolute top-3 -left-7 ml-0.5 translate-x-1/2  translate-y-1/2 ">
              <ArrowLeft />
            </div>
            <section className=" flexwrap gap-2">
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                React
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Tailwind
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Nestjs
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Docker
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Sql
              </Badge>
            </section>
          </Card>
          <Card className="custom-card-right-lg hover:shadow-lg border-1px hover:shadow-purple-500/10">
            <div className="custom-logo-experience-mobile lg:hidden">
              <img
                src="/decathlon.png"
                alt="group rocher"
                className="flex justify-center items-center p-0.5"
              />
            </div>
            <div className="custom-logo-experience-lg-right">
              <img
                src="/decathlon.png"
                alt="group rocher"
                className="flex justify-center items-center p-0.5"
              />
            </div>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Responsable industrialisation
            </h3>

            <p className="text-xs ">Groupe Rocher · CDI</p>

            <p className="text-xs text-muted-foreground">
              août 2012 - dec 2023 · 3 ans et 4 mois
            </p>
            <p className="text-xs text-muted-foreground">
              Ploërmel, Bretagne, France
            </p>
            <p className="leading-7 [&:not(:first-child)]:my-4">
              Assurer l'amélioration de la performance industrielle au travers
              de la réduction des CRP, établir la stratégie industrielle du site
              de production, et manager une équipe de 10 personnes tout en
              respectant les objectifs du groupe, en optimisant les process
              associés.
            </p>
            <div className="absolute top-3 -left-7 ml-0.5 translate-x-1/2  translate-y-1/2  ">
              <ArrowLeft />
            </div>
            <section className=" flexwrap">
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Management
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Stratégie
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                CRP
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Sécurité
              </Badge>
              <Badge
                variant={"outline"}
                className="shadow-md shadow-purple-500/10"
              >
                Lean
              </Badge>
            </section>
          </Card>
        </div>
        {/* Espace supplémentaire pour les écrans larges */}
        <div className="hidden lg:block flex-1">
          <Spacing size="lg" />
          <Spacing size="md" />
        </div>
      </section>
    </Section>
  );
}
