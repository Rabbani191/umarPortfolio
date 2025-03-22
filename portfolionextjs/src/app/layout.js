import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import './globals.css'; // Ensure you have global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Umar Rabbani | Full-Stack Developer</title>
        <meta
          name="description"
          content="Experienced full-stack developer specializing in Angular, React, Node.js, AWS, and cloud-based solutions."
        />
        <meta property="og:title" content="Umar Rabbani | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Providing expert software solutions for startups and businesses."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

