import React from 'react';
import { motion } from 'framer-motion';

const CoffeeBackground = () => {
  // Custom hook for background elements
  const useBackgroundElements = (count, options) => {
    return React.useMemo(() =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: options.minScale + Math.random() * (options.maxScale - options.minScale),
        delay: Math.random() * options.maxDelay
      })), [count, options]
    );
  };

  // Generate elements
  const beans = useBackgroundElements(15, {
    minScale: 0.6,
    maxScale: 1.2,
    maxDelay: 4
  });

  const steamParticles = useBackgroundElements(12, {
    minScale: 0.3,
    maxScale: 0.8,
    maxDelay: 3
  });

  const backgroundStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  };

  const gradientStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #1A0F07 0%, #3C2A21 100%)',
    opacity: 0.9,
  };

  const beanStyles = {
    position: 'absolute',
    width: '2rem',
    height: '1rem',
    backgroundColor: 'rgba(212, 165, 116, 0.2)',
    borderRadius: '50%',
  };

  const steamStyles = {
    position: 'absolute',
    width: '1rem',
    height: '1rem',
    backgroundColor: 'rgba(255, 243, 228, 0.1)',
    borderRadius: '50%',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 50% 50%, rgba(212, 165, 116, 0.08) 0%, rgba(26, 15, 7, 0.12) 100%)',
  };

  return (
    <div style={backgroundStyles} className="coffee-background">
      {/* Base gradient */}
      <div style={gradientStyles} />
      
      {/* Coffee Beans */}
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          style={beanStyles}
          initial={{
            x: `${bean.x}vw`,
            y: `${bean.y}vh`,
            rotate: bean.rotation,
            scale: bean.scale
          }}
          animate={{
            y: [`${bean.y}vh`, `${(bean.y + 20) % 100}vh`],
            rotate: [bean.rotation, bean.rotation + 360],
            scale: [bean.scale, bean.scale * 1.1, bean.scale]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: bean.delay
          }}
        />
      ))}

      {/* Steam Particles */}
      {steamParticles.map((particle) => (
        <motion.div
          key={particle.id}
          style={steamStyles}
          initial={{
            x: `${35 + Math.random() * 30}vw`,
            y: `${particle.y}vh`,
            scale: particle.scale,
            opacity: 0
          }}
          animate={{
            y: [`${particle.y}vh`, `${Math.max(0, particle.y - 30)}vh`],
            opacity: [0, 0.4, 0],
            scale: [particle.scale, particle.scale * 1.5, particle.scale * 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Ambient Light Effect */}
      <motion.div
        style={overlayStyles}
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default CoffeeBackground;