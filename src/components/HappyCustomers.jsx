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
      avatar: "https://t4.ftcdn.net/jpg/10/40/37/65/240_F_1040376541_9FNLFFpxUGzVPmoVLnC780bDZVW7qYgz.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      profession: "Software Engineer",
      quote: "Coffee Haven has become my daily ritual. Their attention to detail in every cup is remarkable.",
      rating: 5,
      avatar: "https://t3.ftcdn.net/jpg/04/88/08/12/240_F_488081207_aRcVbcZ46xxR4RAIwD7Lm2hAS4RRayXC.jpg"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      profession: "Marketing Manager",
      quote: "Not just a coffee shop, but a community. The flavors are rich, and the atmosphere is always welcoming.",
      rating: 5,
      avatar: "https://t3.ftcdn.net/jpg/08/50/26/30/240_F_850263029_XLVjG2IIu4dsYBgP3HZRL2eLtGzXAm35.jpg"
    },
    {
      id: 4,
      name: "David Kim",
      profession: "Entrepreneur",
      quote: "Perfect spot for both work and relaxation. The coffee quality is consistently outstanding!",
      rating: 5,
      avatar: "https://t3.ftcdn.net/jpg/09/25/33/36/240_F_925333691_lqFajHS0BvXl3hyVsxjMrxlAvc1MVn9j.jpg"
    }
  ];

  const customStyles = `
    .happy-customers-section {
      background-color: #795757;
      padding: 4rem 0;
      color: #FFF0D1;
    }

    .happy-customers-title {
      text-align: center;
      margin-bottom: 3rem;
      font-size: 2.5rem;
      color: #FFF0D1;
    }

    .customer-card {
      background-color: rgba(255, 240, 209, 0.1);
      border-radius: 15px;
      padding: 2rem;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .customer-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    }

    .quote-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      color: rgba(255, 240, 209, 0.2);
      font-size: 3rem;
    }

    .customer-quote {
      position: relative;
      z-index: 1;
      font-style: italic;
      margin-bottom: 1.5rem;
      color: #FFF0D1;
      font-size: 1.1rem;
    }

    .customer-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .customer-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid #FFF0D1;
      background-color: #664343;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }

    .customer-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .customer-card:hover .customer-avatar {
      transform: scale(1.05);
    }

    .customer-details {
      flex-grow: 1;
    }

    .customer-name {
      font-weight: bold;
      color: #FFF0D1;
      margin-bottom: 0.25rem;
      font-size: 1.2rem;
    }

    .customer-profession {
      color: rgba(255, 240, 209, 0.7);
      font-size: 1rem;
    }

    .rating-stars {
      color: #FFD700;
      display: flex;
      gap: 0.25rem;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .customer-info {
        flex-direction: column;
        text-align: center;
      }

      .customer-avatar {
        width: 80px;
        height: 80px;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section id="happy-customers" className="happy-customers-section">
        <div className="container">
          <h2 className="happy-customers-title">Happy Customers</h2>
          <div className="row">
            {customers.map((customer) => (
              <div key={customer.id} className="col-md-6 mb-4">
                <div className="customer-card">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="customer-quote">"{customer.quote}"</p>
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
                        {[...Array(customer.rating)].map((_, index) => (
                          <FaStar key={index} />
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