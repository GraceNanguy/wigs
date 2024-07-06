import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative flex-shrink-0 order-1 lg:order-2 mt-6 lg:mt-0 lg:ml-6"
      >
        <img className="relative w-70 h-70 object-cover" src="/Image 2.png" alt="Wigs Hub" />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-lg order-2 lg:order-1 mt-6 lg:mt-0"
      >
        <h1 className="text-4xl font-playfair-display text-gray-800">Créez votre boutique maintenant</h1>
        <p className="mt-4 text-lg font-montserrat text-gray-600">
          Inscrivez vous sur notre plateforme en tant que vendeur souscrivez à un abonement mensuel et bénéficiez de votre boutique en ligne offrant une large gamme de fonctionnalités.
        </p>
      </motion.div>
    </div>
  );
};

export default Section;
