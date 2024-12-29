import { Facebook, Youtube, Twitter } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white rounded-lg p-2 flex items-center">
            <span className="text-2xl font-bold">OK</span>
            <div className="ml-2">
              <div className="text-sm leading-none">OSKAR</div>
              <div className="text-sm leading-none">KADERA</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#works" className="text-white hover:text-gray-200">WORKS</a>
          <a href="#about" className="text-white hover:text-gray-200">ABOUT</a>
          <a href="#awards" className="text-white hover:text-gray-200">AWARDS</a>
        </div>
        

      </div>
    </nav>
  );
}