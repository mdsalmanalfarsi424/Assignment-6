import React from 'react'
import img1 from '../assets/products/AI-Writing-Pro.png'
import img2 from '../assets/products/Design-Templates-Pack.png'
import img3 from '../assets/products/Premium-Stock-Assets.png'
import img4 from '../assets/products/Automation-Toolkit.png'
import img5 from '../assets/products/Resume-Builder-Pro.png'
import img6 from '../assets/products/Social-Media-Content-Kit.png'

function Cart({ cart, handleRemove, handleCheckout, totalPrice }) {
  
  const getProductImage = (id) => {
    const images = {
      1: img1, 2: img2, 3: img3, 
      4: img4, 5: img5, 6: img6
    }
    return images[id] || img1
  }

  return (
    <div className="max-w-4xl mx-auto bg-white md:bg-gray-50 p-5 md:p-10 rounded-3xl md:rounded-[2.5rem] md:border border-gray-200 text-left my-6">
      
      <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 text-slate-800">
        Your Selected Cart ({cart.length})
      </h3>
      
      {cart.length === 0 ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-20 text-gray-400 font-bold text-lg md:text-xl text-center">
         <span>Your cart is empty!</span>
        <i className="fa-solid fa-cart-shopping text-2xl md:text-3xl opacity-30"></i>
        </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 md:p-5 rounded-2xl border border-gray-100 shadow-sm gap-4"
            >
              <div className="flex items-center gap-4 md:gap-5 w-full sm:w-auto">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden shrink-0">
                  <img 
                    src={getProductImage(item.id)} 
                    alt={item.name} 
                    className="w-8 h-8 md:w-12 md:h-12 object-contain"
                  />
                </div>

                <div className="grow">
                  <h4 className="font-bold text-base md:text-lg text-slate-800 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[#7C3AED] font-black text-lg">${item.price}</p>
                </div>
              </div>
              
              <button 
                onClick={() => handleRemove(item.id)} 
                className="w-full sm:w-auto text-rose-500 font-bold hover:bg-rose-50 px-6 py-2.5 rounded-xl transition-all border border-rose-100 sm:border-none text-sm md:text-base"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center pt-8 md:pt-10 px-2 md:px-4 border-t border-gray-200 mt-6">
            <span className="text-lg md:text-xl font-bold text-gray-500">Total:</span>
            <span className="text-3xl md:text-4xl font-black text-slate-900">${totalPrice}</span>
          </div>
          <button 
            onClick={handleCheckout} 
            className="w-full bg-[#7C3AED] text-white py-4 md:py-5 rounded-2xl font-black mt-8 text-base md:text-lg hover:bg-[#6D28D9] transition-all active:scale-95 shadow-lg shadow-purple-100"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart