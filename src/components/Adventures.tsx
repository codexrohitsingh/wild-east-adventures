import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Crown, Users, Award, MapPin, Star } from "lucide-react";

const Adventures = () => {
  const adventures = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Student Adventures",
      description: "Perfect for school groups and college students (17-21). Educational trips, team building, and budget-friendly adventures in Jharkhand.",
      price: "₹2,000 - ₹8,000",
      features: ["Group Discounts", "Educational Certificates", "Team Building Activities"],
      badge: "Popular",
      variant: "student"
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Premium Escapes",
      description: "Luxury adventures for professionals (30-45). Weekend retreats, family experiences, and premium camping in pristine locations.",
      price: "₹15,000 - ₹45,000",
      features: ["Luxury Accommodation", "Private Guides", "Gourmet Meals"],
      badge: "Exclusive",
      variant: "premium"
    }
  ];

  return (
    <section id="adventures" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Adventure Style
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student seeking adventure or a professional looking for luxury, 
            we have the perfect experience for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {adventures.map((adventure, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-adventure hover:scale-105 ${
                adventure.variant === 'premium' ? 'border-accent/20 bg-gradient-card' : 'border-adventure-primary/20'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    adventure.variant === 'premium' ? 'bg-accent/10 text-accent' : 'bg-adventure-primary/10 text-adventure-primary'
                  }`}>
                    {adventure.icon}
                  </div>
                  <Badge variant={adventure.variant === 'premium' ? 'destructive' : 'default'}>
                    {adventure.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {adventure.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {adventure.description}
                </p>
                
                <div className="space-y-3">
                  <div className={`text-2xl font-bold ${
                    adventure.variant === 'premium' ? 'text-accent' : 'text-adventure-primary'
                  }`}>
                    {adventure.price}
                  </div>
                  
                  <ul className="space-y-2">
                    {adventure.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={adventure.variant === 'premium' ? 'default' : 'hero'} 
                  className="w-full"
                  size="lg"
                >
                  {adventure.variant === 'premium' ? 'Discover Premium Experiences' : 'Explore Student Programs'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;