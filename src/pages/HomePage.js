// src/pages/HomePage.js
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/backgroundImage.png'; // Replace with your background image path
import sampleVideo from '../images/sampleVideo.mp4'; // Replace with your video file path

const HomePage = () => {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -100]);
  const opacityRange = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Hero Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center mt-20 md:mt-32 space-y-6 md:space-y-0 md:space-x-10 text-center md:text-left"
        style={{ y: headerY }}
      >
        {/* Embedded Video */}
        <div className="relative w-full max-w-lg h-auto shadow-lg rounded-lg overflow-hidden">
          <video
            src={sampleVideo} // Replace with the path to your video file
            className="w-full h-auto"
            controls // Remove if you want autoplay without controls
            autoPlay
            loop
            muted
          />
        </div>

        {/* Headings and CTA */}
        <div className="space-y-4 max-w-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            <span className="text-blue-500">Max</span>imize space <br />
            <span className="text-blue-500">Min</span>imize costs
          </h1>
          <p className="text-lg text-gray-700">
            Experience the power of seamless cargo placement with our 3D user-friendly application designed for optimal results!
            Maximize efficiency, minimize wasted space.
          </p>
          <div className="flex space-x-4">
            <Link to="/cargo-loader" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">Explore Now</Link>
            <Link to="/learn-more" className="bg-gray-200 text-blue-500 px-6 py-3 rounded-lg shadow hover:bg-gray-300">Learn More</Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll-triggered Information Sections */}
      <div className="w-full max-w-3xl px-4 mt-20 space-y-16">
        {/* Section 1 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800">Optimize Cargo Space</h2>
          <p className="text-gray-600 mt-2">
            Our visualization tools help you maximize container space and ensure efficient loading.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800">Enhanced Planning</h2>
          <p className="text-gray-600 mt-2">
            Plan your cargo layout with our intuitive tools.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-semibold text-gray-800">Real-Time Analytics</h2>
          <p className="text-gray-600 mt-2">
            Monitor metrics and make adjustments on-the-fly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
