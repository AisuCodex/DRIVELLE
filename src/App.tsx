import './App.css';
import bugatti from './assets/cars/Bugatti img.png';
import bugattiLogo from './assets/cars/Bugatti Logo.png';
import ferrariLogo from './assets/cars/Ferrari Logo.png';
import rollsRoyceLogo from './assets/cars/Rolls Royce Logo.png';
import bmwLogo from './assets/cars/BMW Logo.png';
import lamborghiniLogo from './assets/cars/Lamborghini Logo.png';

function App() {
  return (
    <div className="app-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo">DRIVELLE</div>
        <nav className="nav-links">
          <a href="#">About</a>
          <a href="#">Cars</a>
          <a href="#">Contact</a>
          <a href="#">Logout</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover The World's Most Exquisite Cars</h1>
          <p>
            Browse high-performance machines, luxury rides, and legendary models
            all in one place.
          </p>
          <button className="explore-button">Explore Cars</button>
        </div>
        <img src={bugatti} alt="Luxury Bugatti car" className="hero-image" />
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="brand-logos">
        <div className="logo-container">
          <img src={bugattiLogo} alt="Bugatti Logo" className="brand-logo" />
          <img src={ferrariLogo} alt="Ferrari Logo" className="brand-logo" />
          <img
            src={rollsRoyceLogo}
            alt="Rolls Royce Logo"
            className="brand-logo"
          />
          <img src={bmwLogo} alt="BMW Logo" className="brand-logo" />
          <img
            src={lamborghiniLogo}
            alt="Lamborghini Logo"
            className="brand-logo"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
