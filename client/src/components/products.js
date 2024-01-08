import { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import axios from 'axios';


const products = [
    {
      id: 1,
      name: 'Olive Green Sofa Chair',
      href: '#',
      priceOriginal: 'Rs 60000',
      price: '48000',
      imageSrc: 'F.jpg',
      imageAlt: 'Olive drab green sofa chair',
    },
    {
      id: 2,
      name: 'Wooden Chair',
      href: '#',
      priceOriginal: 'Rs 50000',
      price: '35000',
      imageSrc: 'Chair.jpg',
      imageAlt: 'Wooden Chair',
    },
    {
      id: 3,
      name: 'Brown Leather Two Seater',
      href: '#',
      priceOriginal: 'Rs 99000',
      price: '89000',
      imageSrc: 'two-seater.jpeg',
      imageAlt: 'Two Seater Sofa',
    },
    {
      id: 4,
      name: 'Blue Sofa Chair',
      href: '#',
      priceOriginal: 'Rs 50000',
      price: '35000',
      imageSrc: 'blue.avif',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Yellow Sofa Chair',
        href: '#',
        priceOriginal: 'Rs 60000',
        price: '48000',
        imageSrc: 'yellow.avif',
        imageAlt: 'Yellow Sofa Chair',
      },
      {
        id: 6,
        name: 'Pink Sofa Chair',
        href: '#',
        priceOriginal: 'Rs 58000',
        price: '45000',
        imageSrc: 'pink.jpeg',
        imageAlt: 'Pink Sofa Chair',
      },
      {
        id: 7,
        name: 'Wooden Sideboard Table',
        href: '#',
        priceOriginal: 'Rs 50000',
        price: '29000',
        imageSrc: 'table.avif',
        imageAlt: 'Wooden Sideboard Table with books',
      },
      {
        id: 8,
        name: 'Camel Side Table',
        href: '#',
        priceOriginal: 'Rs 30000',
        price: '12000',
        imageSrc: 'product-8.png',
        imageAlt: 'Camel sidetable',
      },
      {
        id: 9,
        name: 'Olive Green Three Seater Sofa',
        href: '#',
        priceOriginal: 'Rs 60000',
        price: '48000',
        imageSrc: 'olive-green.avif',
        imageAlt: 'Olive Green Three Seater Sofa',
      },
      {
        id: 10,
        name: 'Cream Armchair',
        href: '#',
        priceOriginal: 'Rs 50000',
        price: '35000',
        imageSrc: 'cream.webp',
        imageAlt: 'Wooden Chair',
      },
      {
        id: 11,
        name: 'Brown Leather Two Seater',
        href: '#',
        priceOriginal: 'Rs 99000',
        price: '89000',
        imageSrc: 'two-seater.jpeg',
        imageAlt: 'Two Seater Sofa',
      },
      {
        id: 12,
        name: 'Blue Sof Chair',
        href: '#',
        priceOriginal: 'Rs 50000',
        price: '35000',
        imageSrc: 'blue.avif',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
          id: 13,
          name: 'Yellow Sofa Chair',
          href: '#',
          priceOriginal: 'Rs 70000',
          price: '48000',
          imageSrc: 'yellow.avif',
          imageAlt: 'Yellow Sofa Chair',
        },
        {
          id: 14,
          name: 'Arm Chair Pillow',
          href: '#',
          priceOriginal: 'Rs 55000',
          price: '45000',
          imageSrc: 'armchair.avif',
          imageAlt: 'Arm Chair pillow',
        },
        {
          id: 15,
          name: 'Wooden Sideboard Table',
          href: '#',
          priceOriginal: 'Rs 50000',
          price: '29000',
          imageSrc: 'table.avif',
          imageAlt: 'Wooden Sideboard Table with books',
        },
        {
          id: 16,
          name: 'Camel Side Table',
          href: '#',
          priceOriginal: 'Rs 20000',
          price: '12000',
          imageSrc: 'product-8.png',
          imageAlt: 'Camel sidetable',
        },
    
    
  ]
  
  const Products = () => {

    
    const { addToCart } = useCart();
  
    const handleAddToCart = (product) => {
      addToCart(product);
    };
  
    return (
      <div className="bg-stone-100 pt-20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="font-normal text-xl text-center pb-8 md:text-3xl">All Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src={product.imageSrc} alt={product.imageAlt} />
                  <div className="absolute h-full w-full object-cover object-center group-hover:opacity-100 flex items-center justify-center -bottom-10 group-hover:bottom-0 transition-all duration-300 bg-black/20 opacity-0">
                    <button className="bg-teal-700 rounded-lg text-white py-2 px-5 hover:bg-teal-900 transition-all duration-300" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                </div>
                <h3 className="mt-3 text-xl text-gray-700">{product.name}</h3>
                <del className="text-red-700 text-md">{product.priceOriginal} </del>
                <p className="mt-2 text-lg font-medium text-gray-900 inline-block">{`Rs ${product.price}`}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Products;