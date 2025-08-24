import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="text-3xl font-bold">
              <span className="text-orange-500">H</span>
              <span className="text-black">OMIES4U</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;