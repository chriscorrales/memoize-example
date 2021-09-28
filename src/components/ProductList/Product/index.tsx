import React, { memo } from 'react';
import IProduct from '../../../types/product';
import {
  Button,
  Category,
  ProductContainer,
  Image,
  Information,
  Price,
  Title,
  Container,
} from './styles';

interface IProps {
  product: IProduct;
  inclementTotal?: () => void;
  mostExpensive?: boolean;
}

function Product({ product, inclementTotal, mostExpensive }: IProps) {
  const { title, price, category, image } = product;

  return (
    <Container>
      <ProductContainer>
        <Image src={image} />
        <Information>
          <Title>{title}</Title>
          <Category>{category}</Category>
          <Price>$ {price}</Price>
          {mostExpensive && <Price>Mais caro</Price>}
        </Information>
      </ProductContainer>
      {inclementTotal && <Button onClick={inclementTotal}>Adicionar produto</Button>}
    </Container>
  );
}

export default memo(Product);
