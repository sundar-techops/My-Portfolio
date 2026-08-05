export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large blue orb — top left */}
      <div
        className="absolute animate-float"
        style={{
          top: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Emerald orb — middle right */}
      <div
        className="absolute animate-float-delayed"
        style={{
          top: '30%',
          right: '-8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Purple orb — bottom left */}
      <div
        className="absolute animate-float"
        style={{
          bottom: '5%',
          left: '15%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
          animationDelay: '3s',
        }}
      />

      {/* Small blue accent — center */}
      <div
        className="absolute animate-pulse-glow"
        style={{
          top: '55%',
          left: '45%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Emerald accent — top right */}
      <div
        className="absolute animate-float-delayed"
        style={{
          top: '10%',
          right: '25%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
          animationDelay: '7s',
        }}
      />
    </div>
  );
}
