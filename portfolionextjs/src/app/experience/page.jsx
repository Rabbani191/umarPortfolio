import Experience from '../components/Experience';

export const metadata = {
  title: 'Experience | Your Name',
  description: 'Explore my professional journey and the experiences that have shaped my career.',
};

export default function HomePage() {
  return (
    <section className="bg-experience bg-cover bg-center bg-no-repeat pt-6">
      <Experience />
    </section>
  );
}
