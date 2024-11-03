import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Tech,
  Projects,
  Footer,
} from './components';

const App = () => {
  return (
    <Router>
      <div className="relative z-0">
        <Navbar />
        
        {/* Main Route Rendering */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home" className="home-section">
                  <Home />
                </div>
                <div id="about" className="about-section bg-about bg-cover bg-center bg-no-repeat">
                  <About />
                </div>
                <div id="tech" className="tech-section bg-tech bg-cover bg-center bg-no-repeat pb-10">
                  <Tech />
                </div>
                <div id="projects" className="projects-section">
                  <Projects />
                </div>
                <div id="experience" className="experience-section bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
                  <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                    <Experience />
                  </div>
                </div>
                <div id="contact" className="contact-section relative z-0">
                  <Contact />
                </div>
              </>
            }
          />
          {/* Individual Routes for SEO with Specific Class Names */}
          <Route path="/about" element={<div className="about-section bg-about bg-cover bg-center bg-no-repeat pt-6"><About /></div>} />
          <Route path="/tech" element={<div className="tech-section bg-tech bg-cover bg-center bg-no-repeat pb-10 pt-6"><Tech /></div>} />
          <Route path="/projects" element={<div className="projects-section pt-6"><Projects /></div>} />
          <Route path="/experience" element={<div className="pt-6 experience-section bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]"><Experience /></div>} />
          <Route path="/contact" element={<div className="contact-section relative z-0 pt-6"><Contact /></div>} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
