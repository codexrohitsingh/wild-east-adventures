import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Adventures from "@/components/Adventures";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      <Hero />
      <Adventures />
      <Destinations />
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
