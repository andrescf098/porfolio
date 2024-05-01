import { AboutMe } from 'app/components/About-me';
import { Contact } from 'app/components/Contact';
import { Presentation } from 'app/components/Presentation';
import { Projects } from 'app/components/Projects';
import { Separator } from 'app/components/Separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Porfolio',
};

export default function Home() {
  return (
    <main>
      <Presentation />
      <AboutMe />
      <Separator />
      <Projects />
      <Contact />
    </main>
  );
}
