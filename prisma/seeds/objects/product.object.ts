import { Prisma } from '@prisma/client';
import { ProductsTypeEnum } from '@prisma/client';

const products_default = {
  stock: 1,
  categories: [],
};

const products = [
  {
    name: 'Product Stock1 Clothing',
    stock: 1,
    categories: [ProductsTypeEnum.CLOTHING],
  },
];

export { products };
