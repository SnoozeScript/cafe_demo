import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const HappyCustomers = () => {
  const customers = [
    {
      id: 1,
      name: "Emily Rodriguez",
      profession: "Graphic Designer",
      quote: "The best coffee I've ever had! The ambiance is perfect and the service is exceptional!",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Michael Chen",
      profession: "Software Engineer",
      quote: "Coffee Haven has become my daily ritual. Their attention to detail in every cup is remarkable.",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      profession: "Marketing Manager",
      quote: "Not just a coffee shop, but a community. The flavors are rich, and the atmosphere is always welcoming.",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "David Kim",
      profession: "Entrepreneur",
      quote: "Perfect spot for both work and relaxation. The coffee quality is consistently outstanding!",
      rating: 5,
      avatar: "/api/placeholder/100/100"
    }
  ];

  const customStyles = `
    .happy-customers-section {
      background: linear-gradient(135deg, var(--coffee-medium) 0%, var(--coffee-dark) 100%);
      padding: 6rem 0;
      color: var(--coffee-cream);
      position: relative;
      overflow: hidden;
    }

    .happy-customers-title {
      font-size: 3rem;
      font-weight: 800;
      color: var(--coffee-cream);
      text-align: center;
      margin-bottom: 4rem;
    }

    .customer-card {
      background: rgba(255, 243, 228, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 243, 228, 0.1);
      border-radius: 20px;
      padding: 2.5rem;
      height: 100%;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .customer-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .quote-icon {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      color: var(--coffee-light);
      opacity: 0.2;
      font-size: 2.5rem;
    }

    .customer-quote {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--coffee-cream);
      font-style: italic;
      margin-bottom: 2rem;
      position: relative;
      z-index: 1;
    }

    .customer-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .customer-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 3px solid var(--coffee-light);
      overflow: hidden;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    .customer-card:hover .customer-avatar {
      transform: scale(1.1);
      border-color: var(--coffee-cream);
    }

    .customer-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .customer-details {
      flex-grow: 1;
    }

    .customer-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--coffee-cream);
      margin-bottom: 0.25rem;
    }

    .customer-profession {
      color: var(--coffee-light);
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
    }

    .rating-stars {
      color: var(--coffee-gold);
      display: flex;
      gap: 0.25rem;
    }

    .underline {
      width: 60px;
      height: 4px;
      background: var(--coffee-light);
      margin: 1rem auto;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      .happy-customers-section {
        padding: 4rem 0;
      }

      .happy-customers-title {
        font-size: 2.5rem;
      }

      .customer-info {
        flex-direction: column;
        text-align: center;
      }

      .rating-stars {
        justify-content: center;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section id="happy-customers" className=" happy-customers-section ">
        <div className="container">
          <h2 className="happy-customers-title animate-fade-in">
            Happy Customers
            <div className="underline"></div>
          </h2>
          <div className="row g-4">
            {customers.map((customer, index) => (
              <div key={customer.id} className="col-lg-6">
                <div 
                  className="customer-card animate-fade-in" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <FaQuoteLeft className="quote-icon" />
                  <p className="customer-quote">&#34;{customer.quote}&#34;</p>
                  <div className="customer-info">
                    <div className="customer-avatar">
                      <img 
                        src={customer.avatar} 
                        alt={customer.name} 
                        className="img-fluid"
                      />
                    </div>
                    <div className="customer-details">
                      <h3 className="customer-name">{customer.name}</h3>
                      <p className="customer-profession">{customer.profession}</p>
                      <div className="rating-stars">
                        {[...Array(customer.rating)].map((_, i) => (
                          <FaStar key={i} size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HappyCustomers;