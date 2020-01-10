// 물품 정보

const _products = [
  {"id" : 1, "title" : "i Pad", "price" : 200, "stock" : 2},
  {"id" : 2, "title" : "T-shirt", "price" : 10, "stock" : 10},
  {"id" : 3, "title" : "Sucker CD", "price" : 7, "stock" : 5}
];

// 물품에 관련된 메소드
export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },
  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
      ? cb()
      : errorCb()
    });
  }
}
