import Home from '../../components/Home';

export const metadata = {
  title: 'Home | Your Name',
  description: 'Explore my professional journey and the experiences that have shaped my career.',
};

export default function ExperiencePage() {
  return (
    <section className="bg-home bg-cover bg-center bg-no-repeat pt-6">
      <Home />
    </section>
  );
}
