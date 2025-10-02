import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter, MessageCircle, Heart, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <>
            {/* Fuentes de Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <footer id="contactoFooter" className="relative bg-gradient-to-br from-black via-[#73020C] to-black text-white overflow-hidden">
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#A67C58]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#D9B4BB]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
                    {/* Sección principal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        
                        {/* Columna 1: Contacto */}
                        <div className="space-y-6">
                            <div>
                                <h3 
                                    className="text-3xl font-light text-white mb-2 tracking-wide"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    Pasteles
                                    <span className="block text-[#D9B4BB] font-normal italic mt-1">Esly</span>
                                </h3>
                                <div className="w-12 h-px bg-[#D9B4BB]/50 mb-4"></div>
                                <p 
                                    className="text-white/70 text-sm font-light leading-relaxed"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Creando momentos dulces e inolvidables desde el corazón
                                </p>
                            </div>

                            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                                    <Mail size={16} strokeWidth={1.5} />
                                </div>
                                <a 
                                    href="mailto:contacto@pastelesesly.com"
                                    className="text-sm font-light"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    contacto@pastelesesly.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 group">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                                    <Phone size={16} strokeWidth={1.5} />
                                </div>
                                <a 
                                    href="tel:+34123456789"
                                    className="text-sm font-light"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    +34 123 456 789
                                </a>
                            </div>
                        </div>

                        {/* Columna 2: Enlaces rápidos */}
                        <div className="space-y-6">
                            <div>
                                <h4 
                                    className="text-xl font-medium text-white mb-4 tracking-wide"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    Información
                                </h4>
                                <div className="w-8 h-px bg-[#D9B4BB]/50 mb-4"></div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-white/70">
                                    <MapPin size={14} strokeWidth={1.5} className="text-[#D9B4BB]" />
                                    <span className="text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Villahermosa, Tabasco, México
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <Clock size={14} strokeWidth={1.5} className="text-[#D9B4BB]" />
                                    <span className="text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Lun - Sáb: 9:00 AM - 7:00 PM
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <Heart size={14} strokeWidth={1.5} className="text-[#D9B4BB]" fill="currentColor" />
                                    <span className="text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Pedidos personalizados
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Columna 3: Redes sociales */}
                        <div className="space-y-6">
                            <div>
                                <h4 
                                    className="text-xl font-medium text-white mb-4 tracking-wide"
                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                >
                                    Síguenos
                                </h4>
                                <div className="w-8 h-px bg-[#D9B4BB]/50 mb-4"></div>
                                <p 
                                    className="text-white/70 text-sm font-light mb-6"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    Conéctate con nosotros en redes sociales
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <a 
                                    href="https://facebook.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-[#D9B4BB]/30 transition-all duration-300"
                                >
                                    <Facebook size={18} strokeWidth={1.5} className="text-[#D9B4BB] group-hover:scale-110 transition-transform duration-200" />
                                    <span className="text-sm font-light text-white/80 group-hover:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Facebook
                                    </span>
                                </a>

                                <a 
                                    href="https://instagram.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-[#D9B4BB]/30 transition-all duration-300"
                                >
                                    <Instagram size={18} strokeWidth={1.5} className="text-[#D9B4BB] group-hover:scale-110 transition-transform duration-200" />
                                    <span className="text-sm font-light text-white/80 group-hover:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Instagram
                                    </span>
                                </a>

                                <a 
                                    href="https://twitter.com" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-[#D9B4BB]/30 transition-all duration-300"
                                >
                                    <Twitter size={18} strokeWidth={1.5} className="text-[#D9B4BB] group-hover:scale-110 transition-transform duration-200" />
                                    <span className="text-sm font-light text-white/80 group-hover:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        Twitter
                                    </span>
                                </a>

                                <a 
                                    href="https://wa.me/34123456789" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-[#D9B4BB]/30 transition-all duration-300"
                                >
                                    <MessageCircle size={18} strokeWidth={1.5} className="text-[#D9B4BB] group-hover:scale-110 transition-transform duration-200" />
                                    <span className="text-sm font-light text-white/80 group-hover:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        WhatsApp
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Separador elegante */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                    {/* Footer bottom */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p 
                            className="text-sm text-white/60 font-light"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            &copy; {new Date().getFullYear()} Pasteles Esly. Todos los derechos reservados.
                        </p>

                        <div className="flex items-center gap-2 text-white/60">
                            <span className="text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Hecho con
                            </span>
                            <Heart size={14} className="text-[#D9B4BB] animate-pulse" fill="currentColor" strokeWidth={0} />
                            <span className="text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                                en México
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;