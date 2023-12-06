const price = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};


const properties = [
  {
    id: 1,
    titulo: "Apartamento en alquiler",
    slug: "apartamento-en-alquiler",
    price: price(350000),
    ubicacion: "Buenos Aires",
    descripcion:
      "Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría han sufrido alteraciones de alguna forma, por humor inyectado, o palabras aleatorizadas que no parecen ni ligeramente",
    
    imagenes: ["imagen2.jpg", "imagen3.jpg", "imagen7.jpg", "imagen8.jpg"],
    comodidades: [
      "Aire Acondicionado",
      "Sistema de Seguridad",
      "Espacio de Estacionamiento",
      "Gimnasio",
      "WIFI Gratuito",
      "Chimenea",
    ],
    agente: {
      nombre: "Elizabeth Keen",
      imagen: "agente1.jpg",
    },
    caracteristicas: {
      habitaciones: 3,
      estado: true,
      garaje: 1,
      ascensor: true,
      cocina: true,
    },
    direccion: {
      direccion: "Avenida Santa Fe 1234",
      provincia: "Buenos Aires",
      ciudad: "Buenos Aires",
      calle: "Calle Corrientes",
      area: "Palermo",
    },
    destacado: true,
    tipo: "alquiler",
    listadoEn: "alquileres",
    categoria: "Apartamentos",
  },
  {
    id: 2,
    titulo: "Casa en venta",
    slug: "casa-en-venta",
    price: price(25000),
    ubicacion: "Córdoba",
    descripcion:
      "Existen muchas variantes de pasajes de Lorem Ipsum, pero la mayoría han sufrido alteraciones en alguna forma, por humor inyectado, o palabras al azar que no parecen ni ligeramente",
    imagenes: ["imagen8.jpg", "imagen3.jpg", "imagen7.jpg", "imagen8.jpg"],
    comodidades: [
      "Aire Acondicionado",
      "Sistema de Seguridad",
      "Espacio de Estacionamiento",
      "Gimnasio",
      "WIFI Gratuito",
      "Chimenea",
    ],
    agente: {
      nombre: "Kevin Caster",
      imagen: "agente3.jpg",
    },
    caracteristicas: {
      habitaciones: 3,
      estado: true,
      garaje: 1,
      ascensor: true,
      cocina: true,
    },
    direccion: {
      direccion: "Bv. Chacabuco 567",
      provincia: "Córdoba",
      ciudad: "Córdoba",
      calle: "Av. Colón",
      area: "Nueva Córdoba",
    },
    destacado: true,
    tipo: "venta",
    listadoEn: "ventas",
    categoria: "Casas",
  },
  {
    id: 3,
    titulo: "Apartamento en Buenos Aires",
    slug: "apartamento-en-buenos-aires",
    price: price(31000),
    ubicacion: "Buenos Aires",
    descripcion:
      "Existen muchas variantes de pasajes de Lorem Ipsum, pero la mayoría han sufrido alteraciones en alguna forma, por humor inyectado, o palabras al azar que no parecen ni ligeramente",
    imagenes: ["imagen7.jpg", "imagen3.jpg", "imagen2.jpg", "imagen8.jpg"],
    comodidades: [
      "Aire Acondicionado",
      "Sistema de Seguridad",
      "Espacio de Estacionamiento",
      "Gimnasio",
      "WIFI Gratuito",
      "Chimenea",
    ],
    agente: {
      nombre: "Randy Cool",
      imagen: "agente4.jpg",
    },
    caracteristicas: {
      habitaciones: 3,
      estado: true,
      garaje: 1,
      ascensor: true,
      cocina: true,
    },
    direccion: {
      direccion: "Calle Lavalle 456",
      provincia: "Buenos Aires",
      ciudad: "Buenos Aires",
      calle: "Av. Libertador",
      area: "Recoleta",
    },
    destacado: true,
    tipo: "venta",
    listadoEn: "ventas",
    categoria: "Oficinas",
  },
  {
    id: 4,
    titulo: "Apartamento en Buenos Aires",
    slug: "apartamento-en-buenos-aires",
    price: price(31000),
    ubicacion: "Buenos Aires",
    descripcion:
      "Existen muchas variantes de pasajes de Lorem Ipsum, pero la mayoría han sufrido alteraciones en alguna forma, por humor inyectado, o palabras al azar que no parecen ni ligeramente",
    imagenes: ["imagen7.jpg", "imagen3.jpg", "imagen2.jpg", "imagen8.jpg"],
    comodidades: [
      "Aire Acondicionado",
      "Sistema de Seguridad",
      "Espacio de Estacionamiento",
      "Gimnasio",
      "WIFI Gratuito",
      "Chimenea",
    ],
    agente: {
      nombre: "Elizabeth Keen",
      imagen: "agente4.jpg",
    },
    caracteristicas: {
      habitaciones: 3,
      estado: true,
      garaje: 1,
      ascensor: true,
      cocina: true,
    },
    direccion: {
      direccion: "Calle Lavalle 456",
      provincia: "Buenos Aires",
      ciudad: "Buenos Aires",
      calle: "Av. Libertador",
      area: "Recoleta",
    },
    destacado: true,
    tipo: "venta",
    listadoEn: "ventas",
    categoria: "Oficinas",
  },
  {
    id: 5,
    titulo: "Apartamento en Buenos Aires",
    slug: "apartamento-en-buenos-aires",
    price: price(31000),
    ubicacion: "Buenos Aires",
    descripcion:
      "Existen muchas variantes de pasajes de Lorem Ipsum, pero la mayoría han sufrido alteraciones en alguna forma, por humor inyectado, o palabras al azar que no parecen ni ligeramente",
    imagenes: ["imagen7.jpg", "imagen3.jpg", "imagen2.jpg", "imagen8.jpg"],
    comodidades: [
      "Aire Acondicionado",
      "Sistema de Seguridad",
      "Espacio de Estacionamiento",
      "Gimnasio",
      "WIFI Gratuito",
      "Chimenea",
    ],
    agente: {
      nombre: "Elizabeth Keen",
      imagen: "agente4.jpg",
    },
    caracteristicas: {
      habitaciones: 3,
      estado: true,
      garaje: 1,
      ascensor: true,
      cocina: true,
    },
    direccion: {
      direccion: "Calle Lavalle 456",
      provincia: "Buenos Aires",
      ciudad: "Buenos Aires",
      calle: "Av. Libertador",
      area: "Recoleta",
    },
    destacado: true,
    tipo: "venta",
    listadoEn: "ventas",
    categoria: "Oficinas",
  },
];


export default properties;
