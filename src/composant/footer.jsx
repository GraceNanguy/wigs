import React from 'react'
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#F8F8FA] text-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main text and button */}
                <div className="mb-12">
                    <p className="text-xl font-playfair-display">Prêt à faire croître votre entreprise ? Commencez avec Wigs Hub et optimisez chaque seconde vos ventes.</p>
                    <button className="mt-6 bg-pink-300 text-white px-4 py-2 rounded-md hover:bg-[#FF5E95]">Commencer maintenant</button>
                </div>
                
                {/* Footer links and social icons */}
                <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-8">
                    {/* Logo */}
                    <div className="mb-6 lg:mb-0">
                        <img src="/logo.png" alt="Wigs Hub Logo" className="h-12" />
                    </div>
                    
                    {/* Links */}
                    <div className="mb-6 lg:mb-0">
                        <ul className="flex flex-li space-x-6  lg:flex-row lg:space-x-6  lg:space-y-0 items-center">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Work</a></li>
                            <li><a href="#" className="hover:underline">Future</a></li>
                            <li><a href="#" className="hover:underline">Support</a></li>
                        </ul>
                    </div>
                    
                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-pink-300"><FaFacebook size={24} /></a>
                        <a href="#" className="hover:text-pink-300"><FaGithub size={24} /></a>
                        <a href="#" className="hover:text-pink-300"><FaTwitter size={24} /></a>
                        <a href="#" className="hover:text-pink-300"><FaInstagram size={24} /></a>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <p className="mb-4 lg:mb-0">&copy; 2024 Wigs Hub. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
