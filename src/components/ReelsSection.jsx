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
      background-color: #3B3030;
      padding: 4rem 0;
    }

    .reels-title {
      color: #FFF0D1;
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .reel-card {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      height: 400px;
      background-color: #664343;
      transition: all 0.3s ease;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    .reel-card:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    }

    .reel-thumbnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .reel-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      color: #FFF0D1;
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
      color: #FFF0D1;
      background: rgba(121, 87, 87, 0.7);
      border-radius: 50%;
      padding: 15px;
      transition: transform 0.3s ease;
    }

    .reel-card:hover .reel-play-icon {
      transform: translate(-50%, -50%) scale(1.2);
    }

    .reel-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .reel-views {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  `;
  return (
    <>
      <style>{customStyles}</style>
      <section id="reels" className="reels-section">
        <div className="container">
          <h2 className="reels-title">Coffee Reels</h2>
          <div className="row g-4">
            {reels.map((reel) => (
              <div key={reel.id} className="col-md-4">
                <div className="reel-card">
                  <img 
                    src={reel.thumbnail} 
                    alt={reel.title} 
                    className="reel-thumbnail" 
                    loading="lazy"
                  />
                  <div className="reel-play-icon">
                    <FaPlay size={30} />
                  </div>
                  <div className="reel-overlay">
                    <div className="reel-details">
                      <div className="reel-title">{reel.title}</div>
                      <div className="reel-views">
                        <FaInstagram />
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