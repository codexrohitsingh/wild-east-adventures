import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import netarhatImage from "@/assets/netarhat-hills.jpg";
import hundruImage from "@/assets/hundru-falls.jpg";
import betlaImage from "@/assets/betla-national-park.jpg";

const Destinations = () => {
  const destinations = [
    {
      image: netarhatImage,
      name: "Netarhat",
      subtitle: "Queen of Chotanagpur",
      description: "Rolling hills covered in mist, offering breathtaking sunrise views and cool climate perfect for camping."
    },
    {
      image: hundruImage,
      name: "Hundru Falls",
      subtitle: "Rappelling Paradise",
      description: "Spectacular 320-foot waterfall ideal for adventure sports, photography, and nature walks."
    },
    {
      image: betlaImage,
      name: "Betla National Park",
      subtitle: "Wildlife Safari",
      description: "Home to tigers, elephants, and diverse wildlife in the heart of Jharkhand's wilderness."
    },
    {
      image: netarhatImage,
      name: "Parasnath Hills",
      subtitle: "Spiritual Trekking",
      description: "Sacred Jain pilgrimage site with challenging treks and panoramic valley views."
    },
    {
      image: hundruImage,
      name: "Dalma Wildlife",
      subtitle: "Elephant Reserve",
      description: "Famous elephant sanctuary with jeep safaris and nature trails through dense forests."
    },
    {
      image: betlaImage,
      name: "Ranchi Hills",
      subtitle: "Rock Climbing",
      description: "Perfect for rock climbing, rappelling, and enjoying scenic views of the capital city."
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-adventure-primary border-adventure-primary">
            Discover Hidden Gems
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Discover Jharkhand's Hidden Gems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From misty hills to roaring waterfalls, explore the untouched beauty of Eastern India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-mountain transition-all duration-500 hover:scale-105 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-white/90 text-foreground"
                >
                  {destination.subtitle}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-adventure-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {destination.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;