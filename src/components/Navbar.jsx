
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('about'); // Default active section
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (title) => {
    setActive(title);
    setToggle(false); // Close mobile menu after clicking a link

    const section = document.getElementById(title); // Get the section by ID
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }

    // Update URL without hash
    if (title === 'home') {
      window.history.replaceState(null, '', '/'); // Reset URL to root
    } else {
      window.history.replaceState(null, '', `/${title}`); // Update URL for other sections
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          // Check if the section is in the viewport
          if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            if (nav.id === 'home') {
              // If the current section is home, set URL to root
              if (active !== '') {
                setActive('');
                window.history.replaceState(null, '', '/'); // Reset URL to root
              }
            } else {
              // For other sections, update active state and URL
              if (active !== nav.id) {
                setActive(nav.id);
                window.history.replaceState(null, '', `/${nav.id}`); // Update URL
              }
            }
          }
        }
      });

      // Reset active state when at the top of the page
      if (scrollY === 0) {
        setActive('');
        window.history.replaceState(null, '', '/'); // Reset URL to root
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);
  
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
  to="/"
  className="flex items-center gap-2"
  onClick={() => {
    setActive('about'); // Change to 'about' since home is not used
    window.scrollTo(0, 0);
    window.history.replaceState(null, '', '/'); // Update URL for home
  }}>
  <img
    src={logo} // your logo comes here
    alt="logo"
    className="w-[120px] h-[120px] object-contain" // Increase to larger size
  />
</Link>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.id ? 'text-french' : 'text-eerieBlack'} hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}>
              <Link 
                to={`/${nav.id}`} 
                onClick={() => handleLinkClick(nav.id)}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div className={`p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'}`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col -gap-[1rem] items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${active === nav.id ? 'text-french' : 'text-eerieBlack'} text-[88px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => handleLinkClick(nav.id)}>
                    <Link to={`/${nav.id}`}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
