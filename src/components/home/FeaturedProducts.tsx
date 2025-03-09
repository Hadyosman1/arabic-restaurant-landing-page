"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { ArrowLeft, ArrowRight, StarIcon } from "lucide-react";

import productPic1 from "@/../public/product-1.png";
import productPic2 from "@/../public/product-2.png";
import productPic3 from "@/../public/product-3.png";

const products = {
  ساشيميس: [
    {
      id: 2,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic2,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 1,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic1,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 3,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic3,
      rate: 4.9,
      pax: "1:3",
    },
  ],
  "طبق العائلة": [
    {
      id: 1,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic1,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 2,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic2,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 3,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic3,
      rate: 4.9,
      pax: "1:3",
    },
  ],
  نيجيري: [
    {
      id: 1,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic1,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 2,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic2,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 3,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic3,
      rate: 4.9,
      pax: "1:3",
    },
  ],
  "استخدم فقط": [
    {
      id: 2,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic2,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 3,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic3,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 1,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic1,
      rate: 4.9,
      pax: "1:3",
    },
  ],
  "لفائف السوشي": [
    {
      id: 1,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic1,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 3,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic3,
      rate: 4.9,
      pax: "1:3",
    },
    {
      id: 2,
      name: "ساموراي الخاص",
      price: 100,
      image: productPic2,
      rate: 4.9,
      pax: "1:3",
    },
  ],
};

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof products>("ساشيميس");

  const productContainerRef = useRef<HTMLDivElement>(null);

  const handleNextProduct = () => {
    productContainerRef.current?.scrollBy({
      left: -185,
      behavior: "smooth",
    });
  };

  const handlePreviousProduct = () => {
    productContainerRef.current?.scrollBy({
      left: 185,
      behavior: "smooth",
    });
  };

  return (
    <section id="featured-products">
      <div className="container space-y-14 py-14">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="max-w-[500px] text-3xl font-bold md:text-6xl">
            أشياء رائعة فريدة من نوعها
          </h2>
          <div className="flex items-center gap-3 max-sm:hidden">
            <button
              onClick={handlePreviousProduct}
              className={clsx(
                "rounded-full bg-muted-secondary p-3 shadow transition-all duration-200 hover:bg-foreground hover:text-white",
              )}
              title="previous"
            >
              <ArrowRight />
            </button>
            <button
              onClick={handleNextProduct}
              className={clsx(
                "rounded-full bg-muted-secondary p-3 shadow transition-all duration-200 hover:bg-foreground hover:text-white",
              )}
              title="next"
            >
              <ArrowLeft />
            </button>
          </div>
        </div>

        <div className="gap-10 overflow-hidden md:grid md:grid-cols-9">
          <div className="flex snap-x snap-mandatory items-center justify-between gap-6 p-4 max-md:overflow-x-auto max-sm:px-5 md:col-span-3 md:flex-col md:items-start lg:col-span-2">
            {Object.keys(products).map((category) => (
              <button
                onClick={() =>
                  setSelectedCategory(category as keyof typeof products)
                }
                className={clsx(
                  "shrink-0 snap-center text-lg font-semibold text-muted-brown transition-all",
                  {
                    "rounded-full bg-primary px-8 py-3 hover:bg-primary/75":
                      selectedCategory === category,
                    "hover:text-primary": selectedCategory !== category,
                  },
                )}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            key={selectedCategory}
            ref={productContainerRef}
            className="flex snap-x snap-mandatory flex-wrap gap-8 overflow-x-hidden py-4 [scrollbar-width:none] max-sm:mt-4 max-sm:justify-center sm:flex-nowrap sm:justify-normal sm:max-md:overflow-x-auto sm:max-md:px-8 md:col-span-6 lg:col-span-7"
          >
            {products[selectedCategory].map((product) => (
              <div
                className="shrink snap-center space-y-5 rounded-2xl bg-muted-secondary p-5 odd:bg-light-green sm:shrink-0 sm:p-8"
                key={`${selectedCategory}-${product.id}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={220}
                  className="mx-auto aspect-[3/2]"
                />

                <p className="line-clamp-1 overflow-clip text-lg font-bold">
                  {product.name}
                </p>

                <p className="inline-block rounded-full bg-background px-8 py-1 font-semibold">
                  {selectedCategory}
                </p>

                <div>
                  <div className="flex pt-3 text-xl font-bold *:grow md:text-2xl">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <StarIcon className="fill-foreground" />
                      <p>{product.rate}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 border-x-2 border-foreground text-center">
                      <span className="text-lg">$$$</span>
                      <p>{product.price}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                      <span className="text-lg">Pax</span>
                      <p>{product.pax}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
