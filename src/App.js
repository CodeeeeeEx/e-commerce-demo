// App.js
import { useState, useEffect } from "react";  // ✅ 添加 useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Products from "./pages/Products";
import Cart from './pages/Cart';

function App() { 
  // 初始化购物车 - 从 LocalStorage 读取
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('ecommerce-cart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (error) {
      console.error("读取购物车数据失败:", error);
    }
    return []; // 默认空数组
  });

  // 每次购物车变化时，自动保存到 LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('ecommerce-cart', JSON.stringify(cart));
    } catch (error) {
      console.error('保存购物车数据失败:', error);
    }
  }, [cart]);

  // 添加商品到购物车
  const addToCart = (product) => { 
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        alert(`${product.name}已在购物车中`);
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  // 从购物车移除商品
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <main className="container py-4">
        <Routes>
          {/* 首页和商品页都显示商品列表 */}
          <Route path="/" element={<Products addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          
          {/* 购物车页面 */}
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;