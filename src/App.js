// App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Products from "./pages/Products";
import Cart from './pages/Cart';

function App() { 
  const [cart, setCart] = useState([]); // 购物车状态

  const addToCart = (product) => { // 加购函数
    setCart([...cart, product]);
    console.log("商品已加入购物车:", product.name); // 调试用
  };

  return (
    <Router>
      {/* Header 放在 Routes 外面 → 全局显示 */}
      <Header cartCount={cart.length} />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 首页显示 Products 页面 */}
          <Route path="/" element={<Products addToCart={addToCart} />} />

          {/* 商品页（其实和首页一样，但路由不同） */}
          <Route path="products" element={<Products addToCart={addToCart} />} />

          {/* 购物车页 */}
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;