 import About from "./components/About";
// import Contact from "../app/components/Contact";
// import Experience from "../app/components/Experience";
import Home from "./components/Home";
// import Projects from "../app/components/Projects";
import Tech from "./components/Tech";

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about" className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </section>
      <section id="tech" className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Tech />
      </section>
      {/* <section id="projects">
        <Projects />
      </section>
      <section id="experience" className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
        <Experience />
      </section>
      <section id="contact" className="relative z-0">
        <Contact />
      </section> */}
    </main>
  );
}
