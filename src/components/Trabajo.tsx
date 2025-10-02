import React, { useState } from 'react';
import { X, Heart, Star, Sparkles, Image as ImageIcon } from 'lucide-react';

const Galeria: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const imagenes = [
    "./img/pasteles/1.png",
    "./img/pasteles/2.png",
    "./img/pasteles/3.png",
    "./img/pasteles/4.png",
    "./img/pasteles/5.png",
    "./img/pasteles/6.png",
  ];

  return (
    <>
      {/* Fuentes de Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <section
      id ="trabajo"
      className="relative py-24 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Título elegante */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <h2 
                className="text-5xl md:text-7xl font-light text-black mb-4 tracking-wide leading-[0.9]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Nuestra
                <span className="block text-[#73020C] font-normal italic mt-2">Galería</span>
              </h2>
              <div className="absolute -top-6 -right-12 text-[#A67C58]/30">
                <ImageIcon size={32} strokeWidth={1} className="animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -left-8 text-[#BF8494]/40">
                <Sparkles size={24} strokeWidth={1} className="animate-bounce" />
              </div>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent mx-auto mb-6"></div>
            <p 
              className="text-lg md:text-xl text-black/70 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Descubre nuestras creaciones artesanales
            </p>
          </div>

          {/* Grid de imágenes elegante */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {imagenes.map((src, i) => (
              <div key={i} className="group relative cursor-pointer" onClick={() => setSelectedImg(src)}>
                {/* Sombra decorativa */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#73020C]/10 to-[#A67C58]/10 rounded-2xl blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                
                {/* Contenedor de imagen */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-[0_20px_70px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-2 transition-all duration-700 border border-[#D9B4BB]/20 overflow-hidden">
                  
                  {/* Imagen */}
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <img
                      src={src}
                      alt={`Pastel artesanal ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icono de ampliar */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                        <ImageIcon size={20} className="text-[#73020C]" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Badge con número */}
                    <div className="absolute top-3 right-3 bg-[#73020C]/90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm flex items-center gap-1">
                      <Star size={12} fill="currentColor" strokeWidth={0} />
                      #{i + 1}
                    </div>
                  </div>

                  {/* Info decorativa */}
                  <div className="flex items-center justify-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={10} className="text-[#A67C58]" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Información adicional */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-[#73020C]" fill="currentColor" strokeWidth={0} />
                <span className="text-sm font-medium text-black/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Creado con pasión
                </span>
              </div>
              <div className="w-px h-4 bg-black/10"></div>
              <span className="text-sm text-black/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                {imagenes.length} creaciones destacadas
              </span>
            </div>
          </div>
        </div>

        {/* Modal flotante elegante */}
        {selectedImg && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-fadeIn"
            onClick={() => setSelectedImg(null)}
          >
            <div 
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sombra decorativa para el modal */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#73020C]/20 to-[#A67C58]/20 rounded-3xl blur-3xl"></div>
              
              {/* Contenedor de imagen del modal */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] border border-[#D9B4BB]/30">
                <img
                  src={selectedImg}
                  alt="Pastel ampliado"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                />
                
                {/* Botón cerrar elegante */}
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[#73020C] text-white rounded-full shadow-xl hover:bg-black transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95"
                >
                  <X size={20} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Decoración inferior */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Heart size={14} className="text-[#73020C]" fill="currentColor" strokeWidth={0} />
                  <span className="text-xs text-black/60 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Hecho con amor artesanal
                  </span>
                  <Heart size={14} className="text-[#73020C]" fill="currentColor" strokeWidth={0} />
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </section>
    </>
  );
};

export default Galeria;