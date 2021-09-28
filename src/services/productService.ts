
import { sleepNoPromise } from '../function';
import IProduct from '../types/product';

class ProductService {
  productMoreExpensive(products: IProduct[]) {
    if(products.length === 0) {
      return null;
    }
    sleepNoPromise(500);

    return products.reduce((acc, product) => Number(acc.price) > Number(product.price) ? acc : product);
  }
}


export { ProductService };
export default new ProductService();