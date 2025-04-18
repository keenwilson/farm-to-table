import { products, Product } from '@/app/utils/data';
import ProductCard from './ProductCard';

interface ProductListProps {
  addToCart: (product: Product) => void;
}

export default function ProductList({ addToCart }: ProductListProps) {
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
