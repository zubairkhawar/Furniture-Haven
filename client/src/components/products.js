const products = [
    {
      id: 1,
      name: 'Olive Green Sofa Chair',
      href: '#',
      price: 'Rs 48000',
      imageSrc: 'F.jpg',
      imageAlt: 'Olive drab green sofa chair',
    },
    {
      id: 2,
      name: 'Wooden Chair',
      href: '#',
      price: 'Rs 35000',
      imageSrc: 'Chair.jpg',
      imageAlt: 'Wooden Chair',
    },
    {
      id: 3,
      name: 'Brown Leather Two Seater',
      href: '#',
      price: 'Rs 89000',
      imageSrc: 'two-seater.jpeg',
      imageAlt: 'Two Seater Sofa',
    },
    {
      id: 4,
      name: 'Blue Sof Chair',
      href: '#',
      price: 'Rs 35000',
      imageSrc: 'blue.avif',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Yellow Sofa Chair',
        href: '#',
        price: 'Rs 48000',
        imageSrc: 'yellow.avif',
        imageAlt: 'Yellow Sofa Chair',
      },
      {
        id: 6,
        name: 'Pink Sofa Chair',
        href: '#',
        price: 'Rs 45000',
        imageSrc: 'pink.jpeg',
        imageAlt: 'Pink Sofa Chair',
      },
      {
        id: 7,
        name: 'Wooden Sideboard Table',
        href: '#',
        price: 'Rs 29000',
        imageSrc: 'table.avif',
        imageAlt: 'Wooden Sideboard Table with books',
      },
      {
        id: 8,
        name: 'Camel Side Table',
        href: '#',
        price: 'Rs 12000',
        imageSrc: 'product-8.png',
        imageAlt: 'Camel sidetable',
      },
      {
        id: 9,
        name: 'Olive Green Three Seater Sofa',
        href: '#',
        price: 'Rs 48000',
        imageSrc: 'olive-green.avif',
        imageAlt: 'Olive Green Three Seater Sofa',
      },
      {
        id: 10,
        name: 'Cream Armchair',
        href: '#',
        price: 'Rs 35000',
        imageSrc: 'cream.webp',
        imageAlt: 'Wooden Chair',
      },
      {
        id: 11,
        name: 'Brown Leather Two Seater',
        href: '#',
        price: 'Rs 89000',
        imageSrc: 'two-seater.jpeg',
        imageAlt: 'Two Seater Sofa',
      },
      {
        id: 12,
        name: 'Blue Sof Chair',
        href: '#',
        price: 'Rs 35000',
        imageSrc: 'blue.avif',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
          id: 13,
          name: 'Yellow Sofa Chair',
          href: '#',
          price: 'Rs 48000',
          imageSrc: 'yellow.avif',
          imageAlt: 'Yellow Sofa Chair',
        },
        {
          id: 14,
          name: 'Arm Chair Pillow',
          href: '#',
          price: 'Rs 45000',
          imageSrc: 'armchair.avif',
          imageAlt: 'Arm Chair pillow',
        },
        {
          id: 15,
          name: 'Wooden Sideboard Table',
          href: '#',
          price: 'Rs 29000',
          imageSrc: 'table.avif',
          imageAlt: 'Wooden Sideboard Table with books',
        },
        {
          id: 16,
          name: 'Camel Side Table',
          href: '#',
          price: 'Rs 12000',
          imageSrc: 'product-8.png',
          imageAlt: 'Camel sidetable',
        },
    
    
  ]
  
 const Products = () => {
    return (
      <div className="bg-stone-100 pt-20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="font-normal text-xl text-center pb-8 md:text-3xl">All Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      
    )
  }
  export default Products