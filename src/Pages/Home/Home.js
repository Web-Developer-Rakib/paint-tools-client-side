import React from "react";
import Banner from "../../Components/Banner/Banner";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductsCard></ProductsCard>
      <ReviewCard></ReviewCard>
    </div>
  );
};

export default Home;
