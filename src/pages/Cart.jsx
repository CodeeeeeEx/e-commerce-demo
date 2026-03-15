// src/pages/Cart.jsx
import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity }) {
  // 计算总价（考虑数量）
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  
  // 计算总件数
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="container">
      <h2 className="mb-4">🛒 我的购物车</h2>
      
      {cart.length === 0 ? (
        <div className="alert alert-info text-center py-4">
          <i className="bi bi-cart-x display-4 d-block mb-3"></i>
          <h4>购物车是空的</h4>
          <p className="mb-0">快去添加你喜欢的商品吧！</p>
        </div>
      ) : (
        <div>
          {/* 购物车列表 */}
          {cart.map(item => {
            const quantity = item.quantity || 1;
            const subtotal = item.price * quantity;
            
            return (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    {/* 商品图片 */}
                    <div className="col-md-2 col-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ height: '80px', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                    
                    {/* 商品信息 */}
                    <div className="col-md-4 col-8">
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <p className="card-text text-muted small mb-1">{item.desc}</p>
                      <p className="card-text fw-bold text-primary mb-0">¥{item.price}</p>
                    </div>
                    
                    {/* 数量调整 */}
                    <div className="col-md-3 col-8 mt-2 mt-md-0">
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          style={{ width: '36px', height: '36px' }}
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        
                        <span className="mx-3 fw-bold" style={{ minWidth: '40px', textAlign: 'center' }}>
                          {quantity}
                        </span>
                        
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          style={{ width: '36px', height: '36px' }}
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* 小计和删除 */}
                    <div className="col-md-3 col-4 text-end mt-2 mt-md-0">
                      <p className="fw-bold mb-2 text-primary">¥{subtotal}</p>
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="bi bi-trash"></i> 移除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* 结算区域 */}
          <div className="mt-4 p-4 bg-light rounded border shadow-sm">
            <div className="row align-items-center mb-3">
              <div className="col-md-6">
                <h4 className="mb-1">商品总计</h4>
                <p className="text-muted small mb-0">
                  <i className="bi bi-box-seam me-1"></i>
                  共 {totalItems} 件商品
                </p>
              </div>
              <div className="col-md-6 text-end">
                <h4 className="mb-0 text-primary">¥{totalPrice}</h4>
                <p className="text-muted small mb-0">（已含税）</p>
              </div>
            </div>
            
            <div className="d-grid gap-2">
              <button 
                className="btn btn-success btn-lg py-3"
                onClick={() => alert(`🎉 模拟下单成功！\n\n订单信息：\n- 商品数量：${totalItems} 件\n- 订单总额：¥${totalPrice}\n- 收货地址：嘉兴市（演示项目）\n\n（此为演示项目，无真实支付流程）`)}
              >
                <i className="bi bi-credit-card me-2"></i>
                模拟结算 (¥{totalPrice})
              </button>
              
              {/* 清空购物车按钮 */}
              {cart.length > 0 && (
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    if (window.confirm('确定要清空购物车吗？')) {
                      // 清空购物车
                      localStorage.removeItem('ecommerce-cart');
                      window.location.reload(); // 刷新页面重新初始化
                    }
                  }}
                >
                  <i className="bi bi-trash me-1"></i>
                  清空购物车
                </button>
              )}
            </div>
            
            <div className="alert alert-info mt-3 mb-0">
              <i className="bi bi-info-circle me-2"></i>
              购物车数据已自动保存，刷新页面不会丢失
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;