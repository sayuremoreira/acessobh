const locations = [
  { 
      name: 'Teatro Francisco Nunes', 
      type: 'teatro', 
      accessibility: 'Rampas, banheiros adaptados, sinalização em braille.',
      image: 'https://example.com/teatro.jpg', // URL da imagem
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.93795%2C-19.92195%2C-43.93575%2C-19.91945&layer=mapnik&marker=-19.92095%2C-43.93685' // URL do mapa de OpenStreetMap
  },
  { 
      name: 'Museu de Artes e Ofícios', 
      type: 'museu', 
      accessibility: 'Sinalização em braille, rampas, elevadores.',
      image: 'https://example.com/museu.jpg', // URL da imagem
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.9441%2C-19.9220%2C-43.9419%2C-19.9195&layer=mapnik&marker=-19.9205%2C-43.9430' // URL do mapa de OpenStreetMap
  },
  {
      name: 'Parque Municipal', 
      type: 'parque', 
      accessibility: 'Áreas acessíveis, banheiros adaptados, trilhas seguras.',
      image: 'https://example.com/parque.jpg', // URL da imagem
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-43.9352%2C-19.9256%2C-43.9329%2C-19.9232&layer=mapnik&marker=-19.9246%2C-43.9345' // URL do mapa de OpenStreetMap
  }
  // Outros locais
];

// Exibe a lista inicial de locais
function displayLocations(filteredLocations) {
  const locationList = document.getElementById('locations');
  locationList.innerHTML = ''; // Limpa a lista

  filteredLocations.forEach(location => {
      const li = document.createElement('li');
      li.textContent = location.name;
      li.addEventListener('click', () => showLocationInfo(location));
      locationList.appendChild(li);
  });
}

// Exibe os detalhes do local
function showLocationInfo(location) {
  document.getElementById('location-name').textContent = location.name;
  document.getElementById('location-description').textContent = location.accessibility;

  const img = document.getElementById('location-image');
  img.src = location.image;
  img.style.display = 'block'; // Exibe a imagem

  const map = document.getElementById('location-map');
  map.src = location.mapUrl;
  map.style.display = 'block'; // Exibe o mapa
}

// Filtro por tipo de local
function filterLocations(type) {
  if (type === 'todos') {
      displayLocations(locations);
  } else {
      const filteredLocations = locations.filter(location => location.type === type);
      displayLocations(filteredLocations);
  }
}

// Busca por locais
document.getElementById('search-input').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const filteredLocations = locations.filter(location => location.name.toLowerCase().includes(query));
  displayLocations(filteredLocations);
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  displayLocations(locations);
});
