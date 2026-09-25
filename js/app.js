// Datos de cada ambiente. Las claves coinciden con data-room en el HTML.
const roomsData = {
  'coworking': {
    tag: 'Espacio compartido',
    title: 'Sala Coworking',
    desc: 'El espacio principal. Abierto, luminoso y pensado para trabajar en comunidad.',
    feats: [
      'Escritorios amplios y ergonómicos',
      'Internet de fibra óptica (500 Mb)',
      'Enchufes y USB en cada puesto',
      'Zona de llamadas y silencio',
      'Acceso 24/7 con credencial'
    ],
    cap: '20 puestos',
    area: '40 m²',
    avail: '14 libres'
  },
  'reuniones': {
    tag: 'Sala cerrada',
    title: 'Sala de Reuniones',
    desc: 'Sala privada e insonorizada, ideal para reuniones con clientes y videollamadas.',
    feats: [
      'Mesa para 8 personas',
      'Pantalla 55" y HDMI inalámbrico',
      'Sistema de videoconferencia',
      'Pizarra y rotafolios',
      'Reserva por bloques de 1 h'
    ],
    cap: '8 personas',
    area: '18 m²',
    avail: 'Por hora'
  },
  'oficina': {
    tag: 'Oficina privada',
    title: 'Oficina Privada',
    desc: 'Oficina cerrada para equipos de hasta 4 personas. Privacidad sin perder la comunidad.',
    feats: [
      'Escritorios para 4 personas',
      'Ventana exterior con luz natural',
      'Cerrada con llave propia',
      'Armario y estantería',
      'Contrato mensual flexible'
    ],
    cap: '4 personas',
    area: '16 m²',
    avail: 'Disponible'
  },
  'comun': {
    tag: 'Área compartida',
    title: 'Zona Común / Cocina',
    desc: 'El corazón social del coworking. Cocina completa, mesa comunal y sillones.',
    feats: [
      'Cocina equipada (heladera, microondas, cafetera)',
      'Mesa comunal para 8 personas',
      'Sillones y biblioteca',
      'Dispenser de agua filtrada',
      'Acceso libre para todos los miembros'
    ],
    cap: '15 personas',
    area: '28 m²',
    avail: 'Acceso libre'
  },
  'bano': {
    tag: 'Servicios',
    title: 'Baño',
    desc: 'Baño completo con ducha, para uso de todos los miembros del coworking.',
    feats: [
      'Ducha y vestidor',
      'Toallero y secador',
      'Amenities básicos',
      'Limpieza diaria',
      'Accesible para todos'
    ],
    cap: '1 persona',
    area: '5 m²',
    avail: 'Incluido'
  },
  'recepcion': {
    tag: 'Acceso',
    title: 'Recepción',
    desc: 'El primer espacio que verás al entrar. Atención a visitantes y guardado de pertenencias.',
    feats: [
      'Atención L-V de 9 a 18 h',
      'Casilleros con candado',
      'Recepción de paquetería',
      'Sala de espera',
      'Dirección comercial'
    ],
    cap: '—',
    area: '8 m²',
    avail: 'Incluido'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const emptyEl   = document.getElementById('room-empty');
  const contentEl = document.getElementById('room-content');
  const tagEl     = document.getElementById('rp-tag');
  const titleEl   = document.getElementById('rp-title');
  const descEl    = document.getElementById('rp-desc');
  const featsEl   = document.getElementById('rp-feats');
  const capEl     = document.getElementById('rp-cap');
  const areaEl    = document.getElementById('rp-area');
  const availEl   = document.getElementById('rp-avail');
  const panelEl   = document.getElementById('room-panel');
  const buttons   = document.querySelectorAll('.room-btn');

  function selectRoom(id) {
    const data = roomsData[id];
    if (!data) return;

    buttons.forEach(b => b.classList.remove('selected'));
    const current = document.querySelector(`.room-btn[data-room="${id}"]`);
    if (current) current.classList.add('selected');

    tagEl.textContent   = data.tag;
    titleEl.textContent = data.title;
    descEl.textContent  = data.desc;
    featsEl.innerHTML   = data.feats.map(f => `<li>${f}</li>`).join('');
    capEl.textContent   = data.cap;
    areaEl.textContent  = data.area;
    availEl.textContent = data.avail;

    emptyEl.classList.add('hidden');
    contentEl.classList.remove('hidden');
    contentEl.style.animation = 'none';
    void contentEl.offsetHeight;
    contentEl.style.animation = 'fadeUp .3s ease';
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      selectRoom(btn.dataset.room);
      if (window.innerWidth <= 1080) {
        panelEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Selección inicial
  selectRoom('coworking');
});