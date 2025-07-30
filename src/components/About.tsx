import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Certified guides and top-tier safety equipment for every adventure"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Guides",
      description: "Local experts with deep knowledge of Jharkhand's wilderness"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Focus",
      description: "Supporting local communities through responsible tourism"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passionate Team",
      description: "Adventure enthusiasts dedicated to creating unforgettable experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-adventure-primary border-adventure-primary">
            Our Story
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Passionate About Eastern India's Wilderness
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a love for Jharkhand's untamed beauty, WildEast Adventures has been 
            crafting extraordinary experiences since 2018. We're not just tour operators – 
            we're storytellers, conservationists, and your gateway to discovering the hidden 
            gems of Eastern India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-mountain transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-adventure-primary/10 rounded-full flex items-center justify-center text-adventure-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Your Adventure, Our Expertise
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                For over 5 years, we've been pioneering sustainable adventure tourism in Jharkhand. 
                Our deep-rooted connection with local communities and intimate knowledge of the terrain 
                makes every journey authentic and responsible.
              </p>
              <p className="leading-relaxed">
                Whether you're a thrill-seeking student or a luxury traveler, we craft experiences 
                that respect nature while creating memories that last a lifetime.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-adventure-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Adventures Completed</div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-adventure-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-adventure-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Local Partners</div>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-adventure-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;