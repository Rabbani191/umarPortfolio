import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Ensures it triggers on first view
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-[250px] sm:w-[250px] md:w-[30%] lg:w-[20%] card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem] px-4 sm:px-6 lg:px-8">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Elevate your projects with my services as a Full Stack Developer. I specialize in delivering scalable applications and exceptional user experiences tailored to your business needs. With expertise in Angular, React, Node.js, and AWS, I create innovative solutions across diverse industries, including Fintech, Warehouse Management, E-commerce, Education, Hostel Management, and the Energy sector. Partner with me to transform your ideas into successful outcomes.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-6 justify-center lg:justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
