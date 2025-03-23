import { AboutMe } from "app/components/About-me";
import { ContactMe } from "app/components/Contact-me";
import { Presentation } from "app/components/Presentation";
import { Projects } from "app/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Porfolio",
};

export default function Home() {
  return (
    <main>
      <Presentation />
      <Projects />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
