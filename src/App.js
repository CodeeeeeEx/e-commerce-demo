// App.js
import { useState, useEffect } from "react";  // React 最核心的两个 Hooks（钩子）。
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Products from "./pages/Products";
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() { 
  // ✅ 核心1：购物车状态管理。读取
  const [cart, setCart] = useState(() => { // 去保险柜找找有没有叫 'ecommerce-cart' 的本子
    try {
      const savedCart = localStorage.getItem('ecommerce-cart');
      if (savedCart) {
        return JSON.parse(savedCart); // JSON转对象
      }
    } catch (error) {
      console.error("读取购物车数据失败:", error);
    }
    return []; // 默认空数组，如果保险柜是空的，或者坏了，那就拿个新本子，从空数组 [] 开始记
  });

  // ✅ 核心2：数据持久化。保存
  useEffect(() => {
    try {
      localStorage.setItem('ecommerce-cart', JSON.stringify(cart)); // 把现在的账本内容，写成字符串，塞进保险柜
    } catch (error) {
      console.error('保存购物车数据失败:', error);
    }
  }, [cart]); // 👈 重点在这里！ 这是一个“自动备份机器人”，它的指令很简单：“只要 cart (账本) 的内容发生了变化，就立刻把最新的内容抄一份存到保险柜里”

  // ✅ 核心3：添加商品
  const addToCart = (product) => { 
    setCart(prevCart => { // prevCart 就是“上一秒的账本”
      const exists = prevCart.find(item => item.id === product.id); // 先翻翻账本，看这东西是不是已经有了
      if (exists) {
        alert(`${product.name}已在购物车中`); // 有了就弹窗提醒
        return prevCart; // 既然有了，账本就不用改，原样返回
      }

      // 如果没有，就在旧账本后面“追加”这一条，生成一个新账本
      return [...prevCart, product];
      //注意：React 规定，不能直接涂改旧账本（比如不能用 push），必须抄一本新的。因为 React 只有看到“本子换了”（内存地址变了），它才知道该更新界面。
    });
  };

  // ✅ 核心4：删除商品
  const removeFromCart = (id) => {
    // 1.拿到要删除的商品 ID，2.拿起旧账本，用筛子（filter）过一遍，3.规则：凡是 ID 不等于 这个要删除 ID 的，都留下来；等于的，就扔掉。4.剩下的组成一个新账本，交上去
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <Router>
    {/* ✅ 核心5：路由配置 */}
    {/* 1. 给门口的大招牌 (Header) 挂个牌子，显示现在购物车里有几个东西 */}
      <Header cartCount={cart.length} />
      <main className="container py-4">
        <Routes>
          {/* 首页路由连接 */}
          <Route path="/" element={<Home />} />
          
          {/* 首页和商品页都显示商品列表 */}
          {/* 2. 货架区 (Products) */}
          {/* 告诉货架：如果有人买东西，就调用店长的 "addToCart" 函数 */}
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          
          {/* 购物车页面 */}
           {/* 3. 收银台区 (Cart) */}
           {/* 告诉收银台：这是现在的完整账本 (cart)，如果有人要退货，就调用店长的 "removeFromCart" 函数 */}
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