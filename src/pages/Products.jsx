import React from 'react';
import ProductCard from '../components/ProductCard'; // 引入商品卡片组件
import products from '../data/products'; // 引入商品数据

function Products({ addToCart }) {
  return (
    // 页面容器：container（居中）
    <div className="container my-4">  {/* container my-4：容器 + 上下外边距（margin-y: 4）。 */}
      <h2 className="mb-4">嘉兴特色商品</h2> {/* 标题 + 间距 */}
      {/* Bootstrap网格：row（行） + col-md-4（每行3个，md屏幕及以上） */}
      <div className="row">
        {products.map(product => ( // 遍历商品数据，生成多个ProductCard
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            {/* col-md-4 col-sm-6：大屏幕（md）时每行3个（12/4=3），小屏幕（sm）时每行2个（12/6=2），更小屏幕自动1个。 */}
            {/* key={product.id}：React列表渲染必须的key，用唯一ID（比如商品id）保证性能。 */}
            {/* map()：遍历products数组，为每个商品生成一个ProductCard，并传递product对象。 */}
            <ProductCard
             product={product}
             onAddToCart={() => addToCart(product)} /> {/* 传递点击事件 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;