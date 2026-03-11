// ProductCard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入Bootstrap样式

function ProductCard({ product, onAddToCart }) { 
  return (
    // Bootstrap的卡片组件：card + shadow（阴影）
    <div className="card shadow-sm mb-4">
      {/* 卡片图片区域 */}
      <img 
        src={product.image} 
        className="card-img-top" 
        // card-img-top：卡片顶部的图片，用objectFit: cover让图片填满区域且不变形。
        alt={product.name} 
        // {product.name}：从父组件传过来的product对象中取name属性，其他同理。
        style={{ height: '365px', objectFit: 'cover' }} // 固定高度，图片自适应
      />
      
      {/* 卡片内容区域 */}
      <div className="card-body">
        {/*  card-body：卡片内容区域，包含标题、描述、价格、按钮。 */}
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted">{product.desc}</p>       
        <p className="card-text fw-bold">¥{product.price}</p>
        
        {/* 购买按钮：Bootstrap的btn + btn-primary（蓝色） 
            btn btn-primary：Bootstrap的蓝色按钮，点击后有反馈。 */}
        <button 
          className="btn btn-primary"
          onClick={() => onAddToCart(product)} 
        >
          加入购物车
        </button>
      </div>
    </div>
  );
}

export default ProductCard;