import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-jharkhand.jpg";

const Hero = () => {
  const stats = [
    { number: "2500+", label: "Adventurers" },
    { number: "15+", label: "Destinations" },
    { number: "150+", label: "School Partners" },
    { number: "100%", label: "Safety" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
          ✨ Explore Eastern India
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Make Your <span className="text-adventure-primary">Adventure</span> in<br />
          Jharkhand<br />
          <span className="text-accent">Unforgettable!</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          Discover the wild heart of Eastern India with expert-guided adventures, 
          from student expeditions to premium escapes — all designed for the bold and curious
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Adventure →
          </Button>
          <Button variant="outline-white" size="lg" className="text-lg px-8 py-6">
            Watch Our Story
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-adventure-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;