import {Projects} from '../components/Projects';

export const metadata = {
  title: 'Projects | Your Name',
  description: 'Discover the technologies and tools I specialize in as a software developer.',
};

export default function TechPage() {
  return (
    <section className="bg-projects bg-cover bg-center bg-no-repeat pt-6">
      <Projects />
    </section>
  );
}
