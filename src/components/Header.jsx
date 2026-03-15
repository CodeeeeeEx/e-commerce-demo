// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link 
          className="navbar-brand fw-bold" 
          to="/" 
          onClick={closeMenu}
          style={{ color: '#0F766E', fontSize: '1.5rem' }}
        >
          🌿 嘉兴电商
        </Link>

        {/* 汉堡按钮 */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="切换导航"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 菜单 - 用 React 状态控制显示 */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <Link 
                className="nav-link" 
                to="/" 
                onClick={closeMenu}
                style={{ fontWeight: '500', color: '#4B5563' }}
              >
                首页
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link 
                className="nav-link" 
                to="/products" 
                onClick={closeMenu}
                style={{ fontWeight: '500', color: '#4B5563' }}
              >
                商品
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link 
                className="nav-link position-relative" 
                to="/cart" 
                onClick={closeMenu}
                style={{ fontWeight: '500', color: '#4B5563' }}
              >
                购物车
                {cartCount > 0 && (
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill" 
                    style={{ backgroundColor: '#F59E0B', color: '#fff', fontSize: '0.75rem' }}
                  >
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