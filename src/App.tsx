import './App.css';
import ferrari812 from './assets/cars/Ferrari 812 Superfast Italian.png';
import bugatti from './assets/cars/Bugatti img (1).png';
import bugattiLogo from './assets/cars/Bugatti Logo.png';
import ferrariLogo from './assets/cars/Ferrari Logo.png';
import rollsRoyceLogo from './assets/cars/Rolls Royce Logo.png';
import bmwLogo from './assets/cars/BMW Logo.png';
import lamborghiniLogo from './assets/cars/Lamborghini Logo.png';
import bugattiLaVoiture from './assets/cars/Bugatti La Voiture Noire.png';
import rollsRoycePhantom from './assets/cars/Rolls Royce Phantom.png';
import bmwGranCoupe from './assets/cars/Coupe BMW Gran.png';
import lamborghiniRevuelto from './assets/cars/Lamborghini Revuelto.png';

function App() {
  return (
    <div className="app-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo">DRIVELLE</div>
        <nav className="nav-links">
          <a
            href="javascript:void(0)"
            onClick={(e) => {
              e.preventDefault();
              // Just change opacity without active class
            }}
            className="nav-link-animate"
            style={{ animationDelay: '0.1s' }}
          >
            About
          </a>
          <a
            href="javascript:void(0)"
            onClick={(e) => {
              e.preventDefault();
              // Just change opacity without active class
            }}
            className="nav-link-animate"
            style={{ animationDelay: '0.2s' }}
          >
            Cars
          </a>
          <a
            href="javascript:void(0)"
            onClick={(e) => {
              e.preventDefault();
              // Just change opacity without active class
            }}
            className="nav-link-animate"
            style={{ animationDelay: '0.3s' }}
          >
            Contact
          </a>
          <a
            href="javascript:void(0)"
            onClick={(e) => {
              e.preventDefault();
              // Just change opacity without active class
            }}
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
          <div
            className="logo-wrapper bugatti-wrapper"
            onClick={() => {
              document
                .getElementById('bugatti')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={bugattiLogo}
              alt="Bugatti Logo"
              className="brand-logo bugatti-logo"
            />
          </div>
          <div
            className="logo-wrapper ferrari-wrapper"
            onClick={() => {
              document
                .getElementById('ferrari')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={ferrariLogo}
              alt="Ferrari Logo"
              className="brand-logo ferrari-logo"
            />
          </div>
          <div
            className="logo-wrapper rolls-royce-wrapper"
            onClick={() => {
              document
                .getElementById('rollsroyce')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={rollsRoyceLogo}
              alt="Rolls Royce Logo"
              className="brand-logo rolls-royce-logo"
            />
          </div>
          <div
            className="logo-wrapper bmw-wrapper"
            onClick={() => {
              document
                .getElementById('bmw')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={bmwLogo} alt="BMW Logo" className="brand-logo bmw-logo" />
          </div>
          <div
            className="logo-wrapper lamborghini-wrapper"
            onClick={() => {
              document
                .getElementById('lamborghini')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={lamborghiniLogo}
              alt="Lamborghini Logo"
              className="brand-logo lamborghini-logo"
            />
          </div>
        </div>
      </section>

      {/* Featured Car Section - Bugatti */}
      <section id="bugatti" className="featured-car bugatti-section">
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
      <section id="ferrari" className="featured-car ferrari-section">
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
      {/* Featured Car Section - Rolls Royce */}
      <section id="rollsroyce" className="featured-car rollsroyce-section">
        <div className="featured-car-content">
          <div className="rollsroyce-image">
            <img src={rollsRoycePhantom} alt="Rolls Royce Phantom" />
          </div>
          <div className="featured-car-info rollsroyce-text">
            <h2>Rolls Royce Phantom</h2>
            <p>
              The epitome of automotive luxury with unparalleled craftsmanship,
              whisper-quiet performance, and regal presence.
            </p>
            <button className="gallery-button">GO TO GALLERY</button>
          </div>
        </div>
      </section>

      {/* Featured Car Section - BMW */}
      <section id="bmw" className="featured-car bmw-section">
        <div className="featured-car-content">
          <div className="featured-car-info bmw-text">
            <h2 className="bmw-title">BMW 8 Series Gran Coupe</h2>
            <p>A perfect blend of luxury GT design and sporty aggression.</p>
            <button className="gallery-button">GO TO GALLERY</button>
          </div>
          <div className="bmw-image">
            <img src={bmwGranCoupe} alt="BMW 8 Series Gran Coupe" />
          </div>
        </div>
      </section>

      {/* Featured Car Section - Lamborghini */}
      <section id="lamborghini" className="featured-car lamborghini-section">
        <div className="featured-car-content">
          <div className="lamborghiniRevuelto-image">
            <img src={lamborghiniRevuelto} alt="Lamborghini Revuelto" />
          </div>
          <div className="featured-car-info-lambo">
            <h2>Lamborghini Revuelto</h2>
            <p>
              V12 hybrid masterpiece with jet-inspired edges, dramatic lines,
              and a commanding road presence that redefines futuristic elegance.
            </p>
            <button className="gallery-button">GO TO GALLERY</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">DRIVELLE</div>
          <div className="footer-tagline">
            Experience the elegance of high-performance engineering and timeless
            luxury at every mile.
          </div>
          <div className="footer-links">
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              About
            </a>
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              Cars
            </a>
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              Contact
            </a>
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              FAQs
            </a>
          </div>
          <div className="footer-social">
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              Facebook
            </a>
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              Instagram
            </a>
            <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>
              YouTube
            </a>
          </div>
          <div className="footer-subscribe">
            Subscribe to get exclusive updates{' '}
            <input type="email" placeholder="Email address" />{' '}
            <button>Submit</button>
          </div>
          <div className="footer-copyright">
            © 2025 Drivelle. All rights reserved.
          </div>
          <div className="back-to-top">
            <a
              href="javascript:void(0)"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Back to top"
            >
              ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
