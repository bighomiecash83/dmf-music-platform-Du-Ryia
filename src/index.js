import _ from 'lodash';

// Sample data for music platform
const featuredMusic = [
  { id: 1, title: 'Summer Vibes', artist: 'DJ Cool', genre: 'Electronic', plays: 15420 },
  { id: 2, title: 'Jazz Night', artist: 'The Smooth Trio', genre: 'Jazz', plays: 8932 },
  { id: 3, title: 'Rock Anthem', artist: 'Thunder Band', genre: 'Rock', plays: 12045 },
  { id: 4, title: 'Hip Hop Dreams', artist: 'MC Flow', genre: 'Hip Hop', plays: 20134 }
];

const genres = ['Electronic', 'Jazz', 'Rock', 'Hip Hop', 'Classical', 'Pop', 'R&B', 'Country'];

function createHubComponent() {
  const hub = document.createElement('div');
  hub.className = 'hub-container';
  
  // Hero Section
  const hero = document.createElement('div');
  hero.className = 'hero-section';
  hero.innerHTML = `
    <h1>DMF Music Platform</h1>
    <p>Discover, Stream, and Share Amazing Music</p>
  `;
  
  // Featured Music Section
  const featured = document.createElement('div');
  featured.className = 'featured-section';
  featured.innerHTML = '<h2>Trending Now</h2>';
  
  const musicGrid = document.createElement('div');
  musicGrid.className = 'music-grid';
  
  featuredMusic.forEach(track => {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.innerHTML = `
      <div class="music-card-header">
        <h3>${track.title}</h3>
      </div>
      <div class="music-card-body">
        <p class="artist">${track.artist}</p>
        <p class="genre">${track.genre}</p>
        <p class="plays">${track.plays.toLocaleString()} plays</p>
      </div>
    `;
    musicGrid.appendChild(card);
  });
  
  featured.appendChild(musicGrid);
  
  // Genres Section
  const genresSection = document.createElement('div');
  genresSection.className = 'genres-section';
  genresSection.innerHTML = '<h2>Browse by Genre</h2>';
  
  const genresGrid = document.createElement('div');
  genresGrid.className = 'genres-grid';
  
  genres.forEach(genre => {
    const genreCard = document.createElement('div');
    genreCard.className = 'genre-card';
    genreCard.textContent = genre;
    genresGrid.appendChild(genreCard);
  });
  
  genresSection.appendChild(genresGrid);
  
  // Assemble the hub
  hub.appendChild(hero);
  hub.appendChild(featured);
  hub.appendChild(genresSection);
  
  // Add styles
  addStyles();
  
  return hub;
}

function addStyles() {
  const style = document.createElement('style');
  style.textContent = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #333;
      min-height: 100vh;
    }
    
    .hub-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .hero-section {
      text-align: center;
      padding: 60px 20px;
      color: white;
      margin-bottom: 40px;
    }
    
    .hero-section h1 {
      font-size: 3em;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .hero-section p {
      font-size: 1.3em;
      opacity: 0.9;
    }
    
    .featured-section,
    .genres-section {
      margin-bottom: 50px;
    }
    
    .featured-section h2,
    .genres-section h2 {
      color: white;
      font-size: 2em;
      margin-bottom: 20px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    }
    
    .music-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .music-card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .music-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0,0,0,0.2);
    }
    
    .music-card-header h3 {
      color: #667eea;
      margin-bottom: 10px;
      font-size: 1.2em;
    }
    
    .music-card-body p {
      margin: 5px 0;
      color: #666;
    }
    
    .music-card-body .artist {
      font-weight: 500;
      color: #333;
    }
    
    .music-card-body .genre {
      font-size: 0.9em;
      font-style: italic;
    }
    
    .music-card-body .plays {
      font-size: 0.85em;
      color: #999;
    }
    
    .genres-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
    }
    
    .genre-card {
      background: rgba(255, 255, 255, 0.9);
      padding: 30px 20px;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      color: #667eea;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .genre-card:hover {
      background: white;
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
}

// Initialize the hub
document.body.appendChild(createHubComponent());
