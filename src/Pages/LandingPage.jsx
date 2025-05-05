import { Link } from 'react-router-dom';
import React from 'react';
import HeaderComponent from '../Components/headercomponent';

const LandingPage = () => {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <HeaderComponent />
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 flex-1">
            <img src='/assets/hero.jpg' alt="Hero Image" className="w-full h-full object-cover" />
          {/* Lado Esquerdo */}
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Hostel Mar Azul 🌊</h1>
            <p className="mb-6">O teu lar junto à praia!</p>
            <ul className="space-y-2 text-lg">
              <li>🛏️ Quartos confortáveis</li>
              <li>🌍 Localização central</li>
              <li>🍽️ Cozinha equipada</li>
              <li>📶 Wi-Fi gratuito</li>
            </ul>
          </div>
  
          {/* Lado Direito - Imagem */}
          <div className="relative">
            <img
              src="/assets/quarto.jpg"
              alt="Quarto"
              className="w-full h-full object-cover"
            />
            {/* Testemunho por cima da imagem */}
            <div className="absolute bottom-5 right-5 bg-white bg-opacity-80 p-4 rounded shadow-lg max-w-sm">
              <p className="italic">"Ambiente super acolhedor e localização incrível!"</p>
              <p className="font-semibold text-right">– Maria L.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default LandingPage;