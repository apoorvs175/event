import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Clock, Mic, Music, Coffee } from 'lucide-react';

const EventInfoSection: React.FC = () => {
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

  const highlights = [
    {
      icon: Mic,
      title: 'Live Singing',
      description: 'Amazing performances'
    },
    {
      icon: Music,
      title: 'DJ Night',
      description: 'Dance to the beats'
    },
    {
      icon: Coffee,
      title: 'Free Snacks',
      description: 'Complimentary refreshments'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-orange-400 text-black px-6 py-2 rounded-lg inline-block mb-8 mx-auto block text-center">
            <h2 className="text-2xl md:text-3xl font-bold">EVENT DETAILS</h2>
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <MapPin className="w-8 h-8 text-orange-500 mb-3 animate-bounce" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Venue</h3>
              <p className="text-gray-600">College Campus Auditorium</p>
            </div>
             */}


             <a 
  href="https://www.google.com/maps/place/Garden+Vista+Banquet+%26+Lawn/@28.4771426,77.494819,17z/data=!3m1!4b1!4m6!3m5!1s0x390cebd7345ba12f:0x4919d24421fa6645!8m2!3d28.4771426!4d77.494819!16s%2Fg%2F11k8n1lnfw?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block"
>
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
    <MapPin className="w-8 h-8 text-orange-500 mb-3 animate-bounce" />
    <h3 className="text-lg font-bold text-gray-900 mb-2">Venue</h3>
    <p className="text-gray-600">Grand Vista , Knowledge Park-2, Greater Noida</p>
  </div>
</a>

            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Calendar className="w-8 h-8 text-orange-500 mb-3 animate-pulse" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Date</h3>
              <p className="text-gray-600">29 August, 2025</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Clock className="w-8 h-8 text-orange-500 mb-3 animate-spin" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Time</h3>
              <p className="text-gray-600">6:00 PM onwards</p>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-black text-white rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-4 mx-auto animate-spin">
                  <highlight.icon className="w-6 h-6 text-black animate-bounce" />
                </div>
                <h4 className="text-lg font-bold mb-2">{highlight.title}</h4>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
