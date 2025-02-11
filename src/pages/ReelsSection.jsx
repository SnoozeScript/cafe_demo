import React from 'react';
import { FaInstagram, FaPlay } from 'react-icons/fa';

const ReelsSection = () => {
  const reels = [
    {
      id: 1,
      thumbnail: "https://t3.ftcdn.net/jpg/09/86/44/80/240_F_986448038_Q5qrDhJ0KrWy9VYQxKTldv12BKducti7.jpg",
      title: "Brewing Process",
      views: "5.2K"
    },
    {
      id: 2,
      thumbnail: "https://t3.ftcdn.net/jpg/00/83/41/20/240_F_83412020_e3GkDGCMvPbNVKFd5t9g1Vzp8IS1kOEE.jpg",
      title: "Latte Art",
      views: "8.7K"
    },
    {
      id: 3,
      thumbnail: "https://t3.ftcdn.net/jpg/09/68/51/66/240_F_968516602_wry5OY5kF6aZMr0QvVCqIv20i3niuend.webp",
      title: "Coffee Roasting",
      views: "6.5K"
    }
  ];

  const customStyles = `
    .reels-section {
      background: linear-gradient(135deg, var(--coffee-medium) 0%, var(--coffee-dark) 100%);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }

    .reels-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('/coffee-pattern.png') repeat;
      opacity: 0.1;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      color: var(--coffee-cream);
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

    .reel-card {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      height: 400px;
      background-color: var(--coffee-dark);
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .reel-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .reel-thumbnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .reel-card:hover .reel-thumbnail {
      transform: scale(1.1);
    }

    .reel-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(26,15,7,0.2), rgba(26,15,7,0.8));
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2rem;
      color: var(--coffee-cream);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .reel-card:hover .reel-overlay {
      opacity: 1;
    }

    .reel-play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--coffee-cream);
      background: var(--coffee-light);
      border-radius: 50%;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }

    .reel-card:hover .reel-play-icon {
      transform: translate(-50%, -50%) scale(1.1);
      background: var(--coffee-gold);
    }

    .reel-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(26,15,7,0.8);
      padding: 1rem;
      border-radius: 10px;
    }

    .reel-title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .reel-views {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--coffee-light);
    }

    .animate-fade-in {
      animation: fadeIn 1s ease forwards;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section id="reels" className="reels-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">
            Coffee Reels
            <div className="underline"></div>
          </h2>
          <div className="row g-4">
            {reels.map((reel, index) => (
              <div 
                key={reel.id} 
                className="col-md-4"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="reel-card animate-fade-in">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="reel-thumbnail"
                    loading="lazy"
                  />
                  <div className="reel-play-icon">
                    <FaPlay size={24} />
                  </div>
                  <div className="reel-overlay">
                    <div className="reel-details">
                      <div className="reel-title">{reel.title}</div>
                      <div className="reel-views">
                        <FaInstagram size={16} />
                        {reel.views}
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

export default ReelsSection;