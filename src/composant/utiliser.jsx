import React, { useEffect, useState } from 'react';




const Utilisera = () => {
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
    { name: 'Inscription et Connexion', description: 'Créez un compte sur Wigs hub en fournissant vos informations de base. Connectez-vous à votre compte avec vos identifiants.' },
    { name: 'Gestion de la Boutique', description: 'Ajoutez vos produits avec des descriptions détaillées, des photos attrayantes et des prix compétitifs. Gérez facilement votre inventaire en suivant les stocks disponibles et en recevant des notifications de réapprovisionnement.' },
    { name: 'Gestion des Commandes', description: 'Recevez des commandes directement depuis l\'application. Suivez le statut de chaque commande, de la réception à l\'expédition.' },
    { name: 'Interaction Client', description: 'Communiquez avec vos clients via des outils intégrés tels que la messagerie instantanée. Répondez aux questions, fournissez des informations sur les produits et assurez un service clientèle de qualité.' },
    { name: 'Marketing et Promotion', description: 'Utilisez les fonctionnalités de promotion intégrées pour mettre en avant vos produits. Attirez de nouveaux clients grâce à des campagnes marketing ciblées et des offres spéciales.' },
    { name: 'Paiements et Transactions', description: 'Offrez des options de paiement sécurisées et variées pour faciliter les transactions. Garantissez une expérience d\'achat en ligne fluide et sécurisée pour vos clients.' },
    { name: 'Analyse et Rapports', description: 'Consultez les statistiques de vente, les tendances de marché et les rapports d\'activité pour optimiser votre stratégie commerciale. Identifiez les produits populaires et ajustez votre offre en conséquence.' },
  ];

  return (
    <section className="relative bg-gray-100 py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className={` text-pink-600 font-bold font-playfair tracking-wide uppercase text-2xl ${isVisible ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
            Comment ça fonctionne?
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ol className="space-y-8  list-inside">
              {features.map((feature, index) => (
                <li key={index} className={`text-gray-800 ${isVisible ? `opacity-100 transform translate-y-0 transition-opacity duration-500 ease-out delay-${index + 1}00` : 'opacity-0 transform -translate-y-10'}`}>
                  <h3 className="text-lg font-semibold  font-playfair mb-2">{feature.name}</h3>
                  <p className="text-gray-600 font-raleway">{feature.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex items-center justify-center font-playfair">
            <img src="/im1.jpg " alt="Illustration" className={`rounded-lg shadow-md ${isVisible ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Utilisera;
