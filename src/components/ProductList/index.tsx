import React, { useCallback, useEffect, useMemo, useState } from 'react';
import productService from '../../services/productService';
import IProduct from '../../types/product';

import Product from './Product/index';
import { ContainerList } from './styles';
function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const inclementTotalItems = useCallback(() => setTotalItems(totalItems => totalItems + 1), []);
  const productMoreExpensive = useMemo(() => productService.productMoreExpensive(products), [products]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) => {
      res.json().then((response) => {
        setProducts(response);
      });
    });
  }, []);

  return (
    <>
      <h1>{totalItems}</h1>

      <ContainerList>
        {products.map((product) => (
          <Product inclementTotal={inclementTotalItems} key={product.id} product={product} mostExpensive={product.id === productMoreExpensive?.id} />
        ))}
      </ContainerList>
    </>
  );
};

export default ProductList;
