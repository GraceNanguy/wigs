import React from 'react'
import { motion } from 'framer-motion';
import TextAndColumnsSection from './colum.jsx';
import Section from './section.jsx'

    const Header = () => {
        return (
            <div className="bg-white py-12 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Header Content */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        <h1 className="text-4xl font-playfair-display text-gray-800">Transformez votre passion en profit avec Wigs Hub</h1>
        <p className="mt-4 text-lg font-montserrat text-gray-600">
          La première plateforme dédiée à la vente et l’achat de mèches en ligne. Rejoignez notre communauté dès maintenant et trouvez votre bonheur sur notre appli !
        </p>
        <button className="mt-6 bg-pink-300 text-white px-4 py-2 rounded-md hover:bg-[#FF5E95]">Essayez maintenant</button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex-shrink-0 mt-6 lg:mt-0 lg:ml-6"
      >
        <div className="absolute inset-0 w-25 h-77 rounded-full bg-[#FF9F80] lg:w-66 lg:h-90"></div>
        <img className="relative w-64 h-70 object-cover transform -translate-x-10 lg:w-80 lg:h-100" src="/image.png" alt="Wigs Hub" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute top-40 left-15 bg-[#faf6f6] p-2 rounded-full shadow-lg flex items-center lg:top-42 lg:left-12 lg:p-4"
        >
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-8 w-8 rounded-full lg:h-12 lg:w-12"
            src="/logo.png"
            alt="Logo"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="ml-2 lg:ml-4"
          >
            <p className="text-sm font-bold lg:text-lg">Wigs Hub</p>
            <p className="text-xs text-gray-600 lg:text-base">Vous avez reçu une nouvelle commande sur Wigs Hub</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

    
                    {/* Text and Columns Section */}
                   <TextAndColumnsSection />

 {/* Section */}
<div className="flex flex-col lg:flex-row justify-between rounded-lg  bg-[#F8F8FA] items-center mt-16">
    <div className="relative flex-shrink-0 order-1 lg:order-1 mt-6 lg:mt-0 lg:mr-6">
        <img className="relative w-64 h-70 lg:w-80 lg:h-100 object-cover" src="/Image 1.png" alt="Wigs Hub" />
    </div>
    <div className="max-w-lg order-2 lg:order-2 mt-6 lg:mt-0">
        <h1 className="text-4xl font-playfair-display text-gray-800">Qu'est-ce que Wigs Hub?</h1>
        <p className="mt-4 text-lg font-montserrat text-gray-600">
            Découvrez notre plateforme innovante pour l'achat et la vente de mèches et perruques en ligne. Profitez d'une sélection variée et de conseils personnalisés. En tant que vendeurs, bénéficiez de la création de votre boutique en ligne et d’une gestion simplifiée des produits, d'une large visibilité et d'un soutien pour développer votre activité. Rejoignez-nous et transformez votre expérience beauté dès maintenant !
        </p>
    </div>
</div>


                    {/* Section2 */}
                   <Section />


                {/* Comment Section */}
                <div className="mt-16 py-12 bg-gradient-to-br from-[#FF9F80] via-[#FBADA8] to-[#F8BBD0]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-playfair-display text-white text-center">Témoignage utilisateur</h2>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg relative">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-800">"Incroyable expérience!"</h3>
                                    <p className="mt-4 text-gray-600">"J'ai pu vendre mes produits rapidement et facilement. La plateforme est intuitive et les clients adorent les mèches."</p>
                                </div>
                                <div className="absolute -top-8 left-6 flex items-center">
                                    <img className="h-16 w-16 rounded-full border-2 border-white" src="/image.png" alt="User 1" />
                                    <div className="ml-4">
                                        <p className="text-lg font-bold text-gray-800">Marie Dupont</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg relative">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-800">"Très satisfaite"</h3>
                                    <p className="mt-4 text-gray-600">"La variété des mèches disponibles est incroyable et le service client est très réactif."</p>
                                </div>
                                <div className="absolute -top-8 left-6 flex items-center">
                                    <img className="h-16 w-16 rounded-full border-2 border-white" src="/im1.jpg" alt="User 2" />
                                    <div className="ml-4">
                                        <p className="text-lg font-bold text-gray-800">Sophie Martin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg relative">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-800">"Une vraie révolution"</h3>
                                    <p className="mt-4 text-gray-600">"Wigs Hub a changé ma façon de gérer mon business. Tout est beaucoup plus simple et efficace."</p>
                                </div>
                                <div className="absolute -top-8 left-6 flex items-center">
                                    <img className="h-16 w-16 rounded-full border-2 border-white" src="/fille.jpg" alt="User 3" />
                                    <div className="ml-4">
                                        <p className="text-lg font-bold text-gray-800">Julie Lefèvre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
            </div>
        );
    };
    
function Home(){
    return(
        <div>
<Header />
        </div>
    )
}
export default Home;