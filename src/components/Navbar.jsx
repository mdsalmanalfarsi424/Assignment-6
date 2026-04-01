import React, { useState } from 'react'

function Navbar({ cartCount, setView }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 md:py-6 px-4 md:px-10 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div 
        className="text-2xl md:text-3xl font-black cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent transition-transform active:scale-95" 
        onClick={() => { setView('products'); setIsMenuOpen(false); }}
      >
        DigiTools
      </div>
      
      <div className="hidden lg:flex gap-1 items-center">
        {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((link) => (
          <a key={link} href="#" className="nav-item-style group relative overflow-hidden px-4 py-2">
            <span className="relative z-10 font-semibold">{link}</span>
            <div className="shine-effect" />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        

        <div className="relative cursor-pointer group" onClick={() => { setView('cart'); setIsMenuOpen(false); }}>
          <i className="fa-solid fa-cart-shopping text-xl text-slate-700 group-hover:text-[#4F39F6] transition-colors duration-300"></i>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#4F39F6] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold animate-bounce shadow-sm">
              {cartCount}
            </span>
          )}
        </div>

        <button className="hidden md:block text-slate-700 font-bold hover:text-[#4F39F6] transition-all duration-300 active:scale-95">
          Login
        </button>

        <button className="hidden sm:block main-btn-style group active:scale-95 px-5 py-2 md:px-7 md:py-3 text-sm md:text-base relative overflow-hidden">
          <span className="relative z-10 font-bold">Get Started</span>
          <div className="shine-effect group-hover:animate-shine" />
        </button>

        <button 
          className="lg:hidden text-2xl text-slate-800 hover:text-[#4F39F6] transition-all duration-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col items-center p-8 gap-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
          {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-lg font-bold text-gray-800 hover:text-[#4F39F6] transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          
          <button className="text-lg font-bold text-gray-800 hover:text-[#4F39F6]">
            Login
          </button>
          
          <button className="main-btn-style px-8 py-2.5 mt-2 relative overflow-hidden active:scale-95 text-sm font-bold shadow-md">
              <span className="relative z-10">Get Started</span>
              <div className="shine-effect group-hover:animate-shine" />
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar