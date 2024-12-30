import React from 'react';
//import me from "../../assests/me.jpg"
import me from "../../assests/main.png"

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl p-6 max-w-md mx-auto lg:mx-0">
      <img 
        src={me}
        alt="Profile" 
        className="w-full h-64 rounded-2xl mb-4 object-cover"
      />
      <h2 className="text-4xl font-bold mb-2">Divyanshu Shekhar</h2>
      <p className="text-gray-600 uppercase mb-6">Web Dev || Backend Dev || Mobile Dev ||</p>
      <p className="text-gray-700">
        Sophomore @ IIIT BBSR. I ❤️ Building ... whether it's mobile, web, backend architectures. I love to learn a lot. Currently diving into the world of ML. If you got a great idea, lets build it together 🚀
      </p>
      <div className="absolute -bottom-4 right-4 w-8 h-8 bg-[#ff4d4d] rounded-full" />
      <div className="absolute top-8 -right-4 w-8 h-8 bg-[#c8ff00] rounded-full" />
      <div className="absolute top-1/2 -left-4 w-8 h-8 border-4 border-dashed border-[#ff4d4d] rounded-full" />
    </div>
  );
}