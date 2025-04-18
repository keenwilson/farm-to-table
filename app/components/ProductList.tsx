import Image from "next/image";
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Farm Fresh Eggs - Dozen",
    price: 6.99,
    image: "/eggs-dozen.png",
    description: "",
  },
  {
    id: 2,
    name: "Large Farm Fresh Eggs - 18 Pack",
    price: 9.99,
    image: "/eggs-18pack.jpg",
    description: "",
  },
  {
    id: 3,
    name: "Premium Duck Eggs - Half Dozen",
    price: 8.99,
    image: "/duck-eggs.jpg",
    description: "",
  },
];

export default function ProductList({ addToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}
