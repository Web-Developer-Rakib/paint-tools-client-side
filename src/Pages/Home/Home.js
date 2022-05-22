import React from "react";
import Banner from "../../Components/Banner/Banner";
import BusinessSummary from "../../Components/BusinessSummary/BusinessSummary";
import Footer from "../../Components/Footer/Footer";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductsCard></ProductsCard>
      <ReviewCard></ReviewCard>
      <BusinessSummary></BusinessSummary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
