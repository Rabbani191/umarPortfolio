import About from '../components/About';

export const metadata = {
  title: 'About Me | Your Name',
  description: 'Discover my journey as a Full Stack Developer and my expertise in building scalable applications.',
};

export default function AboutPage() {
  return (
    <section className="bg-about bg-cover bg-center bg-no-repeat pt-6">
      <About />
    </section>
  );
}
