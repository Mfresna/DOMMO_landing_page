// Datos de cada ambiente del coworking
const roomsData = {
  'coworking': {
    tag: 'Espacio compartido',
    title: 'Sala Coworking',
    desc: 'Un espacio abierto y luminoso, pensado para trabajar en comunidad. Escritorios amplios, sillas ergonómicas y luz natural durante todo el día.',
    feats: [
      'Escritorios individuales regulables',
      'Internet de fibra óptica (500 Mb)',
      'Enchufes y USB en cada puesto',
      'Zona de llamadas y silencio',
      'Acceso 24/7 con credencial'
    ],
    cap: '24 puestos',
    area: '48 m²',
    avail: '18 libres'
  },
  'reuniones': {
    tag: 'Sala cerrada',
    title: 'Sala de Reuniones',
    desc: 'Sala privada e insonorizada, equipada con todo lo necesario para reuniones con clientes, presentaciones y videollamadas.',
    feats: [
      'Mesa para 8 personas',
      'Pantalla 55" y HDMI inalámbrico',
      'Sistema de videoconferencia',
      'Pizarra de vidrio y rotafolios',
      'Reserva por bloques de 1 hora'
    ],
    cap: '8 personas',
    area: '18 m²',
    avail: 'Por hora'
  },
  'oficina-a': {
    tag: 'Oficina privada',
    title: 'Oficina A',
    desc: 'Oficina cerrada para equipos pequeños que buscan privacidad sin perder el acceso a las áreas comunes.',
    feats: [
      'Escritorios para 3 personas',
      'Ventana al patio interior',
      'Cerrada con llave propia',
      'Armario y estantería incluidos',
      'Contrato mensual flexible'
    ],
    cap: '3 personas',
    area: '14 m²',
    avail: 'Disponible'
  },
  'oficina-b': {
    tag: 'Oficina privada',
    title: 'Oficina B',
    desc: 'Oficina amplia y silenciosa, ideal para equipos de hasta 4 personas que necesitan concentración y privacidad.',
    feats: [
      'Escritorios para 4 personas',
      'Ventana exterior con luz natural',
      'Sala de estar integrada',
      'Cerrada con llave propia',
      'Contrato mensual flexible'
    ],
    cap: '4 personas',
    area: '18 m²',
    avail: 'Disponible'
  },
  'comun': {
    tag: 'Área compartida',
    title: 'Zona Común',
    desc: 'El corazón social del coworking. Cocina completa, mesa comunal y sillones. Ideal para almuerzos, pausas y encuentros informales.',
    feats: [
      'Cocina equipada (heladera, microondas, cafetera)',
      'Mesa comunal para 8 personas',
      'Sillones y biblioteca',
      'Dispenser de agua filtrada',
      'Acceso libre para todos los miembros'
    ],
    cap: '20 personas',
    area: '32 m²',
    avail: 'Acceso libre'
  },
  'recepcion': {
    tag: 'Acceso',
    title: 'Recepción',
    desc: 'El primer espacio que verás al entrar. Recepción, guardado de pertenencias y atención a visitantes y clientes.',
    feats: [
      'Atención L-V de 9 a 18 h',
      'Casilleros con candado',
      'Recepción de paquetería',
      'Sala de espera con sillones',
      'Dirección comercial'
    ],
    cap: '—',
    area: '22 m²',
    avail: 'Incluido'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const rooms     = document.querySelectorAll('.room');
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

  function selectRoom(id) {
    const data = roomsData[id];
    if (!data) return;

    // Estados visuales
    rooms.forEach(r => r.classList.remove('selected'));
    const current = document.querySelector(`.room[data-room="${id}"]`);
    if (current) current.classList.add('selected');

    // Rellenar panel
    tagEl.textContent   = data.tag;
    titleEl.textContent = data.title;
    descEl.textContent  = data.desc;
    featsEl.innerHTML   = data.feats.map(f => `<li>${f}</li>`).join('');
    capEl.textContent   = data.cap;
    areaEl.textContent  = data.area;
    availEl.textContent = data.avail;

    // Cambiar vistas
    emptyEl.classList.add('hidden');
    contentEl.classList.remove('hidden');
    contentEl.style.animation = 'none';
    void contentEl.offsetHeight; // reflow para reiniciar animación
    contentEl.style.animation = 'fadeUp .3s ease';
  }

  rooms.forEach(room => {
    room.addEventListener('click', () => {
      selectRoom(room.dataset.room);
      if (window.innerWidth <= 1080) {
        panelEl.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });

  // Seleccionar la sala principal al cargar
  selectRoom('coworking');
});