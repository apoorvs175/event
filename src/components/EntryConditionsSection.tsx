import React, { useEffect, useRef, useState } from 'react';
import { Download, User, CreditCard, CheckCircle } from 'lucide-react';

const EntryConditionsSection: React.FC = () => {
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

  const conditions = [
    {
      icon: Download,
      title: 'Download Homies4U App',
      description: 'Get the app from store'
    },
    {
      icon: User,
      title: 'Show Profile Account',
      description: 'Create and display profile'
    },
    {
      icon: CreditCard,
      title: 'Valid College ID Card',
      description: 'From any college'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <div className="bg-orange-400 text-black px-6 py-2 rounded-lg inline-block mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">ENTRY REQUIREMENTS</h2>
            </div>
            <p className="text-gray-600">Simple steps to join the event</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                  <condition.icon className="w-8 h-8 text-orange-600" />
                  <div className="absolute -top-1 -right-1">
                    <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{condition.title}</h3>
                <p className="text-gray-600 text-sm">{condition.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 border border-green-200">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-700 font-medium text-sm">All requirements are simple and free!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryConditionsSection;