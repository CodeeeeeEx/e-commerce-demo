// src/pages/Cart.jsx
import React from 'react';

function Cart({ cart, removeFromCart }) {
  // 计算总价
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div className="container">
      <h2 className="mb-4">我的购物车</h2>
      
      {cart.length === 0 ? (
        <div className="alert alert-info">
          <p className="mb-0">购物车是空的，快去添加商品吧！</p>
        </div>
      ) : (
        <div>
          {/* 购物车列表 */}
          {cart.map((item, index) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title mb-1">{item.name}</h5>
                  <p className="card-text text-muted mb-0">{item.desc}</p>
                  <p className="card-text fw-bold text-primary mb-0">¥{item.price}</p>
                </div>
                <button 
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  移除
                </button>
              </div>
            </div>
          ))}
          
          {/* 结算区域 */}
          <div className="mt-4 p-4 bg-light rounded border">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">商品总计</h4>
              <h4 className="mb-0 text-primary">¥{total}</h4>
            </div>
            <button className="btn btn-success btn-lg w-100">
              去结算 ({cart.length} 件商品)
            </button>
            <p className="text-muted small mt-2 mb-0">
              💡 提示：购物车数据已保存到本地，刷新页面不会丢失
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;