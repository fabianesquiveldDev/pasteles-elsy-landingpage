import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { X, Calendar, Users, MessageCircle, ShoppingBag, Phone, User, Cake, Gift, Palette, Clock } from 'lucide-react';

// Interfaces para tipar los datos
interface FormData {
  nombre: string;
  telefono: string;
  tipoPastel: string;
  sabor: string;
  tamaño: string;
  personas: string;
  fechaEntrega: string;
  horaEntrega: string;
  decoracion: string;
  mensaje: string;
  comentarios: string;
}

interface ModalPedirProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalPedir: React.FC<ModalPedirProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    tipoPastel: '',
    sabor: '',
    tamaño: '',
    personas: '',
    fechaEntrega: '',
    horaEntrega: '',
    decoracion: '',
    mensaje: '',
    comentarios: ''
  });

  const tiposPastel: string[] = [
    'Cumpleaños',
    'Boda',
    'Aniversario',
    'Baby Shower',
    'Graduación',
    'Quinceañera',
    'Corporativo',
    'Otro'
  ];

  const sabores: string[] = [
    'Chocolate',
    'Vainilla',
    'Fresa',
    'Red Velvet',
    'Tres Leches',
    'Zanahoria',
    'Limón',
    'Moka',
    'Cheesecake'
  ];

  const tamaños: string[] = [
    'Individual (1-2 personas)',
    'Pequeño (4-6 personas)',
    'Mediano (8-12 personas)',
    'Grande (15-20 personas)',
    'Extra Grande (25+ personas)'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Validación básica de campos requeridos
    const requiredFields = ['nombre', 'telefono', 'tipoPastel', 'sabor', 'tamaño', 'fechaEntrega'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      alert('Por favor completa todos los campos requeridos (*)');
      return;
    }

    // Construir mensaje para WhatsApp
    const numero = '5219171041122'; // Incluye código de país (México: 52)
    let mensaje = `--- NUEVO PEDIDO ---\n\n`;
    mensaje += `Nombre del cliente: ${formData.nombre}\n`;
    mensaje += `Teléfono: ${formData.telefono}\n\n`;
    mensaje += `Detalles del pastel:\n`;
    mensaje += `- Tipo: ${formData.tipoPastel}\n`;
    mensaje += `- Sabor: ${formData.sabor}\n`;
    mensaje += `- Tamaño: ${formData.tamaño}\n`;
    if (formData.personas) mensaje += `- Número de personas: ${formData.personas}\n`;
    mensaje += `\nEntrega:\n`;
    mensaje += `- Fecha: ${formData.fechaEntrega}\n`;
    if (formData.horaEntrega) mensaje += `- Hora: ${formData.horaEntrega}\n`;
    if (formData.decoracion) mensaje += `\nDecoración especial: ${formData.decoracion}\n`;
    if (formData.mensaje) mensaje += `Mensaje en el pastel: ${formData.mensaje}\n`;
    if (formData.comentarios) mensaje += `Comentarios adicionales: ${formData.comentarios}\n`;
    mensaje += `\n--- FIN DEL PEDIDO ---`;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Abrir WhatsApp en nueva pestaña
    const url = `https://wa.me/${numero}?text=${mensajeCodificado}`;
    window.open(url, '_blank');

    // Alert opcional
    alert('¡Pedido preparado para enviar por WhatsApp!');

    onClose();

    // Resetear formulario
    setFormData({
      nombre: '',
      telefono: '',
      tipoPastel: '',
      sabor: '',
      tamaño: '',
      personas: '',
      fechaEntrega: '',
      horaEntrega: '',
      decoracion: '',
      mensaje: '',
      comentarios: ''
    });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Fuentes de Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Overlay elegante */}
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300" 
          onClick={handleOverlayClick}
        />
        
        {/* Modal */}
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] transform transition-all duration-500 border border-[#D9B4BB]/20">
            
            {/* Header elegante */}
            <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-[#73020C] to-[#A67C58]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              <div className="relative flex items-center justify-between p-4 sm:p-6 lg:p-8 text-white">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 
                      className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Realizar Pedido
                    </h2>
                    <p className="text-white/80 text-xs sm:text-sm font-light mt-1 hidden sm:block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Crea tu experiencia personalizada
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 flex items-center justify-center backdrop-blur-sm group"
                  type="button"
                >
                  <X className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Body con form */}
            <form onSubmit={handleSubmit}>
              <div className="p-4 sm:p-6 lg:p-8 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-6 sm:space-y-8">
                  
                  {/* Información Personal */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#D9B4BB]/5 rounded-xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#D9B4BB]/20">
                      <h3 
                        className="text-base sm:text-lg font-medium text-black mb-4 sm:mb-6 flex items-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#73020C]/10 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#73020C]" strokeWidth={1.5} />
                        </div>
                        Información Personal
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            placeholder="Tu nombre completo"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <Phone className="w-4 h-4 mr-2 text-[#A67C58]" strokeWidth={1.5} />
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            placeholder="Tu número de teléfono"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detalles del Pastel */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#A67C58]/5 rounded-xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#A67C58]/20">
                      <h3 
                        className="text-base sm:text-lg font-medium text-black mb-4 sm:mb-6 flex items-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#A67C58]/10 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Cake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A67C58]" strokeWidth={1.5} />
                        </div>
                        Detalles del Pastel
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Tipo de pastel *
                          </label>
                          <select
                            name="tipoPastel"
                            value={formData.tipoPastel}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Selecciona el tipo</option>
                            {tiposPastel.map((tipo: string) => (
                              <option key={tipo} value={tipo}>{tipo}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Sabor *
                          </label>
                          <select
                            name="sabor"
                            value={formData.sabor}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Selecciona el sabor</option>
                            {sabores.map((sabor: string) => (
                              <option key={sabor} value={sabor}>{sabor}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Tamaño *
                          </label>
                          <select
                            name="tamaño"
                            value={formData.tamaño}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Selecciona el tamaño</option>
                            {tamaños.map((tamaño: string) => (
                              <option key={tamaño} value={tamaño}>{tamaño}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <Users className="w-4 h-4 mr-2 text-[#BF8494]" strokeWidth={1.5} />
                            Número de personas
                          </label>
                          <input
                            type="number"
                            name="personas"
                            value={formData.personas}
                            onChange={handleInputChange}
                            min="1"
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            placeholder="¿Para cuántas personas?"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Entrega */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#BF8494]/5 rounded-xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#BF8494]/20">
                      <h3 
                        className="text-base sm:text-lg font-medium text-black mb-4 sm:mb-6 flex items-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#BF8494]/10 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BF8494]" strokeWidth={1.5} />
                        </div>
                        Fecha y Hora de Entrega
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Fecha de entrega *
                          </label>
                          <input
                            type="date"
                            name="fechaEntrega"
                            value={formData.fechaEntrega}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <Clock className="w-4 h-4 mr-2 text-[#A67C58]" strokeWidth={1.5} />
                            Hora de entrega
                          </label>
                          <input
                            type="time"
                            name="horaEntrega"
                            value={formData.horaEntrega}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personalización */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#73020C]/5 rounded-xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#73020C]/20">
                      <h3 
                        className="text-base sm:text-lg font-medium text-black mb-4 sm:mb-6 flex items-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#73020C]/10 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#73020C]" strokeWidth={1.5} />
                        </div>
                        Personalización
                      </h3>
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Decoración especial
                          </label>
                          <input
                            type="text"
                            name="decoracion"
                            value={formData.decoracion}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            placeholder="Ej: Flores de azúcar, figuras, colores específicos"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2 flex items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <MessageCircle className="w-4 h-4 mr-2 text-[#BF8494]" strokeWidth={1.5} />
                            Mensaje en el pastel
                          </label>
                          <input
                            type="text"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                            placeholder="Ej: Feliz Cumpleaños, Felicidades"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-black/70 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Comentarios adicionales
                          </label>
                          <textarea
                            name="comentarios"
                            value={formData.comentarios}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-[#D9B4BB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#73020C]/20 focus:border-[#73020C]/30 transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
                            placeholder="Cualquier detalle especial que quieras agregar..."
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer elegante */}
              <div className="relative overflow-hidden rounded-b-xl sm:rounded-b-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D9B4BB]/10 to-[#BF8494]/10"></div>
                <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center justify-end space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 lg:p-8 border-t border-[#D9B4BB]/20">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3 text-black/60 bg-white/80 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-medium border border-[#D9B4BB]/20 backdrop-blur-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-3 bg-black text-white rounded-lg font-medium shadow-[0_10px_40px_rgba(0,0,0,0.2)] transform hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] active:translate-y-0 transition-all duration-300 overflow-hidden"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    
                    <span className="relative z-10 flex items-center gap-3">
                      <Gift className="w-4 h-4" strokeWidth={1.5} />
                      <span className="uppercase tracking-wide text-sm">Enviar Pedido</span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #D9B4BB;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #BF8494;
          }
        `}</style>
      </div>
    </>
  );
};

export default ModalPedir;