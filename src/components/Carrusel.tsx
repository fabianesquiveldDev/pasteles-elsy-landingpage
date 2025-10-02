import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";

interface CarouselProps {}

interface Cake {
  image: string;
  name: string;
  description: string;
}

const cakes: Cake[] = [
  {
    image: "/img/pasteles/1.png",
    name: "Pastel de Chocolate",
    description: "Delicioso pastel de chocolate con ganache y decoraciones elegantes"
  },
  {
    image: "/img/pasteles/2.png",
    name: "Pastel de Vainilla",
    description: "Suave pastel de vainilla con crema de mantequilla y fresas frescas"
  },
  {
    image: "/img/pasteles/3.png",
    name: "Pastel Red Velvet",
    description: "Clásico red velvet con queso crema y un toque de elegancia"
  },
  {
    image: "/img/pasteles/4.png",
    name: "Pastel de Frutas",
    description: "Pastel ligero decorado con frutas frescas de temporada"
  },
];

const Carousel: React.FC<CarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<number>(3);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Actualizar visibleImages según el tamaño de pantalla
  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1); // Móvil
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2); // Tablet
      } else {
        setVisibleImages(3); // Desktop
      }
      setCurrentIndex(0); // Reset index al cambiar
    };

    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);
    return () => window.removeEventListener('resize', updateVisibleImages);
  }, []);

  const nextSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev: number) => 
        prev >= cakes.length - visibleImages ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev: number) => 
        prev === 0 ? Math.max(0, cakes.length - visibleImages) : prev - 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index: number): void => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (index <= cakes.length - visibleImages) {
        setCurrentIndex(index);
      }
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <>
      {/* Fuentes de Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div id="carrusel" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Título elegante */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative inline-block">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 tracking-wide leading-[0.9]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Mis
              <span className="block text-[#73020C] font-normal italic mt-2">Creaciones</span>
            </h1>
            <div className="absolute -top-4 sm:-top-6 -right-8 sm:-right-12 text-[#A67C58]/30">
              <div className="animate-float">
                <Star size={20} className="sm:w-7 sm:h-7" strokeWidth={1} />
              </div>
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -left-6 sm:-left-8 text-[#BF8494]/40">
              <div className="animate-float-delayed">
                <Heart size={18} className="sm:w-6 sm:h-6" strokeWidth={1} />
              </div>
            </div>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent mx-auto mb-4 sm:mb-6"></div>
          <p 
            className="text-base sm:text-lg md:text-xl text-black/70 font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Experiencias dulces creadas con pasión artesanal
          </p>
        </div>

        {/* Carrusel */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 pb-8 sm:pb-12">
          {/* Botón anterior elegante */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className={`group flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#D9B4BB]/30 flex items-center justify-center transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
              }`}
            >
              <ChevronLeft 
                size={18} 
                className="sm:w-5 sm:h-5 text-black/60 group-hover:text-[#73020C] transition-colors duration-200" 
                strokeWidth={1.5} 
              />
            </button>
          )}

          {/* Contenedor de imágenes */}
          <div className="flex-1 overflow-hidden">
            <div 
              className={`flex gap-3 sm:gap-4 md:gap-6 transition-all duration-700 ease-out ${
                isTransitioning ? 'scale-[0.98] opacity-90' : 'scale-100 opacity-100'
              }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
              }}
            >
              {cakes.map((cake: Cake, idx: number) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 transition-all duration-700 ${
                    visibleImages === 1 ? 'w-full' :
                    visibleImages === 2 ? 'w-1/2' :
                    visibleImages === 3 ? 'w-1/3' : 'w-1/4'
                  }`}
                >
                  {/* Tarjeta elegante */}
                  <div className="group relative">
                    {/* Sombra de fondo */}
                    <div className="absolute inset-0 bg-black/5 rounded-2xl blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                    
                    {/* Tarjeta principal */}
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-2 transition-all duration-700 border border-[#D9B4BB]/20 overflow-hidden">
                      
                      {/* Imagen */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={cake.image}
                          alt={cake.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Badge de calidad */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#73020C]/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <Star size={10} className="sm:w-3 sm:h-3" fill="currentColor" strokeWidth={0} />
                          Premium
                        </div>
                      </div>
                      
                      {/* Información del pastel */}
                      <div className="p-4 sm:p-5 md:p-6">
                        <h3 
                          className="text-lg sm:text-xl font-medium text-black mb-2 sm:mb-3 tracking-wide"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {cake.name}
                        </h3>
                        <div className="w-8 h-px bg-[#73020C]/20 mb-2 sm:mb-3"></div>
                        <p 
                          className="text-xs sm:text-sm text-black/60 leading-relaxed font-light"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {cake.description}
                        </p>
                        
                        {/* Elementos decorativos */}
                        <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#D9B4BB]/20">
                          <div className="flex items-center gap-1.5 sm:gap-2 text-[#A67C58]/60">
                            <Heart size={12} className="sm:w-3.5 sm:h-3.5" strokeWidth={1.5} />
                            <span className="text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                              Hecho con amor
                            </span>
                          </div>
                          <div className="flex items-center gap-0.5 sm:gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={10} className="sm:w-3 sm:h-3 text-[#A67C58]/40" fill="currentColor" strokeWidth={0} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón siguiente elegante */}
          {currentIndex < cakes.length - visibleImages && (
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className={`group flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#D9B4BB]/30 flex items-center justify-center transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 ${
                isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-white'
              }`}
            >
              <ChevronRight 
                size={18} 
                className="sm:w-5 sm:h-5 text-black/60 group-hover:text-[#73020C] transition-colors duration-200" 
                strokeWidth={1.5} 
              />
            </button>
          )}
        </div>

        {/* Indicadores elegantes */}
        <div className="flex justify-center items-center gap-2 sm:gap-3">
          {Array.from({ length: Math.ceil((cakes.length - visibleImages + 1)) }, (_, idx: number) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="group relative transition-all duration-300 hover:-translate-y-0.5"
              disabled={isTransitioning}
            >
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-[#73020C] scale-125' 
                    : 'bg-[#D9B4BB]/60 group-hover:bg-[#BF8494] group-hover:scale-110'
                }`}
              />
              {currentIndex === idx && (
                <div className="absolute inset-0 bg-[#73020C]/20 rounded-full scale-150 animate-ping"></div>
              )}
            </button>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/50 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-2">
              <Heart size={14} className="sm:w-4 sm:h-4 text-[#73020C]" fill="currentColor" strokeWidth={0} />
              <span className="text-xs sm:text-sm font-medium text-black/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                Creaciones artesanales
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-black/10"></div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="sm:w-3 sm:h-3 text-[#A67C58]" fill="currentColor" strokeWidth={0} />
              ))}
              <span className="ml-2 text-xs sm:text-sm text-black/60 font-light">Calidad premium</span>
            </div>
          </div>
        </div>
      </div>

        <style>{`
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

export default Carousel;