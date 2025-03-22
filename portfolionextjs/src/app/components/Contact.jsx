'use client'; // Required for Next.js client-side components

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Valid email is required.';
    }
    if (!form.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch(() => {
        alert('Something went wrong. Try again.');
        setLoading(false);
      });
  };

  return (
    <div className="-mt-[6rem] px-4 sm:px-6 lg:px-8">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Have a project in mind? Feel free to reach out. Whether it’s software development, web solutions, or business inquiries, I’m here to help!
      </motion.p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8">
        <label className="block mb-4">
          <span className="text-gray-700">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border rounded-md"
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border rounded-md"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Your Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border rounded-md"
          ></textarea>
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </label>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
