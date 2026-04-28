export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - darkest color */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b3a4b] via-[#212f45] to-[#272640]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#006466] blur-3xl opacity-20 animate-float-slow"
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4d194d] blur-3xl opacity-20 animate-float-medium delay-1000"
        />
        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-[#065a60] blur-3xl opacity-15 animate-float-fast delay-2000"
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#312244] blur-3xl opacity-25 animate-float-slow delay-3000"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0b525b 1px, transparent 1px),
            linear-gradient(to bottom, #0b525b 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Diagonal lines pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            #144552 40px,
            #144552 42px
          )`,
        }}
      />

      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#0b525b]"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Vignette effect for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}