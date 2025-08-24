


// // // import React, { useEffect, useState } from 'react';
// // // import { Sparkles } from 'lucide-react';

// // // const HeroSection: React.FC = () => {
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     setIsVisible(true);
// // //   }, []);

// // //   return (
// // //     <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
// // //       {/* Curved Background */}
// // //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-[50px]"></div>
      
// // //       {/* Hero Content */}
// // //       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
// // //         <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
// // //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
// // //             <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-xl inline-block mb-3 transform hover:scale-105 transition-all duration-300 shadow-lg">
// // //              Welcome to the Launch Event 
// // //             </div>
// // //             <br />
             
// // //             <br />
// // //             <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-xl inline-block mb-3 transform hover:scale-105 transition-all duration-300 shadow-lg">
// // //              of
// // //             </div>
// // //             <br />
// // //             <span className="bg-gradient-to-r from-gray-800 to-black text-white px-8 py-3 rounded-xl inline-block mt-3 transform hover:scale-105 transition-all duration-300 shadow-xl">Homies4u</span>
// // //             <br />
           
// // //           </h1>
          
// // //           <p className="text-lg text-gray-700 mb-6 font-medium">
            
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;











// // import React, { useEffect, useState } from 'react';
// // import { Sparkles, Star, Zap } from 'lucide-react';

// // const HeroSection: React.FC = () => {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     setIsVisible(true);
// //   }, []);

// //   return (
// //     <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-orange-100 to-amber-50 overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0">
// //         <div className="absolute top-20 left-10 w-4 h-4 bg-orange-300 rounded-full animate-pulse opacity-60"></div>
// //         <div className="absolute top-40 right-20 w-6 h-6 bg-amber-400 rounded-full animate-bounce opacity-50"></div>
// //         <div className="absolute bottom-40 left-20 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-40"></div>
// //         <div className="absolute top-60 right-40 w-5 h-5 bg-amber-300 rounded-full animate-pulse opacity-50"></div>
// //       </div>
      
// //       {/* Curved Background */}
// //       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-400 via-orange-350 to-orange-300 rounded-t-[60px] shadow-2xl"></div>
      
// //       {/* Floating Icons */}
// //       <div className="absolute top-16 left-16 animate-float">
// //         <Sparkles className="w-8 h-8 text-orange-400 animate-spin" />
// //       </div>
// //       <div className="absolute top-20 right-16 animate-float-delayed">
// //         <Star className="w-6 h-6 text-amber-500 animate-pulse" />
// //       </div>
// //       <div className="absolute bottom-60 left-32 animate-float">
// //         <Zap className="w-7 h-7 text-orange-500 animate-bounce" />
// //       </div>
      
// //       {/* Hero Content */}
// //       <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
// //         <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          
// //           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight text-gray-900">
// //             <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white px-10 py-4 rounded-2xl inline-block mb-4 transform hover:scale-105 transition-all duration-500 shadow-2xl animate-pulse">
// //              Welcome to the Launch Event 
// //             </div>
// //             <br />
             
// //             <br />
// //             <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white px-10 py-4 rounded-2xl inline-block mb-4 transform hover:scale-105 transition-all duration-500 shadow-2xl animate-pulse animation-delay-200">
// //              of
// //             </div>
// //             <br />
// //             <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-12 py-5 rounded-2xl inline-block mt-4 transform hover:scale-105 transition-all duration-500 shadow-3xl animate-pulse animation-delay-400">Homies4u</span>
// //             <br />
           
// //           </h1>
          
// //           <div className="flex justify-center items-center mt-8 space-x-4">
// //             <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-pulse"></div>
// //             <Sparkles className="w-6 h-6 text-orange-500 animate-spin" />
// //             <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full animate-pulse"></div>
// //           </div>
          
// //           <p className="text-xl text-gray-700 mb-6 font-medium mt-6 animate-fade-in-up animation-delay-600">
            
// //           </p>
// //         </div>
// //       </div>
      
// //       <style jsx>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-20px); }
// //         }
// //         @keyframes float-delayed {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-15px); }
// //         }
// //         @keyframes fade-in-up {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         .animate-float {
// //           animation: float 3s ease-in-out infinite;
// //         }
// //         .animate-float-delayed {
// //           animation: float-delayed 4s ease-in-out infinite;
// //         }
// //         .animate-fade-in-up {
// //           animation: fade-in-up 1s ease-out forwards;
// //         }
// //         .animation-delay-200 {
// //           animation-delay: 0.2s;
// //         }
// //         .animation-delay-400 {
// //           animation-delay: 0.4s;
// //         }
// //         .animation-delay-600 {
// //           animation-delay: 0.6s;
// //         }
// //         .shadow-3xl {
// //           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default HeroSection;



















// import React, { useEffect, useState } from 'react';
// import { Sparkles, Star, Zap, Rocket, Trophy, Users } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
//         <div className="absolute top-40 right-20 w-8 h-8 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
//         <div className="absolute bottom-40 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-80"></div>
//         <div className="absolute top-60 right-40 w-10 h-10 bg-green-400 rounded-full animate-spin opacity-50"></div>
//         <div className="absolute bottom-60 right-20 w-5 h-5 bg-orange-400 rounded-full animate-bounce opacity-70"></div>
//         <div className="absolute top-32 left-1/3 w-7 h-7 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
//       </div>
      
//       {/* Floating Icons */}
//       <div className="absolute top-16 left-16 animate-float">
//         <Rocket className="w-12 h-12 text-yellow-400 animate-bounce" />
//       </div>
//       <div className="absolute top-20 right-16 animate-float-delayed">
//         <Trophy className="w-10 h-10 text-gold-500 animate-spin" />
//       </div>
//       <div className="absolute bottom-32 left-32 animate-float">
//         <Users className="w-9 h-9 text-cyan-400 animate-pulse" />
//       </div>
//       <div className="absolute top-1/2 right-20 animate-float-delayed">
//         <Star className="w-8 h-8 text-pink-400 animate-ping" />
//       </div>
      
//       {/* Hero Content */}
//       <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//         <div className={`transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
//           {/* Launch Badge */}
//           <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full mb-8 animate-bounce">
//             <Sparkles className="w-5 h-5 mr-2 animate-spin" />
//             <span className="font-bold text-sm tracking-wider uppercase">🚀 Launch Event 2024</span>
//             <Sparkles className="w-5 h-5 ml-2 animate-spin" />
//           </div>
          
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
//             <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent inline-block mb-6 transform hover:scale-110 transition-all duration-700 animate-pulse">
//              Welcome to the Future
//             </div>
//             <br />
//             <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-6 transform hover:scale-110 transition-all duration-700 animate-pulse animation-delay-300">
//              of
//             </div>
//             <br />
//             <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent inline-block transform hover:scale-110 transition-all duration-700 animate-pulse animation-delay-600">Homies4u</span>
//           </h1>
          
//           {/* Decorative Elements */}
//           <div className="flex justify-center items-center mt-8 space-x-6">
//             <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full animate-pulse"></div>
//             <div className="relative">
//               <Zap className="w-8 h-8 text-yellow-400 animate-bounce" />
//               <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
//             </div>
//             <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse"></div>
//           </div>
          
//           {/* Call to Action */}
//           <div className="mt-12">
//             <p className="text-2xl text-white font-semibold mb-8 animate-fade-in-up animation-delay-1000">
//               🎉 Join the Revolution • Connect • Celebrate • Create 🎉
//             </p>
            
//             <div className="flex justify-center space-x-4">
//               <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full font-bold animate-bounce animation-delay-1200 shadow-2xl">
//                 ✨ Be Part of History
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-25px) rotate(180deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(-180deg); }
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 5s ease-in-out infinite;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 1.5s ease-out forwards;
//         }
//         .animation-delay-300 {
//           animation-delay: 0.3s;
//         }
//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//         .animation-delay-1200 {
//           animation-delay: 1.2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;










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
          
          {/* Launch Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full mb-12 animate-bounce shadow-xl">
            <Sparkles className="w-6 h-6 mr-3 animate-spin" />
            <span className="font-bold text-lg tracking-wider uppercase">🚀 Launch Event 2024</span>
            <Sparkles className="w-6 h-6 ml-3 animate-spin" />
          </div>
          
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
            
            <div className="flex justify-center space-x-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-full font-bold text-xl animate-bounce animation-delay-1200 shadow-2xl hover:shadow-3xl transition-all duration-300">
                ✨ Be Part of History
              </div>
            </div>
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
