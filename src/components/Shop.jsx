import React from "react";
import ProductCard from "../layouts/ProductCard";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Shop = () => {
  const data = [
    {
      id: 0,
      img: "/src/assets/img/products1.jpg",
      name: "Nike Air",
      price: "200.00",
      discount: "20% off",
    },
    {
      id: 1,
      img: "/src/assets/img/products2.jpg",
      name: "Royal Collection",
      price: "208.00",
      discount: "40% off",
    },
    {
      id: 2,
      img: "/src/assets/img/products3.jpg",
      name: "Sportswear Futura",
      price: "299.00",
      discount: "40% off",
    },
    {
      id: 3,
      img: "/src/assets/img/products4.jpg",
      name: "CozyCraze Hoodies",
      price: "159.00",
      discount: "23% off",
    },
    {
      id: 4,
      img: "/src/assets/img/products5.jpg",
      name: "t-shirts combo pack",
      price: "299.00",
      discount: "40% off",
    },
    {
      id: 5,
      img: "/src/assets/img/products6.jpg",
      name: "Man Jacket",
      price: "199..00",
      discount: "20% off",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      <div className="font-semibold text-4xl text-center text-ExtraDarkColor">
        <h1>Best sellers</h1>
      </div>

      <div className="mt-8">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
