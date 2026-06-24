'use client';

import {
  Carousel,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselSlider,
  CarouselViewport,
} from '@fluentui/react-components';
import type { ProductModel } from '@tc/db';

type ProductListProps = {
  products: ProductModel[];
};

const ProductCard = ({ product }: { product: ProductModel }) => {
  return (
    
  );
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Carousel>
      <CarouselNavContainer>
        <CarouselNav>
          {index => <CarouselNavButton aria-label={`Carousel Nav Button ${index}`} />}
        </CarouselNav>
      </CarouselNavContainer>
      <CarouselViewport>
        <CarouselSlider>
          {products.map(product => (}
        </CarouselSlider>
      </CarouselViewport>
    </Carousel>
  );
};

export default ProductList;
