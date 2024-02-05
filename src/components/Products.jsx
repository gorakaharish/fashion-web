import React from "react";
import ProductCard from "../layouts/ProductCard";

const Products = () => {
  const data = [
    {
      id: 12,
      img: "src/assets/img/products13.jpg",
      name: "Canvas Sneakers",
      price: "298.00",
      discount: "40% off",
    },
    {
      id: 13,
      img: "src/assets/img/products14.jpg",
      name: "Shirt combo pack",
      price: "199.00",
      discount: "40% off",
    },
    {
      id: 14,
      img: "src/assets/img/products15.jpg",
      name: "Hubolt watch",
      price: "198.00",
      discount: "26% off",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <ProductCard
            id={item.id}
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
