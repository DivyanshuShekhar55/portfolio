import React from 'react';

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl p-6 max-w-md mx-auto lg:mx-0">
      <img 
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500" 
        alt="Profile" 
        className="w-full h-64 object-cover rounded-2xl mb-4"
      />
      <h2 className="text-4xl font-bold mb-2">MARK SMITH</h2>
      <p className="text-gray-600 uppercase mb-6">FOUNDER & MENTOR</p>
      <p className="text-gray-700">
        MARK SMITH IS AN EXPERIENCED COACH WHO HAS TRAVELED THOUSANDS OF MILES
      </p>
      <div className="absolute -bottom-4 right-4 w-8 h-8 bg-[#ff4d4d] rounded-full" />
      <div className="absolute top-8 -right-4 w-8 h-8 bg-[#c8ff00] rounded-full" />
      <div className="absolute top-1/2 -left-4 w-8 h-8 border-4 border-dashed border-[#ff4d4d] rounded-full" />
    </div>
  );
}