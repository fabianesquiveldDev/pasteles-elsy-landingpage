import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F3EEEA] shadow-md font-poppins border-b border-gray-200">
        <div className="flex justify-between items-center h-[90px] px-4 md:px-8 lg:px-12">
          
          {/* Menú hamburguesa - Solo móvil/tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#2c3e50]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2c3e50]" />
            )}
          </button>

          {/* Izquierda - Solo desktop */}
          <nav className="hidden lg:flex gap-8">
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium" 
              href="#inicio"
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              INICIO
            </a>
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium" 
              href="#sobre-mi"
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              SOBRE MI
            </a>
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium" 
              href="#trabajo"
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              TRABAJO
            </a>
          </nav>

          {/* Centro - Logo */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute left-1/2 transform -translate-x-1/2" 
            style={{ fontFamily: 'Great Vibes, cursive', color: '#8B4513', letterSpacing: '0.05em' }}
          >
            Los Pasteles de Elsy
          </h1>

          {/* Derecha - Solo desktop */}
          <nav className="hidden lg:flex gap-8">
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium" 
              href="#contactoFooter"
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              CONTACTO
            </a>
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium" 
              href="#comprar"
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              COMPRAR
            </a>
          </nav>

          {/* Espaciador invisible para balance en móvil */}
          <div className="lg:hidden w-10"></div>
        </div>

        {/* Menú móvil desplegable */}
        <div 
          className={`lg:hidden bg-[#F3EEEA] border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col py-4 px-6 gap-1">
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center" 
              href="#inicio"
              onClick={toggleMenu}
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              INICIO
            </a>
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center" 
              href="#sobre-mi"
              onClick={toggleMenu}
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              SOBRE MI
            </a>
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center" 
              href="#trabajo"
              onClick={toggleMenu}
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              TRABAJO
            </a>
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center" 
              href="#contactoFooter"
              onClick={toggleMenu}
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              CONTACTO
            </a>
            <a 
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center" 
              href="#comprar"
              onClick={toggleMenu}
              style={{fontWeight: '500', letterSpacing: '0.5px', color: '#2c3e50', textDecoration: 'none'}}
            >
              COMPRAR
            </a>
          </nav>
        </div>
      </header>

      
    </>
  );
}