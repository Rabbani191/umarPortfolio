"use client";

import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import Image from 'next/image'; // ✅ Use Next.js Image component

// Import assets directly
import bwmap from '../../assets/backgrounds/bw-map.jpeg';
import worldmap from '../../assets/backgrounds/world-map.png';
import shaq from '../../assets/personal/shaq.png';
import { styles } from '../styles';

const Home = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <Image
          src={bwmap}
          alt="world map"
          layout="fill"
          objectFit="cover"
          className="sm:block hidden"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <Image
          src={worldmap}
          alt="world map"
          layout="fill"
          objectFit="cover"
          className="sm:hidden block"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>
          <div className="flex flex-col items-center text-center">
  <div className="flex w-full justify-start"> {/* Change justify-end to justify-start */}
    <h2 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
      Hi, I'm
    </h2>
  </div>

  <span className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase whitespace-nowrap">
    Umar Rabbani
  </span>

  <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
  <span className="block">Full Stack Dev</span>
  <span className="block ">Node.js, Angular, React & AWS</span>
  <span className="block">Fintech, WMS, E-com, LMS, Health</span>
</p>
</div>



          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <Image
            src={shaq}
            alt="shaquille"
            width={500}
            height={900}
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[65vw] md:ml-[48vw] xmd:ml-[48vw] 2xl:ml-[71vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
