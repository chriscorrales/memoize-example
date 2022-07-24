export default interface IProduct {
  id: number;
  title: string;
  price: number;
  category: enCategory;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

enum enCategory {
  ELECTRONICS = 0,
  JEWELERY = 1,
  MEN_CLOTHING = 2,
  WOMEN_CLOTHING = 3,
}