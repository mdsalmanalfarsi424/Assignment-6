import React from 'react'
import user from '../assets/user.png'
import box from '../assets/product.png'
import rocket from '../assets/rocket.png'

function Steps() {
  const steps = [
    { 
      id: '01', 
      title: 'Create Account', 
      icon: user, 
      desc: 'Sign up for free in seconds. No credit card required.' 
    },
    { 
      id: '02', 
      title: 'Choose Products', 
      icon: box, 
      desc: 'Browse our catalog and select tools that fit your needs.' 
    },
    { 
      id: '03', 
      title: 'Start Creating', 
      icon: rocket, 
      desc: 'Download and start using your premium tools immediately.' 
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-center px-6 md:px-12 lg:px-24 xl:px-36">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 leading-tight">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-12 md:mb-16 text-sm md:text-base">
          Start using premium digital tools in minutes.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {steps.map(step => (
            <div 
              key={step.id} 
              className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl md:rounded-4xl relative shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              
              <span className="absolute top-6 right-6 bg-[#7C3AED] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                {step.id}
              </span>
              
              <div className="mb-8 bg-purple-50 w-20 h-20 flex items-center justify-center mx-auto rounded-full overflow-hidden p-4 group-hover:bg-purple-100 transition-colors">
                <img 
                  src={step.icon} 
                  alt={step.title} 
                  className="w-full h-full object-contain" 
                />
              </div>

              <h3 className="text-xl md:text-2xl font-black mb-4 text-slate-800">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps