"use client";
import React, { useState } from "react";
import Image from "next/image";
import Cart from "./Cart";
import ProductList from "./ProductList";
import { Product } from '@/app/utils/data';
import { CartItem } from './Cart';

export default function CartProvider() {  // Remove children prop
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Country Fresh Eggs</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#products" className="hover:underline">Products</a>
            </li>
            <li>
              <Cart items={cartItems} />
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <Image
          src="/farm-logo.png"
          alt="Country Fresh Eggs logo"
          width={360}
          height={76}
          priority
        />
        <h2 className="text-xl mb-4">Our Farm-Fresh Products</h2>
        <ProductList addToCart={addToCart} /> {/* Pass addToCart prop here */}
      </main>
    </div>
  );
}
