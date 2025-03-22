import Tech from '../components/Tech';

export const metadata = {
  title: 'Technologies | Your Name',
  description: 'Discover the technologies and tools I specialize in as a software developer.',
};

export default function TechPage() {
  return (
    <section className="bg-tech bg-cover bg-center bg-no-repeat pt-6">
      <Tech />
    </section>
  );
}
