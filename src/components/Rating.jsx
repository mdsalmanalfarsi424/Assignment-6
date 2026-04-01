import React from 'react'

function Rating() {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-12 md:gap-0">
        
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">50K+</h2>
          <p className="text-white/80 text-lg font-medium">Active Users</p>
        </div>
        <div className="text-center md:border-x border-white/20 px-0 md:px-20 lg:px-40">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">200+</h2>
          <p className="text-white/80 text-lg font-medium">Premium Tools</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">4.9</h2>
          <p className="text-white/80 text-lg font-medium">Average Rating</p>
        </div>

      </div>
    </div>
  )
}

export default Rating