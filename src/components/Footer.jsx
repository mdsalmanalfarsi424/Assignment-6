import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8 mb-16 border-b border-slate-800 pb-16">
          
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white">
              DigiTools
            </h2>
            <p className="text-white opacity-80 text-sm md:text-base max-w-xs leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold text-lg mb-6 text-white">Product</h5>
            <ul className="text-white space-y-4 text-sm font-medium">
              <li className="hover:opacity-70 cursor-pointer transition-all">Features</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Pricing</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Templates</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Integrations</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold text-lg mb-6 text-white">Company</h5>
            <ul className="text-white space-y-4 text-sm font-medium">
              <li className="hover:opacity-70 cursor-pointer transition-all">About</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Blog</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Careers</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Press</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
             <h5 className="font-bold text-lg mb-6 text-white">Resources</h5>
             <ul className="text-white space-y-4 text-sm font-medium">
              <li className="hover:opacity-70 cursor-pointer transition-all">Documentation</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Help Center</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Community</li>
              <li className="hover:opacity-70 cursor-pointer transition-all">Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6 text-white">Social Links</h5>
            <div className="flex gap-4 justify-center md:justify-start ">
              <div className="border border-white/30 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#0F172A] transition-all shadow-lg text-xl">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="border border-white/30 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#0F172A] transition-all shadow-lg text-xl">
                <i className="fa-brands fa-facebook-f"></i>
              </div>

              <div className="border border-white/30 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#0F172A] transition-all shadow-lg text-lg">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
          </div>
          </div>
          

        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs md:text-sm text-white opacity-60 font-medium order-2 md:order-1">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-xs md:text-sm text-white opacity-60 font-medium order-1 md:order-2">
            <span className="hover:opacity-100 cursor-pointer transition-all whitespace-nowrap underline underline-offset-4 decoration-white/20">Privacy Policy</span>
            <span className="hover:opacity-100 cursor-pointer transition-all whitespace-nowrap underline underline-offset-4 decoration-white/20">Terms of Service</span>
            <span className="hover:opacity-100 cursor-pointer transition-all whitespace-nowrap underline underline-offset-4 decoration-white/20">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer