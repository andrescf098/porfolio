import { AboutMe } from 'app/components/About-me';
import { Contact } from 'app/components/Contact';
import { Presentation } from 'app/components/Presentation';
import { Projects } from 'app/components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Porfolio of Andrés Cifuentes',
};

export default function Home() {
  return (
    <main>
      <Presentation />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
