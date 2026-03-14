// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header({ cartCount }) {
  return (
    // 修改点：navbar-light bg-white (白底黑字) + shadow-sm (轻微阴影)
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo：使用主色字体，加粗 */}
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#0F766E', fontSize: '1.5rem' }}>
          🌿 嘉兴电商
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/" style={{ fontWeight: '500', color: '#4B5563' }}>首页</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/products" style={{ fontWeight: '500', color: '#4B5563' }}>商品</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link position-relative" to="/cart" style={{ fontWeight: '500', color: '#4B5563' }}>
                购物车
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" 
                        style={{ backgroundColor: '#F59E0B', color: '#fff', fontSize: '0.75rem' }}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;