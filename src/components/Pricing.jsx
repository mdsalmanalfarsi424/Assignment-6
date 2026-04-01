import React, { useState } from 'react'
import { toast } from 'react-toastify';
import check from '../assets/products/check-icon.png'

function Pricing() {
  const [activePlan, setActivePlan] = useState('Pro');

  const plans = [
    {
      name: 'Starter',
      price: '0',
      desc: 'Perfect for individuals getting started.',
      features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
      btnText: 'Get Started Free'
    },
    {
      name: 'Pro',
      price: '29',
      desc: 'Best for professional creators.',
      features: ['Access to all premium tools', 'Unlimited templates', 'Priority 24/7 support', 'Unlimited projects', 'Advanced analytics'],
      btnText: 'Start Pro Trial',
      popular: true 
    },
    {
      name: 'Enterprise',
      price: '99',
      desc: 'For large teams and businesses.',
      features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated account manager'],
      btnText: 'Contact Sales'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 text-center bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 leading-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-12 md:mb-16 max-w-xl mx-auto text-sm md:text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              onClick={() => setActivePlan(plan.name)} 
              className={`cursor-pointer p-8 md:p-10 rounded-4xl md:rounded-[2.5rem] transition-all duration-500 relative border-2 flex flex-col ${
                activePlan === plan.name 
                ? 'bg-[#7C3AED] text-white border-[#7C3AED] md:scale-105 shadow-2xl z-10' 
                : 'bg-white text-slate-800 border-gray-100 hover:border-purple-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <h4 className="font-bold text-xl mb-2">{plan.name}</h4>
              <p className={`mb-6 text-xs md:text-sm ${activePlan === plan.name ? 'opacity-80' : 'text-gray-400'}`}>
                {plan.desc}
              </p>
              
              <div className="text-4xl font-black mb-8">
                ${plan.price}<span className={`text-sm font-normal ${activePlan === plan.name ? 'opacity-60' : 'text-gray-400'}`}>/Month</span>
              </div>

              <ul className="space-y-4 mb-10 text-sm font-medium text-left grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`w-5 h-5 shrink-0 ${activePlan === plan.name ? 'brightness-0 invert' : ''}`}>
                      <img src={check} alt="check icon" className="w-full h-full object-contain" />
                    </span> 
                    <span className={activePlan === plan.name ? 'text-white' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={(e) => {
                  e.stopPropagation(); 
                  toast.info(`${plan.name} plan coming soon!`);
                }}
                className={`w-full py-4 rounded-full font-black text-sm md:text-base transition-all border-none shadow-lg active:scale-95 ${
                  activePlan === plan.name 
                  ? 'bg-white text-[#7C3AED] hover:bg-gray-100' 
                  : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90'
                }`}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing