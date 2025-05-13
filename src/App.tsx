import './App.css';
import bugatti from './assets/cars/Bugatti img (1).png';
import bugattiLogo from './assets/cars/Bugatti Logo.png';
import ferrariLogo from './assets/cars/Ferrari Logo.png';
import rollsRoyceLogo from './assets/cars/Rolls Royce Logo.png';
import bmwLogo from './assets/cars/BMW Logo.png';
import lamborghiniLogo from './assets/cars/Lamborghini Logo.png';
import bugattiLaVoiture from './assets/cars/Bugatti La Voiture Noire.png';
import ferrari812 from './assets/cars/Ferrari 812 Superfast Italian.png';

function App() {
  return (
    <div className="app-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo">DRIVELLE</div>
        <nav className="nav-links">
          <a
            href="#"
            className="nav-link-animate"
            style={{ animationDelay: '0.1s' }}
          >
            About
          </a>
          <a
            href="#"
            className="nav-link-animate"
            style={{ animationDelay: '0.2s' }}
          >
            Cars
          </a>
          <a
            href="#"
            className="nav-link-animate"
            style={{ animationDelay: '0.3s' }}
          >
            Contact
          </a>
          <a
            href="#"
            className="nav-link-animate"
            style={{ animationDelay: '0.4s' }}
          >
            Logout
          </a>
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
          <div className="logo-wrapper bugatti-wrapper">
            <img
              src={bugattiLogo}
              alt="Bugatti Logo"
              className="brand-logo bugatti-logo"
            />
          </div>
          <div className="logo-wrapper ferrari-wrapper">
            <img
              src={ferrariLogo}
              alt="Ferrari Logo"
              className="brand-logo ferrari-logo"
            />
          </div>
          <div className="logo-wrapper rolls-royce-wrapper">
            <img
              src={rollsRoyceLogo}
              alt="Rolls Royce Logo"
              className="brand-logo rolls-royce-logo"
            />
          </div>
          <div className="logo-wrapper bmw-wrapper">
            <img src={bmwLogo} alt="BMW Logo" className="brand-logo bmw-logo" />
          </div>
          <div className="logo-wrapper lamborghini-wrapper">
            <img
              src={lamborghiniLogo}
              alt="Lamborghini Logo"
              className="brand-logo lamborghini-logo"
            />
          </div>
        </div>
      </section>

      {/* Featured Car Section - Bugatti */}
      <section className="featured-car">
        <div className="featured-car-content">
          <div className="bugattiLaVoiture-image">
            <img src={bugattiLaVoiture} alt="Bugatti La Voiture Noire" />
          </div>
          <div className="featured-car-info">
            <h2>Bugatti La Voiture Noire</h2>
            <p>
              One of a kind hyper-GT with an art-deco soul. Smooth curves,
              massive presence, and luxurious blacked-out mystique.
            </p>
            <button className="gallery-button">GO TO GALLERY</button>
          </div>
        </div>
      </section>

      {/* Featured Car Section - Ferrari */}
      <section className="featured-car ferrari-section">
        <div className="featured-car-content">
          <div className="featured-car-info">
            <h2 className="ferrari-title">Ferrari 812 Competizione</h2>
            <p>
              A sculpted grand tourer with aggressive styling and racing soul
              designed to command attention.
            </p>
            <button className="gallery-button">GO TO GALLERY</button>
          </div>
          <div className="Ferrari-image">
            <img src={ferrari812} alt="Ferrari 812 Competizione" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
