import { LuCakeSlice } from "react-icons/lu"; 

const Hero = () => {
  return (
    <>
    <header 
    id ="inicio"
    className="relative w-full h-screen overflow-hidden flex items-center justify-center">
  {/* Imagen de fondo */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/img/fondo.jpg" 
      alt="Pasteles de Esly" 
      className="w-full h-full object-cover object-center brightness-75"
    />
  </div>

  {/* Overlay ligero */}
  <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>

  {/* Contenido principal */}
  <div className="relative z-20 text-center text-white max-w-5xl px-5 flex flex-col items-center">
    <h1 className="font-serif text-6xl md:text-8xl font-light mb-6 drop-shadow-2xl tracking-wide leading-tight"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
      ¡Deléitate con cada bocado!
    </h1>

    <h2 className="text-2xl md:text-4xl italic mb-12 drop-shadow-lg font-light tracking-wider opacity-95"
        style={{ fontFamily: 'Dancing Script, cursive', fontWeight: '400' }}>
      Hechos con amor
    </h2>

    {/* Botón CTA */}
    <a href="#trabajo"
      className="flex items-center gap-2 bg-transparent hover:bg-[#73020C] text-white font-medium py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-2 border-[#D9B4BB] hover:border-[#D9B4BB] relative z-20">
      <span>Ver mis creaciones</span>
      <LuCakeSlice className="text-xl" />
    </a>

  </div>
</header>



    
    </>
  );
};

export default Hero;
