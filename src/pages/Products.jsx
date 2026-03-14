import React from 'react';
import ProductCard from '../components/ProductCard'; // 引入商品卡片组件
import products from '../data/products'; // 引入商品数据

function Products({ addToCart }) { {/* 接收店长的指令 (Props) ，这里的 { addToCart } 就是店长（App.js） 递给货架区的一张“对讲机”。*/}
// 货架区自己不能记账（因为它没有账本），所以当顾客要买东西时，货架区必须拿起这个对讲机，喊一声：“店长！有人买了这个！”
// 这就是“父传子”：爸爸把功能函数传给儿子用。
  return (
    // 页面容器：container（居中）
    <div className="container my-4">  {/* container my-4：容器 + 上下外边距（margin-y: 4）。 */}
      <h2 className="mb-4">嘉兴特色商品</h2> {/* 标题 + 间距 */}
      {/* Bootstrap网格：row（行） + col-md-4（每行3个，md屏幕及以上） */}
      <div className="row">
        {products.map(product => ( // 遍历商品数据，生成多个ProductCard
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            {/* col-md-4 col-sm-6：大屏幕（md）时每行3个（12/4=3），小屏幕（sm）时每行2个（12/6=2），更小屏幕自动1个。 */}
            {/* key={product.id}：React列表渲染必须的key，用唯一ID（比如商品id）保证性能，同时也是 React 的硬性规定。就像每个商品必须有一个唯一的条形码。为什么？ 假如你把“粽子”的价格改了，或者把“丝绸”删了。React 需要知道具体改的是哪一个格子。如果没有 key，React 可能会搞混，把价格标错位置。 */}
            {/* map()：遍历products数组，为每个商品生成一个ProductCard，并传递product对象。 */}
            
            {/*通俗理解：
            想象你有一条自动化流水线。
            products 是那一堆还没上架的原材料（数据数组）。
            .map() 就是机器手，它会把原材料一个一个拿出来（每次拿出一个 product）。
            每拿出来一个，它就执行一次后面的代码（生成一个 HTML 结构），最后把所有生成的东西拼成一个大长条，放到页面上。
            结果：如果你有 10 个商品数据，页面上就会自动生成 10 个商品格子。如果你以后在数据里加了第 11 个商品，页面上自动就会出现第 11 个格子，不用你手动写 HTML！这就是 React 的魅力。*/}
            <ProductCard
             product={product}
            //  把当前这个商品的具体信息（图片、名字、价格）塞进盒子里，让卡片知道要显示什么。
             onAddToCart={() => addToCart(product)} /> {/* 传递点击事件 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;