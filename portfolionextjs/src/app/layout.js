"use client";

import { useEffect } from 'react';
import { Suspense } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import './globals.css'; // Ensure you have global styles

// Create a component to suppress hydration warnings
const BodyAttributeRemover = ({ children }) => {
  useEffect(() => {
    // Remove Grammarly extension attributes that cause hydration issues
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(({ target }) => {
        if (target.tagName === 'BODY') {
          const grammarly = [
            'data-new-gr-c-s-check-loaded',
            'data-gr-ext-installed'
          ];
          
          grammarly.forEach(attr => {
            if (target.hasAttribute(attr)) {
              target.removeAttribute(attr);
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { 
      attributes: true,
      subtree: false,
      childList: false
    });
    
    return () => observer.disconnect();
  }, []);
  
  return children;
};

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
      <body className="bg-gray-10">
        <Suspense fallback={<div>Loading...</div>}>
          <BodyAttributeRemover>
            <div id="root">
              <Navbar />
              {children}
            </div>
          </BodyAttributeRemover>
        </Suspense>
      </body>
    </html>
  );
}

