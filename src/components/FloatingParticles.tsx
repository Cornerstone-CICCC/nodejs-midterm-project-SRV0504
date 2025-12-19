type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

export function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    color: ['#06b6d4', '#a855f7', '#3b82f6'][Math.floor(Math.random() * 3)],
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -60px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(30px, -40px) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: blur(2px);
            opacity: 0.3;
          }
          50% {
            filter: blur(4px);
            opacity: 0.7;
          }
        }

        .particle {
          animation: float var(--duration) ease-in-out infinite, pulse-glow 4s ease-in-out infinite;
          animation-delay: var(--delay);
        }
      `}} />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              backgroundColor: particle.color,
              '--duration': `${particle.duration}s`,
              '--delay': `${particle.delay}s`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
