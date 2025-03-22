import Contact from '../components/Contact';

export const metadata = {
  title: 'Contact Me | Your Name',
  description: 'Get in touch with me for software development, web solutions, and collaboration.',
};

export default function ContactPage() {
  return (
    <section className="bg-contact bg-cover bg-center bg-no-repeat pt-6">
      <Contact />
    </section>
  );
}
