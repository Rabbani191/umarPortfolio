"use client";

import React from 'react';
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { technologies } from "../../constants";
import { styles } from "../styles";

// Create Error Boundary for Three.js components
class ThreeJSErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ThreeJS Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="w-full h-full bg-tertiary rounded-full flex items-center justify-center">{this.props.fallback}</div>;
    }

    return this.props.children;
  }
}

// Import BallCanvas with no SSR
const BallCanvas = dynamic(
  () => import("../components/canvas/Ball"),
  { ssr: false }
);

const Tech = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {isMounted && technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <ThreeJSErrorBoundary fallback={technology.name}>
              <BallCanvas icon={technology.icon} />
            </ThreeJSErrorBoundary>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");