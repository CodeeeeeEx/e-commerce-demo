// Home.jsx
import React from 'react';
import Header from '../components/Header'; // 引入导航栏
import Footer from '../components/Footer'; // 引入页脚
import Products from '../pages/Products'; // 引入商品列表页

function Home() {
  return (
    <>
      <Header /> {/* 顶部导航栏 */}
      <main className="container my-4">
        <Products /> {/* 商品列表 */}
      </main>
      {/* <Footer /> 暂时注释，先搭框架，明天再做页脚 */}
    </>
  );
}

export default Home;