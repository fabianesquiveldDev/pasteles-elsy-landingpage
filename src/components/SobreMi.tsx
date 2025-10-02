import React from 'react';
import { Award, Heart, Sparkles, Star } from 'lucide-react';

const SobreMi: React.FC = () => {
  return (
    <>
      {/* Fuentes de Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <section 
      id ="sobre-mi"
      className="relative py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Imagen con diseño elegante */}
            <div className="lg:w-1/2 relative group">
              {/* Sombra decorativa */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#73020C]/10 to-[#A67C58]/10 rounded-3xl blur-3xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
              
              {/* Contenedor de imagen */}
              <div className="relative">
                {/* Elementos decorativos */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#D9B4BB]/30 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#BF8494]/20 rounded-full"></div>
                
                {/* Imagen principal */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.15)] border border-[#D9B4BB]/20 transform group-hover:-translate-y-2 transition-all duration-700">
                  <img 
                    className="w-full h-auto rounded-2xl shadow-lg" 
                    src="./img/imagenChef.jpg" 
                    alt="Chef Esly - Pastelera artesanal"
                    loading="lazy"
                  />
                  
                  {/* Badge decorativo */}
                  <div className="absolute -top-4 -right-4 bg-[#73020C] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                    <Award size={18} strokeWidth={1.5} />
                    <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Chef Pastelera
                    </span>
                  </div>
                </div>

                {/* Iconos flotantes decorativos */}
                <div className="absolute top-1/4 -left-8 text-[#A67C58]/20">
                  <div className="animate-float">
                    <Sparkles size={32} strokeWidth={1} />
                  </div>
                </div>
                <div className="absolute bottom-1/3 -right-8 text-[#BF8494]/20">
                  <div className="animate-float-delayed">
                    <Heart size={28} strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido de texto */}
            <div className="lg:w-1/2 space-y-8">
              {/* Título elegante */}
              <div>
                <div className="inline-block relative mb-6">
                  <h2 
                    className="text-4xl md:text-5xl font-light text-black tracking-wide"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Sobre
                    <span className="block text-[#73020C] font-normal italic mt-1">Mí</span>
                  </h2>
                  <div className="absolute -top-4 -right-8 text-[#A67C58]/30">
                    <Star size={24} strokeWidth={1} />
                  </div>
                </div>
                <div className="w-16 h-px bg-black/20 mb-6"></div>
              </div>

              {/* Texto descriptivo */}
              <div className="space-y-6">
                <p 
                  className="text-lg leading-relaxed text-black/70 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Hola, soy <span className="font-medium text-[#73020C]">Esly</span>, la chef pastelera detrás de Pasteles Esly. Desde pequeña, he tenido una pasión por la repostería y la creación de deliciosos postres que alegran el día de las personas.
                </p>
                
                <p 
                  className="text-lg leading-relaxed text-black/70 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Con años de experiencia y dedicación, me he especializado en crear pasteles personalizados para todo tipo de celebraciones, desde cumpleaños hasta bodas.
                </p>
              </div>

              {/* Características destacadas */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9B4BB]/20 hover:bg-white/80 hover:border-[#D9B4BB]/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#73020C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#73020C]/15 transition-colors duration-300">
                    <Award size={18} className="text-[#73020C]" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-black/80 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Años de Experiencia
                  </p>
                </div>

                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-[#BF8494]/20 hover:bg-white/80 hover:border-[#BF8494]/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#BF8494]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#BF8494]/15 transition-colors duration-300">
                    <Heart size={18} className="text-[#BF8494]" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-black/80 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Hecho con Amor
                  </p>
                </div>

                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-[#A67C58]/20 hover:bg-white/80 hover:border-[#A67C58]/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#A67C58]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#A67C58]/15 transition-colors duration-300">
                    <Sparkles size={18} className="text-[#A67C58]" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-black/80 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Totalmente Personalizado
                  </p>
                </div>

                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9B4BB]/20 hover:bg-white/80 hover:border-[#D9B4BB]/40 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#D9B4BB]/30 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#D9B4BB]/40 transition-colors duration-300">
                    <Star size={18} className="text-[#73020C]" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-black/80 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Calidad Premium
                  </p>
                </div>
              </div>

              {/* Frase destacada */}
              <div className="relative mt-8 pt-8 border-t border-[#D9B4BB]/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-[#73020C] to-[#A67C58] rounded-full"></div>
                  <p 
                    className="text-xl font-light text-black/80 italic leading-relaxed"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    "Cada pastel es una historia única, creada especialmente para hacer de tu celebración un momento inolvidable"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
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
      </section>
    </>
  );
};

export default SobreMi;