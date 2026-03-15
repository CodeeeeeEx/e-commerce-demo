// Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* 英雄区 */}
      <section className="hero-section">
        <h1>欢迎来到嘉兴电商</h1>
        <p>精选江南好物，品味嘉兴文化</p>
        <Link to="/products" className="btn-shop">
          点击进入 →
        </Link>
      </section>

      {/* 热门推荐区 */}
      <section className="featured-section">
        <h2>🔥 热门推荐</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <span class="emoji">🍚</span>
            <h3>嘉兴粽子</h3>
            <p>传统工艺，软糯香甜</p>
          </div>
          <div className="featured-item">
            <span class="emoji">🧵</span>
            <h3>南湖丝绸</h3>
            <p>轻盈柔滑，质感非凡</p>
          </div>
          <div className="featured-item">
            <span class="emoji">🍵</span>
            <h3>乌镇白茶</h3>
            <p>清香淡雅，回味悠长</p>
          </div>
        </div>
      </section>

      {/* 优势说明区 */}
      <section className="benefits-section">
        <div className="benefit-card">
          <h3>✅ 正品保障</h3>
          <p>所有商品均来自本地认证商家</p>
        </div>
        <div className="benefit-card">
          <h3>🚚 快速配送</h3>
          <p>江浙沪次日达，全国包邮</p>
        </div>
        <div className="benefit-card">
          <h3>💬 贴心客服</h3>
          <p>7x24小时在线，随时为您解答</p>
        </div>
      </section>
    </div>
  );
}

export default Home;