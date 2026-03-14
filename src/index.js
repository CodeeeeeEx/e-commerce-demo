import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  // 导入Bootstrap样式
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  // 渲染到页面

// 作用：项目启动入口，并引入Bootstrap样式库