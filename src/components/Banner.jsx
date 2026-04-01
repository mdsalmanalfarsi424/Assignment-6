import React from 'react'
import heroImg from '../assets/banner.png' 

function Banner() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-10 md:py-16 gap-8 lg:gap-12 font-manrope">
      
      
      <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
        
        
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-3 py-1 rounded-full mb-5 border border-purple-100 mx-auto lg:mx-0">
          <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-wider">New: AI-Powered Tools Available</span>
        </div>

        <h1 className="text-5xl md:text-5xl lg:text-6xl font-black text-[#101727] leading-[1.2] lg:leading-[1.1] mb-5 px-2 lg:px-0">
          Supercharge Your <br /> 
          <span className="text-[#4F39F6]">Digital Workflow</span>
        </h1>
        
        <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 px-4 lg:px-0">
          Access premium AI tools, design assets, templates, and productivity software—all in one place.
        </p>

<div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-8 ">
  
  <button className="main-btn-style   group active:scale-95 w-full sm:w-48 h-12 md:h-14  relative  overflow-hidden flex items-center justify-center ">
    <span className="relative z-10 font-bold text-white text-sm md:text-base">Explore Products</span>
    <div className="shine-effect group-hover:animate-shine" />
  </button>
  
  <button className="group active:scale-95 active:bg-[#7C3AED] w-full sm:w-48 h-12 md:h-14 border-2 border-[#7C3AED] rounded-full transition-all duration-300 relative overflow-hidden hover:bg-[#7C3AED] flex items-center justify-center">
    
    <span className="relative z-10 flex items-center justify-center gap-2 text-[#7C3AED] group-hover:text-white group-active:text-white transition-colors duration-300">
      <svg 
        className="w-5 h-5 fill-none stroke-current" 
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <span className="font-bold text-sm md:text-base">
        Watch Demo
      </span>
    </span>

    <div className="shine-effect group-hover:animate-shine" />
  </button>

</div>
      </div>
      <div className="w-full lg:w-5/12 relative order-1 lg:order-2">
        <div className="relative z-10 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-xl max-w-[90%] mx-auto lg:max-w-full border border-gray-100">
          <img 
            src={heroImg} 
            alt="Hero Banner" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>

    </section>
  )
}

export default Banner