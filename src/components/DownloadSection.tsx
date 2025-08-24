// import React, { useEffect, useRef, useState } from 'react';
// import { Smartphone, Apple, Play } from 'lucide-react';

// const DownloadSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-12 bg-white relative overflow-hidden">
//       {/* Curved Background */}
//       <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-400 to-orange-300 rounded-b-[50px]"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="text-center mb-8">
//             <div className="flex items-center justify-center mb-4">
//               <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
//                 <Smartphone className="w-8 h-8 text-white" />
//               </div>
//             </div>
            
//             <div className="bg-orange-400 text-black px-6 py-2 rounded-lg inline-block mb-4">
//               <h2 className="text-2xl md:text-3xl font-bold">DOWNLOAD HOMIES4U</h2>
//             </div>
            
//             <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
//               Join thousands of college students already connecting on Homies4U. 
//               Download now and be part of the celebration!
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
//             {/* Android Download Button */}
//             <a
//               href="#"
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
//             >
//               <Play className="w-6 h-6" />
//               <div className="text-left">
//                 <div className="text-xs opacity-90">Download for</div>
//                 <div className="text-lg font-bold">Android</div>
//               </div>
//             </a>

//             {/* iOS Download Button */}
//             <a
//               href="#"
//               className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
//             >
//               <Apple className="w-6 h-6" />
//               <div className="text-left">
//                 <div className="text-xs opacity-90">Download for</div>
//                 <div className="text-lg font-bold">iOS</div>
//               </div>
//             </a>
//           </div>

//           <div className="text-center">
//             <div className="inline-block bg-gray-100 rounded-full px-4 py-2 border border-gray-200 mb-6">
//               <span className="text-gray-700 font-medium text-sm">Free download • No subscription required</span>
//             </div>

//             <div className="bg-black text-white rounded-xl p-6 max-w-md mx-auto">
//               <h3 className="text-xl font-bold mb-2">Ready to join?</h3>
//               <p className="text-gray-300 text-sm">Download the app, create your profile, and see you at the grand opening!</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DownloadSection;












import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Apple, Play } from 'lucide-react';

const DownloadSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white relative overflow-hidden">
      {/* Curved Background */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-400 to-orange-300 rounded-b-[50px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="bg-orange-400 text-black px-6 py-2 rounded-lg inline-block mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">DOWNLOAD HOMIES4U</h2>
            </div>
            
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of college students already connecting on Homies4U. 
              Download now and be part of the celebration!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
            {/* Android Download Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.homiesUserapp&pcampaignid=web_share&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Play className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Download for</div>
                <div className="text-lg font-bold">Android</div>
              </div>
            </a>

            {/* iOS Download Button */}
            <a
              href="https://apps.apple.com/in/app/homies4u/id6748207857"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">Download for</div>
                <div className="text-lg font-bold">iOS</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gray-100 rounded-full px-4 py-2 border border-gray-200 mb-6">
              <span className="text-gray-700 font-medium text-sm">Free download • No subscription required</span>
            </div>

            <div className="bg-black text-white rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Ready to join?</h3>
              <p className="text-gray-300 text-sm">Download the app, create your profile, and see you at the grand opening!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
