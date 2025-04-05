"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../constants";
import closeIcon from "../../assets/icons/close.png";
import menuIcon from "../../assets/icons/menu.png";
import logo from "../../assets/logo/logo-black.png";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [toggle, setToggle] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleLinkClick = useCallback(
    (title) => {
      setActive(title);
      setToggle(false);
      
      const section = document.getElementById(title);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

      if (title === "home") {
        router.push("/");
      } else {
        router.push(`/${title}`);
      }
    },
    [router]
  );

  useEffect(() => {
    if (!hydrated) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollY >= sectionTop - sectionHeight / 3 &&
            scrollY < sectionTop + sectionHeight - sectionHeight / 3
          ) {
            if (active !== nav.id) {
              setActive(nav.id);
              router.push(`/${nav.id}`);
            }
          }
        }
      });

      if (scrollY === 0 && active !== "") {
        setActive("home");
        router.push("/");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, router, hydrated]);

  if (!hydrated) return null;

  return (
    <nav className="w-full flex items-center py-1 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[8vh]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => handleLinkClick("home")}
        >
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="logo" width={100} height={60} className="object-contain" />
            <h1 className="font-black text-battleGray lg:text-[40px] sm:text-[28px] xs:text-[22px] text-[18px] lg:leading-none leading-none">
              RABBANI
            </h1>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[18px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
            >
              <Link href={`/${nav.id}`} onClick={() => handleLinkClick(nav.id)}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div className="p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10">
              <div className="flex justify-end">
                <Image
                  src={closeIcon}
                  alt="close"
                  width={22}
                  height={22}
                  className="object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>
              <ul className="list-none flex flex-col -gap-[1rem] items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.id ? "text-french" : "text-eerieBlack"
                    } text-[60px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => handleLinkClick(nav.id)}
                  >
                    <Link href={`/${nav.id}`}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Image
              src={menuIcon}
              alt="menu"
              width={34}
              height={34}
              className="object-contain cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
