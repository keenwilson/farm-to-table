// Define the Product type
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Export the products array with the Product type
export const products: Product[] = [
  {
    id: 1,
    name: "Farm Fresh Eggs - Dozen",
    price: 6.99,
    description: "Fresh, organic eggs from free-range chickens",
    image: "./images/dozen-eggs.jpg",
  },
  {
    id: 2,
    name: "Large Farm Fresh Eggs - 18 Pack",
    price: 9.99,
    description: "Extra large, organic eggs from free-range chickens",
    image: "./images/18-pack-eggs.jpg",
  },
  {
    id: 3,
    name: "Premium Duck Eggs - Half Dozen",
    price: 8.99,
    description: "Fresh duck eggs, perfect for baking",
    image: "./images/duck-eggs.jpg",
  },
];
