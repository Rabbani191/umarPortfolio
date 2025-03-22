'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';
import Image from 'next/image'; // ✅ Use Next.js Image component

// Import assets directly
import tech1 from '../../assets/tech/tech1.png';
import tech2 from '../../assets/tech/tech2.png';

const Tech = () => {
  return (
    <div className="tech-section">
      <motion.div variants={textVariant()}>
        <h2 className="section-title">Technologies</h2>
        <p className="section-description">
          My skills
        </p>
      </motion.div>
      <div className="tech-gallery">
        <Image src={tech1} alt="Tech 1" width={100} height={100} className="object-contain" />
        <Image src={tech2} alt="Tech 2" width={100} height={100} className="object-contain" />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
