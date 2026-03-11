// src/pages/Cart.jsx
import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <div className="container">
      <h2>我的购物车</h2>
      {cart.length === 0 ? (
        <p className="text-muted">购物车是空的，快去添加商品吧！</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">¥{item.price}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 p-3 bg-light rounded">
            <h4>总计：¥{total}</h4>
            <button className="btn btn-success btn-lg mt-2">去结算</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;