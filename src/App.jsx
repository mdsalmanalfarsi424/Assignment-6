import './App.css'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import shopping from './assets/products/shopping-cart.png' 
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Rating from './components/Rating'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [view, setView] = useState('products')
  useEffect(function() {
    fetch('/products.json') 
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, [])

  function handleAddToCart(product) {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
      
      toast.success(
        <div className="flex items-center gap-3">
          <span className="font-bold">{product.name} added!</span>
          <img src={shopping} alt="cart" className="w-5 h-5 object-contain" />
          
        </div>,
        { position: "top-right", autoClose: 2000, icon: false }
      );
    }
  }

  function handleRemove(id) {
    setCart(cart.filter(item => item.id !== id))
    toast.error("Removed from cart")
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div className="font-manrope min-h-screen bg-white text-slate-900">
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar cartCount={cart.length} setView={setView} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Banner />
      </div>

      <Rating />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <main className="py-24 text-left"> 
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4">Premium Digital Tools</h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>

            <div className="inline-flex bg-gray-50 p-1.5 rounded-full border border-gray-200 mb-16 shadow-sm">
              <button 
                onClick={() => setView('products')}
                className={`px-12 py-3 rounded-full font-black text-sm transition-all ${view === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg' : 'text-gray-500 hover:text-slate-800'}`}
              >Products</button>
              <button 
                onClick={() => setView('cart')}
                className={`px-12 py-3 rounded-full font-black text-sm transition-all ${view === 'cart' ? 'bg-[#7C3AED] text-white shadow-lg' : 'text-gray-500 hover:text-slate-800'}`}
              >Cart ({cart.length})</button>
            </div>
          </div>

          {view === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  handleAddToCart={handleAddToCart}
                  isInCart={!!cart.find(item => item.id === p.id)}
                />
              ))}
            </div>
          ) : (
            <Cart cart={cart} handleRemove={handleRemove} totalPrice={totalPrice} />
          )}
        </main>

        
        
      </div>

        <Steps />
        <Pricing />
      <Footer />
    </div>
  )
}

export default App