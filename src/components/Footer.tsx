import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mountain-dark text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-adventure-primary" />
              <span className="text-2xl font-bold">WildEast</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Discover the wild heart of Eastern India with expert-guided adventures 
              in Jharkhand's pristine wilderness.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-adventure-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-adventure-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-adventure-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Adventures", "Destinations", "Safety", "Reviews"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-adventure-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Adventures */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Adventures</h4>
            <ul className="space-y-2">
              {["Student Programs", "Premium Escapes", "Corporate Tours", "Photography Tours", "Trekking"].map((adventure) => (
                <li key={adventure}>
                  <a href="#" className="text-white/80 hover:text-adventure-primary transition-colors">
                    {adventure}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-adventure-primary" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-adventure-primary" />
                <span className="text-white/80">hello@wildeast.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-adventure-primary" />
                <span className="text-white/80">Ranchi, Jharkhand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} WildEast Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;