import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const AboutAndFooter = () => {
  const contactInfo = [
    {
      icon: <FaPhone size={30} />,
      title: "Call Us",
      lines: ["+1 (800) 123-4567", "Monday - Sunday: 7AM - 8PM"]
    },
    {
      icon: <FaEnvelope size={30} />,
      title: "Email Us",
      lines: ["info@coffeehaven.com", "support@coffeehaven.com"]
    },
    {
      icon: <FaMapMarkerAlt size={30} />,
      title: "Visit Us",
      lines: ["123 Coffee Lane", "Espresso City, CA 98765"]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={24} />, href: "#" },
    { icon: <FaTwitter size={24} />, href: "#" },
    { icon: <FaInstagram size={24} />, href: "#" }
  ];

  const customStyles = `
    .about-section {
      background: linear-gradient(135deg, var(--coffee-medium) 0%, var(--coffee-dark) 100%);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }

    .about-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/coffee-pattern.png') repeat;
      opacity: 0.1;
    }

    .about-content {
      position: relative;
      z-index: 2;
    }

    .about-card {
      background: rgba(255, 243, 228, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 243, 228, 0.1);
      border-radius: 20px;
      padding: 2.5rem;
      height: 100%;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .about-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .contact-icon {
      color: var(--coffee-light);
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }

    .about-card:hover .contact-icon {
      transform: scale(1.2);
      color: var(--coffee-gold);
    }

    .footer {
      background: var(--coffee-dark);
      padding: 3rem 0;
      position: relative;
      overflow: hidden;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/coffee-pattern.png') repeat;
      opacity: 0.05;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .social-link {
      color: var(--coffee-cream);
      background: rgba(255, 243, 228, 0.1);
      padding: 1rem;
      border-radius: 50%;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .social-link:hover {
      color: var(--coffee-gold);
      background: rgba(255, 243, 228, 0.2);
      transform: translateY(-5px);
    }

    .copyright {
      color: var(--coffee-cream);
      opacity: 0.8;
      font-size: 0.9rem;
    }

    .animate-fade-in {
      animation: fadeIn 1s ease forwards;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      
      {/* About Section */}
      <section id="aboutus" className="about-section">
        <div className="container about-content">
          <h2 className="section-title text-center mb-5 animate-fade-in">
            Our Story
            <div className="underline mx-auto"></div>
          </h2>
          
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <div className="about-card animate-fade-in">
                <p className="lead mb-0" style={{ color: 'var(--coffee-cream)' }}>
                  Founded in 2020, Coffee Haven began as a small passion project
                  and has grown into a beloved community hub. Our master roasters
                  carefully select and roast beans from sustainable farms worldwide,
                  ensuring each cup tells a story of quality and craftsmanship.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title} 
                className="col-md-4"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="about-card text-center animate-fade-in">
                  <div className="contact-icon">{info.icon}</div>
                  <h3 className="fw-bold mb-3" style={{ color: 'var(--coffee-cream)' }}>
                    {info.title}
                  </h3>
                  {info.lines.map((line, i) => (
                    <p 
                      key={i} 
                      className={i === 0 ? 'mb-0' : ''} 
                      style={{ color: 'var(--coffee-light)' }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container position-relative">
          <div className="text-center">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="social-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="copyright mb-0">
              © 2025 Coffee Haven. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutAndFooter;