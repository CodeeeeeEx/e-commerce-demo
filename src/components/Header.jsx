import React from 'react';
import { Link } from 'react-router-dom'; // 导入Link组件，路由切换功能
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ cartCount }) {
  return (
    // Bootstrap的导航栏组件：navbar + navbar-expand-lg（大屏幕展开）
    <nav className="navbar navbar-expand-lg navbar-dark bg-black"> {/* navbar navbar-expand-lg：Bootstrap的导航栏，大屏幕（lg）时横向展开，小屏幕折叠；navbar-dark bg-black：黑色背景 + 白色文字 */}
       {/* 导航栏内容容器 */}
       <div className="container"> {/* container：限制内容宽度，居中显示 */}
        {/* Logo区域：品牌名 */}
        <Link className="navbar-brand" to="/"> {/* 修改：href="#" → to="/" */}
          电商Demo
        </Link>

        {/* 右侧菜单：首页、商品、购物车 */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto：右对齐 */}
           <li className="nav-item">
            <Link className="nav-link" to="/">首页</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/products">商品</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/cart">
             购物车
             {cartCount > 0 &&  ( //如果有商品才显示数字
              <span className="badge bg-danger ms-1">{cartCount}</span>
              // badge bg-danger：Bootstrap 红色徽章; ms-1：左边距1单位（让数字和文字有间距）
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