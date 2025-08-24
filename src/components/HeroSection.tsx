

import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Zap, Rocket, Trophy, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-6 h-6 bg-orange-200 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-gray-200 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-orange-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-60 right-40 w-10 h-10 bg-gray-100 rounded-full animate-spin opacity-40"></div>
        <div className="absolute bottom-60 right-20 w-5 h-5 bg-orange-100 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 left-1/3 w-7 h-7 bg-gray-200 rounded-full animate-pulse opacity-30"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-16 left-16 animate-float">
        <Rocket className="w-12 h-12 text-orange-500 animate-bounce" />
      </div>
      <div className="absolute top-20 right-16 animate-float-delayed">
        <Trophy className="w-10 h-10 text-gray-600 animate-spin" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float">
        <Users className="w-9 h-9 text-orange-400 animate-pulse" />
      </div>
      <div className="absolute top-1/2 right-20 animate-float-delayed">
        <Star className="w-8 h-8 text-gray-500 animate-ping" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className={`transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
         
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-16 leading-tight text-gray-900">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent inline-block mb-8 transform hover:scale-105 transition-all duration-700 animate-pulse font-black">
             LAUNCH EVENT
            </div>
            <br />
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent inline-block mb-8 transform hover:scale-105 transition-all duration-700 animate-pulse animation-delay-300 font-black">
             OF
            </div>
            <br />
            <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-all duration-700 animate-pulse animation-delay-600 font-black">HOMIES4U</span>
          </h1>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center mt-12 space-x-8">
            <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse shadow-lg"></div>
            <div className="relative">
              <Zap className="w-10 h-10 text-orange-500 animate-bounce" />
              <div className="absolute inset-0 w-10 h-10 bg-orange-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="w-24 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full animate-pulse shadow-lg"></div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-16">
            <p className="text-3xl text-gray-700 font-bold mb-10 animate-fade-in-up animation-delay-1000">
              🎉 Join the Revolution • Connect • Celebrate • Create 🎉
            </p>
            
           
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-180deg); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
