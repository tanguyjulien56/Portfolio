import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function NavigationMenu() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <Menubar className={cn("hidden lg:flex")}>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section1")}>
            Presentation
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section2")}>
            Skills
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section3")}>
            Experience
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={() => scrollToSection("section4")}>
            Formation
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Menubar className={cn("lg:hidden")}>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu className="m-auto" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => scrollToSection("section1")}>
              Presentation
            </MenubarItem>
            <MenubarItem onClick={() => scrollToSection("section2")}>
              Skills
            </MenubarItem>
            <MenubarItem onClick={() => scrollToSection("section3")}>
              Experience
            </MenubarItem>
            <MenubarItem onClick={() => scrollToSection("section4")}>
              Formation
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}
