import React, { useEffect, useState } from 'react';

const Fonctiona = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclencher l'animation après un court délai (par exemple, 500ms)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Définition des fonctionnalités
  const features = [
    { name: 'Gestion de la Boutique en Ligne', description: 'Interface conviviale pour gérer facilement votre boutique.' },
    { name: 'Atteindre de Nouveaux Clients', description: 'Plateforme pour développer votre clientèle et atteindre de nouveaux clients.' },
    { name: 'Développement de l\'Activité', description: 'Aide à prospérer dans le secteur des produits capillaires en Côte d\'Ivoire.' },
    { name: 'Interface Intuitive', description: 'Conception ergonomique pour simplifier la gestion quotidienne.' },
  ];

  return (
    <section className="relative bg-gray-100 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-pink-200 opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className={`text-base text-pink-600 font-bold  font-playfair tracking-wide uppercase ${isVisible ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
            Fonctionnalités Clés
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className={`bg-white shadow-md rounded-lg p-6 ${isVisible ? 'opacity-100 transform translate-y-0 transition-opacity duration-500 ease-out delay-${index + 3}s' : 'opacity-0 transform -translate-y-10'}`}>
              <h3 className="text-lg font-semibold  font-playfair text-gray-800 mb-2">{feature.name}</h3>
              <p className="text-gray-600 font-raleway">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fonctiona;
