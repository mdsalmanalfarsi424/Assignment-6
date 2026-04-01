import React from 'react'
import img1 from '../assets/products/AI-Writing-Pro.png'
import img2 from '../assets/products/Design-Templates-Pack.png'
import img3 from '../assets/products/Premium-Stock-Assets.png'
import img4 from '../assets/products/Automation-Toolkit.png'
import img5 from '../assets/products/Resume-Builder-Pro.png'
import img6 from '../assets/products/Social-Media-Content-Kit.png'
import check from '../assets/products/check-icon.png'

function ProductCard({ product, handleAddToCart, isInCart }) {
  
  const getProductImage = (id) => {
    const images = { 1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6 }
    return images[id] || img1
  }

  return (
    <div className="bg-white border border-gray-100 rounded-4xl md:rounded-[2.5rem] p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group font-manrope h-full">
      
      {product.tag && (
        <span className={`absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-sm ${
          product.tag === 'Best Seller' 
            ? 'bg-[#FEF3C6] text-[#BB4D00]' 
            : product.tag === 'Popular' 
            ? 'bg-[#E1E7FF] text-[#642ec2]' 
            : 'bg-[#DBFCE7] text-[#0A883E]'
        }`}>
          {product.tag}
        </span>
      )}

      <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6 md:mb-8 ">
        <img 
          src={getProductImage(product.id)} 
          alt={product.name} 
          className="w-6 h-6 md:w-8 md:h-8 object-contain" 
        />
      </div>

      <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-2 md:mb-3">{product.name}</h3>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 h-12 overflow-hidden">
        {product.description}
      </p>

      <div className="flex items-baseline gap-1 mb-6 md:mb-8">
        <span className="text-2xl md:text-3xl font-black text-slate-900">${product.price}</span>
        <span className="text-xs md:text-sm font-medium text-gray-400">/{product.period}</span>
      </div>

      <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 grow">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-600">
            <span className="w-4 h-4 md:w-5 md:h-5 shrink-0">
              <img src={check} alt="check" className="w-full h-full" />
            </span> 
            {feature}
          </li>
        ))}
      </ul>

      
      <button 
        onClick={() => handleAddToCart(product)}
        disabled={isInCart}
        className={`w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all active:scale-95 shadow-lg ${
          isInCart 
          ? 'bg-green-500 text-white cursor-not-allowed' 
          : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:shadow-purple-200'
        }`}
      >
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    </div>
  )
}

export default ProductCard