import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCoffee, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ReelsSection from "./ReelsSection";
import HappyCustomers from './HappyCustomers';  // Add this line with your other imports
import ThreeScene from "./ThreeScene";   
import 'bootstrap/dist/css/bootstrap.min.css';

const CoffeeLandingPage = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const bestSellers = [
    {
      name: "Ethiopian Yirgacheffe",
      description: "Light roasted, floral and citrusy notes",
      price: "$18.99",
      rating: 4.8,
      image: "https://t3.ftcdn.net/jpg/11/20/90/80/240_F_1120908026_B2GviXOOh2keUpOvyUrcHdi2yKGWipRO.jpg"
    },
    {
      name: "Colombian Supremo",
      description: "Medium roast with caramel sweetness",
      price: "$16.99",
      rating: 4.9,
      image: "https://t4.ftcdn.net/jpg/11/89/82/51/240_F_1189825173_X7mmWyHTqSVKL8x3I8Tcv5EYaCBe7yQd.jpg"
    },
    {
      name: "Italian Dark Roast",
      description: "Bold and intense with chocolate notes",
      price: "$17.99",
      rating: 4.7,
      image: "https://t3.ftcdn.net/jpg/11/47/31/52/240_F_1147315206_DVcEOEtKPz6ENOli7dUlb2d9ixkZyC3V.webp"
    },
    {
      name: "House Blend",
      description: "Balanced medium roast, nutty finish",
      price: "$15.99",
      rating: 4.6,
      image: "https://t4.ftcdn.net/jpg/11/87/67/89/240_F_1187678977_lZ6TUVYa3iqM1EYjjMdifWEgioQJU0Ry.jpg"
    }
  
  ];
  const customStyles = `
  .bg-primary-custom { background-color: #795757 !important; }
  .bg-secondary-custom { background-color: #664343 !important; }
  .bg-dark-custom { background-color: #3B3030 !important; }
  .bg-light-custom { background-color: #FFF0D1 !important; }
  .text-primary-custom { color: #795757 !important; }
  .text-light-custom { color: #FFF0D1 !important; }
  .btn-primary-custom {
    background-color: #795757 !important;
    border-color: #795757 !important;
    color: #FFF0D1 !important;
    transition: all 0.3s ease;
  }
  .btn-primary-custom:hover {
    background-color: #664343 !important;
    border-color: #664343 !important;
    transform: translateY(-2px);
  }
  .card {
    transition: all 0.3s ease;
    border: none;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
  }
  .nav-link {
    color: #FFF0D1 !important;
    transition: color 0.3s ease;
  }
  .nav-link:hover {
    color: #795757 !important;
  }
  .about-card {
    background: rgba(255, 240, 209, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    transition: all 0.3s ease;
  }
  .about-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
  }
  .contact-icon {
    transition: all 0.3s ease;
  }
  .contact-icon:hover {
    transform: scale(1.2);
    color: #FFF0D1;
  }
  .best-seller-card {
    background: #FFF0D1;
    border: none;
    border-radius: 15px;
    overflow: hidden;
  }
  .best-seller-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
  .rating-stars {
    color: #FFD700;
  }
  .product-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
  }
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .best-seller-card:hover .product-image {
    transform: scale(1.1);
  }
  .product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(121, 87, 87, 0.9);
    color: #FFF0D1;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
  }
   .best-sellers-section {
      background-color: #FFF3E0;
      padding: 4rem 0;
    }
    
    .best-sellers-title {
      color: #795757;
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }
    
    .best-seller-card {
      background: #FFFFFF;
      border-radius: 15px;
      padding: 1.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .product-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    
    .product-name {
      color: #795757;
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .product-description {
      color: #666;
      font-size: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .product-price {
      color: #795757;
      font-weight: 600;
      font-size: 1.2rem;
    }
    
    .rating-stars {
      color: #FFD700;
    }
    
    .add-to-cart-btn {
      background-color: #795757;
      color: #FFF3E0;
      border: none;
      border-radius: 8px;
      padding: 0.75rem;
      width: 100%;
      font-weight: 600;
      margin-top: auto;
      transition: background-color 0.3s ease;
    }
    
    .add-to-cart-btn:hover {
      background-color: #664343;
    }
  `;


  return (
    <>
      <style>{customStyles}</style>
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center text-light-custom">
          <FaCoffee className="me-2" /> Coffee Haven
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Best Sellers', 'Happy Customers', 'Reels', 'About Us'].map((section, index) => (
              <li key={index} className="nav-item">
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={() => scrollToSection(section.toLowerCase().replace(' ', '-'))}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

      
{/* Hero Section */}
<section className="min-vh-100 d-flex align-items-center bg-secondary-custom">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Column: Text */}
      <div className="col-lg-6 text-center text-lg-start">
        <h1 className="display-3 fw-bold text-light-custom mb-4">Welcome to Coffee Haven</h1>
        <p className="lead text-light-custom mb-4">
          Sip, Relax, Repeat ☕💛 <br />
          Life is too short for bad coffee, and at Coffee Haven, we make sure every cup is pure perfection.
        </p>
        <button className="btn btn-primary-custom btn-lg">Explore Our Menu</button>
      </div>

      {/* Right Column: 3D Coffee Cup */}
      <div className="col-lg-6 d-flex justify-content-center">
        <div style={{ width: '100%', maxWidth: '400px', height: '400px' }}>
          <ThreeScene />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Best Sellers Section */}
<section id="best-sellers" className="best-sellers-section">
        <div className="container">
          <h2 className="best-sellers-title">Our Best Sellers</h2>
          <div className="row g-4">
            {bestSellers.map((coffee, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="best-seller-card">
                  <img 
                    src={coffee.image} 
                    alt={coffee.name}
                    className="product-image"
                  />
                  <h3 className="product-name text-center">{coffee.name}</h3>
                  <p className="product-description">{coffee.description}</p>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="product-price">{coffee.price}</span>
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < Math.floor(coffee.rating) ? "" : "text-muted"} 
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Happy Customers */}
      <HappyCustomers />
      
      {/* Reels*/}
      <ReelsSection />

    
      {/* Enhanced About Section */}
      <section id="aboutus" className="py-5 bg-secondary-custom">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <h2 className="text-light-custom fw-bold mb-4">Our Story</h2>
              <div className="about-card mb-4">
                <p className="lead text-light-custom">
                  Founded in 2020, Coffee Haven began as a small passion project and has grown into a beloved community hub. 
                  Our master roasters carefully select and roast beans from sustainable farms worldwide, ensuring each cup 
                  tells a story of quality and craftsmanship.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="about-card text-center">
                <FaPhone className="text-light-custom mb-3 contact-icon" size={30} />
                <h3 className="text-light-custom fw-bold mb-3">Call Us</h3>
                <p className="text-light-custom mb-0">+1 (800) 123-4567</p>
                <p className="text-light-custom">Monday - Sunday: 7AM - 8PM</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card text-center">
                <FaEnvelope className="text-light-custom mb-3 contact-icon" size={30} />
                <h3 className="text-light-custom fw-bold mb-3">Email Us</h3>
                <p className="text-light-custom mb-0">info@coffeehaven.com</p>
                <p className="text-light-custom">support@coffeehaven.com</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card text-center">
                <FaMapMarkerAlt className="text-light-custom mb-3 contact-icon" size={30} />
                <h3 className="text-light-custom fw-bold mb-3">Visit Us</h3>
                <p className="text-light-custom mb-0">123 Coffee Lane</p>
                <p className="text-light-custom">Espresso City, CA 98765</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark-custom">
        <div className="container">
          <div className="text-center text-light-custom">
            <div className="mb-3">
              <FaFacebookF className="mx-2" />
              <FaTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
            </div>
            <p className="mb-0">© 2025 Coffee Haven. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CoffeeLandingPage;