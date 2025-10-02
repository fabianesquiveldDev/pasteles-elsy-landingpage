import React, { useState } from 'react';
import { Gift, Truck, ChefHat, Star, Sparkles, ShoppingBag, Users, Award, Heart } from 'lucide-react';
import ModalPedir from './modal/ModalPedir';

const Comprar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Fuentes de Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      <main id="comprar" className="min-h-screen bg-gradient-to-br from-[#D9B4BB]/20 via-white to-[#BF8494]/10 relative overflow-hidden">
        {/* Elementos decorativos minimalistas */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#73020C] rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-32 w-1 h-1 bg-[#A67C58] rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-[#BF8494] rounded-full opacity-50"></div>
        <div className="absolute top-2/3 left-16 w-1 h-1 bg-black rounded-full opacity-20"></div>
        
        {/* Formas geométricas sutiles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#D9B4BB]/5 to-transparent rounded-full transform translate-x-64 -translate-y-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#A67C58]/3 to-transparent rounded-full transform -translate-x-32 translate-y-32"></div>

        <div className="relative z-10 py-24 px-8">
          {/* Título principal elegante */}
          <div className="text-center mb-28">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-black/5 blur-3xl rounded-full transform scale-150"></div>
              <h1
                className="relative font-light text-6xl md:text-8xl text-black tracking-[0.02em] leading-[0.9] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Dulces
                <span className="block font-normal italic text-[#73020C] mt-2">Momentos</span>
              </h1>
              <div className="absolute -top-6 -right-12 text-[#A67C58] opacity-70">
                <div className="animate-float">
                  <Award size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-8 text-[#BF8494] opacity-60">
                <div className="animate-float-delayed">
                  <Heart size={24} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent mx-auto mb-6"></div>
            <p 
              className="text-lg md:text-xl text-black/70 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Experiencias culinarias únicas creadas con pasión artesanal
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-20 max-w-7xl mx-auto">
            {/* Imagen del pastel elegante */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-black/5 rounded-[2rem] blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-2 transition-all duration-700 border border-[#D9B4BB]/20">
                  <img 
                    src="/img/pasteles/5.png" 
                    alt="Delicioso pastel artesanal" 
                    loading="lazy" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-[#73020C] text-white px-6 py-3 rounded-full text-xs font-medium shadow-xl flex items-center gap-2 uppercase tracking-wider">
                    <Star size={14} fill="currentColor" strokeWidth={0} />
                    Exclusivo
                  </div>
                </div>
                {/* Elementos decorativos minimalistas */}
                <div className="absolute -top-8 -left-8 text-[#A67C58]/30">
                  <div className="animate-float">
                    <Sparkles size={28} strokeWidth={1} />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 text-[#BF8494]/30">
                  <div className="animate-float-delayed">
                    <Star size={20} strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido de la derecha refinado */}
            <div className="lg:w-1/2 flex flex-col justify-center gap-10 h-full">
              <div className="text-center lg:text-left">
                <h2 
                  className="text-4xl md:text-5xl font-light text-black mb-3 tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Colección Para
                  <span className="block text-[#73020C] font-normal italic mt-1">Compartir</span>
                </h2>
                <div className="w-16 h-px bg-black/20 mx-auto lg:mx-0 mb-8"></div>
              </div>

              {/* Tarjeta de descuento refinada */}
              <div className="relative group max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D9B4BB]/20 to-[#BF8494]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#D9B4BB]/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#73020C]/10 rounded-full flex items-center justify-center">
                      <Gift size={20} className="text-[#73020C]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-medium text-black mb-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Oferta Especial
                      </h3>
                      <p className="text-sm text-black/60 font-light">
                        Consulta descuentos disponibles
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-[#A67C58]/40">
                      <Sparkles size={20} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Beneficios elegantes */}
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-lg border border-[#D9B4BB]/20 hover:bg-white/80 hover:border-[#D9B4BB]/40 transition-all duration-300 text-center">
                  <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#73020C]/10 transition-colors duration-300">
                    <Truck size={18} className="text-black/70 group-hover:text-[#73020C]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-medium text-black/80 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Entrega Incluida
                  </p>
                </div>
                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-lg border border-[#BF8494]/20 hover:bg-white/80 hover:border-[#BF8494]/40 transition-all duration-300 text-center">
                  <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#A67C58]/10 transition-colors duration-300">
                    <ChefHat size={18} className="text-black/70 group-hover:text-[#A67C58]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-medium text-black/80 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Artesanal
                  </p>
                </div>
                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-lg border border-[#A67C58]/20 hover:bg-white/80 hover:border-[#A67C58]/40 transition-all duration-300 text-center">
                  <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#BF8494]/10 transition-colors duration-300">
                    <Award size={18} className="text-black/70 group-hover:text-[#BF8494]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-medium text-black/80 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Premium
                  </p>
                </div>
                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-lg border border-[#D9B4BB]/20 hover:bg-white/80 hover:border-[#D9B4BB]/40 transition-all duration-300 text-center">
                  <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#73020C]/10 transition-colors duration-300">
                    <Heart size={18} className="text-black/70 group-hover:text-[#73020C]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-medium text-black/80 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Personalizado
                  </p>
                </div>
              </div>

              {/* Botón principal elegante */}
              <div className="text-center lg:text-left">
                <button 
                  onClick={openModal}
                  className="group relative inline-flex items-center gap-4 px-10 py-4 bg-black text-white rounded-full font-medium text-base shadow-[0_10px_40px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] active:translate-y-0 transition-all duration-300 overflow-hidden"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {/* Efecto de brillo sutil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  <span className="relative z-10 flex items-center gap-4">
                    <ShoppingBag size={20} strokeWidth={1.5} />
                    <span className="uppercase tracking-wide">Realizar Pedido</span>
                    <div className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </span>
                </button>
                
                <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 text-xs text-black/50 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#73020C] rounded-full"></div>
                    Sin compromiso
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#A67C58] rounded-full"></div>
                    Respuesta 24h
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#BF8494] rounded-full"></div>
                    Garantizado
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonios refinados */}
          <div className="mt-32 text-center">
            <div className="inline-flex items-center gap-6 bg-white/50 backdrop-blur-md px-8 py-4 rounded-full border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-[#73020C] to-[#A67C58] rounded-full border-2 border-white flex items-center justify-center">
                      <Users size={12} className="text-white" strokeWidth={2} />
                    </div>
                  ))}
                </div>
                <div className="w-px h-6 bg-black/10"></div>
                <span className="text-sm font-medium text-black/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  1,200+ clientes
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#A67C58]" fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-2 text-sm text-black/60 font-light">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal para hacer pedidos */}
      <ModalPedir 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
      `}</style>
    </>
  );
};

export default Comprar;