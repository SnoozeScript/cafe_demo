import React from "react";
import { FaStar } from "react-icons/fa";
import ReelsSection from "./ReelsSection";
import HappyCustomers from "./HappyCustomers";
import ThreeScene from "../components/ThreeScene";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CoffeeBackground from "../components/CoffeeBackground";
import AboutAndFooter from "./AboutAndFooter";

const CoffeeLandingPage = () => {
  const bestSellers = [
    {
      name: "Ethiopian Yirgacheffe",
      description: "Light roasted, floral and citrusy notes",
      rating: 4.8,
      image:
        "https://t3.ftcdn.net/jpg/11/20/90/80/240_F_1120908026_B2GviXOOh2keUpOvyUrcHdi2yKGWipRO.jpg",
    },
    {
      name: "Colombian Supremo",
      description: "Medium roast with caramel sweetness",
      rating: 4.9,
      image:
        "https://t4.ftcdn.net/jpg/11/89/82/51/240_F_1189825173_X7mmWyHTqSVKL8x3I8Tcv5EYaCBe7yQd.jpg",
    },
    {
      name: "Italian Dark Roast",
      description: "Bold and intense with chocolate notes",
      rating: 4.7,
      image:
        "https://t3.ftcdn.net/jpg/11/47/31/52/240_F_1147315206_DVcEOEtKPz6ENOli7dUlb2d9ixkZyC3V.webp",
    },
    {
      name: "House Blend",
      description: "Balanced medium roast, nutty finish",
      rating: 4.6,
      image:
        "https://t4.ftcdn.net/jpg/11/87/67/89/240_F_1187678977_lZ6TUVYa3iqM1EYjjMdifWEgioQJU0Ry.jpg",
    },
  ];

  const customStyles = `
    :root {
      --coffee-dark: #1A0F07;
      --coffee-medium: #3C2A21;
      --coffee-light: #D4A574;
      --coffee-cream: #FFF3E4;
      --coffee-accent: #8B4513;
      --coffee-gold: #D4AF37;
    }

    body {
      font-family: 'Outfit', sans-serif;
      color: var(--coffee-dark);
    }

    .hero-section {
      background: linear-gradient(135deg, var(--coffee-dark) 0%, var(--coffee-medium) 100%);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/coffee-pattern.png') repeat;
      opacity: 0.1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    .hero-title {
      font-size: 4.5rem;
      font-weight: 800;
      color: var(--coffee-cream);
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--coffee-light);
      font-weight: 400;
      margin-bottom: 2rem;
    }

    .btn-custom {
      background: var(--coffee-light);
      color: var(--coffee-dark);
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 2px solid transparent;
      transition: all 0.3s ease;
    }

    .btn-custom:hover {
      background: transparent;
      color: var(--coffee-light);
      border-color: var(--coffee-light);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    .best-sellers-section {
      background: var(--coffee-cream);
      padding: 6rem 0;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      color: var(--coffee-dark);
      text-align: center;
      margin-bottom: 4rem;
    }

    .underline {
      width: 60px;
      height: 4px;
      background: var(--coffee-light);
      margin: 1rem auto;
      border-radius: 2px;
    }

    .product-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }

    .product-image {
      height: 250px;
      object-fit: cover;
      transition: all 0.5s ease;
    }

    .product-card:hover .product-image {
      transform: scale(1.1);
    }

    .product-content {
      padding: 2rem;
    }

    .product-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--coffee-dark);
      margin-bottom: 1rem;
    }

    .product-description {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .rating-stars {
      display: flex;
      justify-content: center;
      gap: 0.25rem;
    }

    .about-section {
      background: linear-gradient(135deg, var(--coffee-medium) 0%, var(--coffee-dark) 100%);
      padding: 6rem 0;
      color: var(--coffee-cream);
    }

    .about-card {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      padding: 3rem;
      height: 100%;
    }

    .footer {
      background: var(--coffee-dark);
      padding: 4rem 0;
      color: var(--coffee-cream);
    }

    .social-links a {
      transition: transform 0.3s ease, color 0.3s ease;
    }

    .social-links a:hover {
      color: var(--coffee-light);
      transform: translateY(-3px);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
      animation: fadeIn 1s ease forwards;
    }
  `;

  return (
    <>
      <CoffeeBackground />
      <style>{customStyles}</style>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content animate-fade-in">
              <h1 className="hero-title mb-4">Experience Coffee Perfection</h1>
              <p className="hero-subtitle">
                Where every cup tells a story of passion, quality, and artisanal
                craftsmanship
              </p>
              <button className="btn btn-custom">Discover Our Menu</button>
            </div>
            <div className="col-lg-6">
              <div className="position-relative" style={{ height: "600px" }}>
                <ThreeScene />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section id="best-sellers" className="best-sellers-section py-6">
        <div className="container">
          <h2 className="section-title text-white text-center mb-5 animate-fade-in">
            Our Best Sellers
            <div className="underline mx-auto mt-3"></div>
          </h2>
          <div className="row g-4">
            {bestSellers.map((coffee, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div
                  className="card product-card h-100 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-img-top overflow-hidden">
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="img-fluid product-image"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title product-title">{coffee.name}</h3>
                    <p className="card-text product-description">
                      {coffee.description}
                    </p>
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(coffee.rating)
                              ? "text-warning"
                              : "text-muted"
                          }
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers */}
      <HappyCustomers />

      {/* Reels Section */}
      <ReelsSection />

      {/* About and Footer */}
      <AboutAndFooter />
    </>
  );
};

export default CoffeeLandingPage;
