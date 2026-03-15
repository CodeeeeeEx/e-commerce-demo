// 数据库
const products = [
  {
    id: 1,
    name: '嘉兴丝绸衬衫',
    price: 199,
    image:  process.env.PUBLIC_URL + '/images/shirt.jpg', // 嘉兴丝绸特色
    desc: '100%桑蚕丝，透气亲肤'
  },
  {
    id: 2,
    name: '乌镇文创书签',
    price: 29,
    image: process.env.PUBLIC_URL + '/images/bookmark.jpg', // 乌镇特色
    desc: '木质雕刻，江南水乡风格'
  },
  {
    id: 3,
    name: '嘉兴粽子礼盒',
    price: 59,
    image: process.env.PUBLIC_URL + '/images/zongzi.jpg', // 嘉兴粽子
    desc: '真空包装，传统口味'
  }
];

export default products;