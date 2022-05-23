import React from "react";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import useGetProducts from "../../Hooks/useGetProducts";

const AllProducts = () => {
  const { products } = useGetProducts();
  return (
    <div>
      <h2 className=" text-3xl my-5 ml-8">All products</h2>
      <div className="my-5 ml-8 mr-8 grid grid-cols-1 lg:grid-cols-3 place-items-center">
        {products.map((product) => (
          <ProductsCard product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
