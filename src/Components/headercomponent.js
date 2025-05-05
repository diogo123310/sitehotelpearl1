import React from 'react';


function HeaderComponent() {
  return (
    <header className="fixed top-0 left-0 w-full bg-sky-500 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="logo192.png"
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-xl font-bold text-white">My App</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#sobre" className="text-white hover:text-blue-200 transition">Sobre</a>
          <a href="#quartos" className="text-white hover:text-blue-200 transition">Quartos</a>
          <a href="#servicos" className="text-white hover:text-blue-200 transition">Serviços</a>
          <a href="#contato" className="text-white hover:text-blue-200 transition">Contato</a>
        </nav>

        <a
          href="#reserva"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Reservar Agora
        </a>
      </div>
    </header>
  );
}

export default HeaderComponent;
