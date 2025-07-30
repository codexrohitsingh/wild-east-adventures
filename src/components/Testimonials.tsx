import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "College Student",
      location: "Delhi University",
      rating: 5,
      text: "WildEast made our college trip unforgettable! The guides were amazing, and Netarhat's sunrise was magical. Perfect for students on a budget.",
      initials: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Corporate Executive",
      location: "Mumbai",
      rating: 5,
      text: "The premium escape to Betla was exactly what our family needed. Luxury camping with adventure - couldn't ask for more!",
      initials: "RK"
    },
    {
      name: "Sarah Johnson",
      role: "Travel Blogger",
      location: "UK",
      rating: 5,
      text: "As a travel blogger, I've seen many places, but Jharkhand through WildEast's eyes was extraordinary. Authentic, responsible, and thrilling!",
      initials: "SJ"
    },
    {
      name: "Amit Patel",
      role: "Photography Enthusiast",
      location: "Bangalore",
      rating: 5,
      text: "The photography tour was phenomenal! Hidden spots, perfect timing for golden hour, and guides who understand what photographers need.",
      initials: "AP"
    },
    {
      name: "Meera Reddy",
      role: "Adventure Seeker",
      location: "Hyderabad",
      rating: 5,
      text: "Rappelling at Hundru Falls with WildEast was the highlight of my year. Professional, safe, and absolutely exhilarating!",
      initials: "MR"
    },
    {
      name: "David Chen",
      role: "Corporate Group",
      location: "Singapore",
      rating: 5,
      text: "WildEast organized our company retreat perfectly. Team building activities in stunning locations - our team still talks about it!",
      initials: "DC"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-adventure-primary border-adventure-primary">
            What Our Adventurers Say
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Stories from the Wild
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from fellow adventurers who've explored Jharkhand with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-mountain transition-all duration-300 border-0"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-adventure-primary/10 text-adventure-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-adventure-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Adventurers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-adventure-primary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-adventure-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-adventure-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;