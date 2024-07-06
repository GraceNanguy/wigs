import React from 'react';
import { FaVideo, FaClock, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextAndColumnsSection = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="text-center mt-16">
      <p className="text-2xl font-playfair-display text-gray-800">Pour une meilleure expérience</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center sm:flex-row bg-white p-4 shadow-lg rounded-lg"
        >
          <FaVideo className="w-16 h-16 text-[#2C3E50] mb-4 sm:mb-0 sm:mr-4" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Video messaging</h3>
            <p className="mt-2 text-gray-600 text-center sm:text-left">Description de la première expérience.</p>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center sm:flex-row bg-white p-4 shadow-lg rounded-lg"
        >
          <FaClock className="w-16 h-16 text-[#2C3E50] mb-4 sm:mb-0 sm:mr-4" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Save your time</h3>
            <p className="mt-2 text-gray-600 text-center sm:text-left">Description de la deuxième expérience.</p>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col items-center sm:flex-row bg-white p-4 shadow-lg rounded-lg"
        >
          <FaStar className="w-16 h-16 text-[#2C3E50] mb-4 sm:mb-0 sm:mr-4" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Keep safe & private</h3>
            <p className="mt-2 text-gray-600 text-center sm:text-left">Description de la troisième expérience.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextAndColumnsSection;
