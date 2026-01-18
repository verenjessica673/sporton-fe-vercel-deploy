import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/button";
import priceFormat from "@/app/utils/price";

const productList = [
    {
        name: "SportOn Product1",
        category: "Running",
        price: 119000,
        ImageUrl: "product-1.png",
    },
    {
        name: "SportOn Product2",
        category: "Running",
        price: 250000,
        ImageUrl: "product-2.png",
    },
        {
        name: "SportOn Product3",
        category: "Running",
        price: 230000,
        ImageUrl: "product-3.png",
    },
        {
        name: "SportOn Product4",
        category: "Running",
        price: 485000,
        ImageUrl: "product-4.png",
    },
        {
        name: "SportOn Product5",
        category: "Running",
        price: 550000,
        ImageUrl: "product-5.png",
    },
        {
        name: "SportOn Product6",
        category: "Running",
        price: 650000,
        ImageUrl: "product-6.png",
    },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32 mb-52">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {productList.map((product, index) => (
          <Link
            href={`/product/${product.name}`}
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={'/img/Product/' + product.ImageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
             
              <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24} /></Button>

            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {priceFormat(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;