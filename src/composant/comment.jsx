import React, { useEffect, useState } from 'react';
import Fonctiona from './fonction';
import Utilisera from './utiliser';

const CommentSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclencher l'animation après un court délai (par exemple, 500ms)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative bg-gray-100 py-20">
      <div className="absolute inset-0 overflow-hidden lg:hidden">
        <img
          src="/Image 2.png"
          alt="Background"
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <div className="lg:text-left text-center">
            <p className={`text-base text-pink-600 font-semibold font-playfair tracking-wide uppercase ${isVisible ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
              Comment l'utiliser?
            </p>
            <h2 className={`mt-2 text-xl leading-6 font-bold font-playfair tracking-tight text-white lg:text-black sm:text-4xl ${isVisible ? 'transform translate-y-0 opacity-100 transition-transform duration-500 ease-out' : 'translate-y-10 opacity-0'}`}>
              Découvrez comment Wigshub peut transformer votre expérience de vente de mèches et vous aider à prospérer dans le secteur concurrentiel des produits capillaires en Côte d'Ivoire.
            </h2>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="/Image 2.png"
            alt="Background"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <Fonctiona />
      <Utilisera />
    </section>
  );
};

export default CommentSection;
