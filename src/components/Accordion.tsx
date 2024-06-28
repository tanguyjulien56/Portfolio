import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "./Section";
import { Card } from "./ui/card";

export function FormationAccordion() {
  return (
    <Section className="flex flex-col gap-5 ">
      <Card className=" flex flex-col w-full gap-2 px-2 hover:shadow-lg hover:shadow-purple-500/10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <section className="flex gap-3">
                <div className="flex bg-white h-16 w-16 items-center rounded">
                  <img src="/logo-alt.jpeg" className=" p-1 rounded " />
                </div>
                <div className="flex items-start text-base align-items-start flex-col gap-2">
                  <h3 className="scroll-m-20  font-semibold tracking-tight">
                    Concepteur développeur d’application
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    2024 - Titre RNCP de Niveau 6 (Bac+4)
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              <h4 className="scroll-m-20 font-semibold tracking-tight">
                Pourquoi cette formation?
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                J'ai choisi de me lancer dans le développement full stack car je
                suis profondément curieux, toujours avide de comprendre et
                d'apprendre de nouvelles choses. Mon esprit créatif cherche
                constamment des défis, et j'ai une nature pugnace qui trouve une
                satisfaction personnelle dans la résolution de problèmes
                complexes.
              </p>
              <h4 className="scroll-m-20 font-semibold tracking-tight mt-4">
                Ce que j’ai appris
              </h4>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Développer en Javascript, HTML et CSS</li>
                <li>
                  Etablir les cas d’utilisations d’une application et maquetter
                  ses interfaces
                </li>
                <li>Développer la partie web responsive d’une application</li>
                <li>Développer la version mobile d’une application</li>
                <li>Pratiquer des tests unitaires</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <section className="flex gap-3">
                <div className="flex bg-white h-16 w-16 items-center rounded ">
                  <img
                    src="/logo-ensibs.png"
                    className=" bg-white p-2 rounded "
                  />
                </div>
                <div className="flex items-start text-base align-items-start flex-col gap-2">
                  <p>Master Ingénierie de la Production</p>
                  <p className="text-xs text-muted-foreground">
                    2005 - 2008 Ingénieur Bac+5 - Mention assez-bien
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <section className="flex gap-3">
                <div className="flex bg-white h-16 w-16 items-center rounded">
                  <img
                    src="/logo-iut.png"
                    className="w-16 bg-white p-2 rounded "
                  />
                </div>
                <div className="flex items-start text-base align-items-start flex-col gap-2">
                  <p>DUT Génie Industriel et Maintenance</p>
                  <p className="text-xs text-muted-foreground">
                    2003 - 2005 Technicien Bac+2
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <section className="flex gap-3">
                <div className="flex bg-white h-16 w-16 items-center rounded">
                  <img
                    src="/logo-lesage.png"
                    className="w-16 bg-white p-2 rounded "
                  />
                </div>
                <div className="flex items-start text-base align-items-start flex-col gap-2">
                  <p>2003 - 2005 Technicien Bac+2</p>
                  <p className="text-xs text-muted-foreground">
                    2003 - 2005 - Mention Bien
                  </p>
                </div>
              </section>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </Section>
  );
}
