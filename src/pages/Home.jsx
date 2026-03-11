// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // 创建这个CSS文件

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // 页面加载后触发动画
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="home-container">
      {/* 1. 全屏背景图（用你已有的商品图） */}
      <div className="background-image"></div>
      
      {/* 2. 黑色遮罩层（半透明） */}
      <div className="overlay"></div>
      
      {/* 3. 内容区域（居中显示） */}
      <div className={`content ${isVisible ? 'visible' : ''}`}>
        <h1 className="display-3 fw-bold mb-4 text-white">
          欢迎来到嘉兴电商
        </h1>
        
        <p className="lead mb-5 text-light opacity-75">
          江南好物，触手可及
        </p>
        
        {/* 探索按钮 */}
        <Link to="/products" className="btn btn-primary btn-lg px-5 py-3">
          探索商品 →
        </Link>
        
        {/* 可选的商品预览（小图） */}
        <div className="preview-images mt-5">
          <div className="preview-item">
            <img src="/shirt.jpg" alt="丝绸衬衫" />
            <span>丝绸</span>
          </div>
          <div className="preview-item">
            <img src="/bookmark.jpg" alt="乌镇书签" />
            <span>文创</span>
          </div>
          <div className="preview-item">
            <img src="/zongzi.jpg" alt="嘉兴粽子" />
            <span>美食</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;