import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import container from '../images/container.png'
import optimize from '../images/optimize.png'
 
const features = [
  { icon: "💰", title: "Cost Effective", className: "text-green-600" },
  { icon: "🎮", title: "3D View", className: "text-purple-600" },
  { icon: "👥", title: "User Friendly", className: "text-pink-600" },
  { icon: "⏰", title: "Time Saving", className: "text-blue-600" }
];
 
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-orange-500">Opti</span>mize Space<br />
                <span className="text-orange-500">Red</span>uce Expenses
              </h1>
              <p className="text-gray-600 mb-8">
                No more shuffling through unnecessary papers! Get your shipment organized with our user-friendly 3D application. Load your containers digitally, maximize your space utilization.
              </p>
              <div className="flex space-x-4">
                <Link to="cargo-loader">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore Now
                  </button>
                </Link>
                <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
           
            {/* Right content - Container Image */}
            <div className="md:w-1/2">
              <img
                src={container}
                alt="container"
               
              />
            </div>
          </div>
 
          {/* Features Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-3xl mb-2">{feature.icon}</span>
                <span className={`font-semibold ${feature.className}`}>{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
 
      {/* CTA Section */}
      <div className="bg-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Using It Now!</h2>
          <Link to ="cargo-loader">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
 
      {/* Features Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <img
              src={optimize}
              alt="optimize"
              className="w-full h-auto rounded-lg"
            />
          </div>
         
          {/* Right side - Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Cargo <span className="text-orange-500">Optimization</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Experience efficient cargo optimization with advanced algorithms and intuitive 3D visualization, ensuring super-fast results and optimal placement all within a web-based platform that offers an immersive 3D view.
            </p>
           
            <h3 className="text-2xl font-bold mb-4">
              Manage and Storage
            </h3>
            <p className="text-gray-600">
              Users can keep their goods in customized places and track pre-planned zones and cargo containers, making management and accessibility easier than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default HomePage;