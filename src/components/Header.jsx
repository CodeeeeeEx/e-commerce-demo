import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    // Bootstrap的导航栏组件：navbar + navbar-expand-lg（大屏幕展开）
    <nav className="navbar navbar-expand-lg navbar-dark bg-black"> {/* navbar navbar-expand-lg：Bootstrap的导航栏，大屏幕（lg）时横向展开，小屏幕折叠；navbar-dark bg-black：黑色背景 + 白色文字 */}
       {/* 导航栏内容容器 */}
       <div className="container"> {/* container：限制内容宽度，居中显示 */}
        {/* Logo区域：品牌名 */}
        <a className="navbar-brand" href="#">
          电商Demo
        </a>

        {/* 右侧菜单：首页、商品、购物车 */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto：右对齐 */}
           <li className="nav-item">
            <a className="nav-link" href="#">首页</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">商品</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">购物车</a>
           </li>
          </ul>
        </div>
       </div>
    </nav>
  );
}

export default Header;