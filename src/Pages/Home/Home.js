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
      <section className="ml-5 mr-5">
        <h3 className="text-2xl text-center my-5">Products</h3>
        <div className="flex justify-evenly flex-wrap">
          <ProductsCard></ProductsCard>
          <ProductsCard></ProductsCard>
          <ProductsCard></ProductsCard>
        </div>
      </section>
      <section className="ml-5 mr-5">
        <h3 className="text-2xl text-center my-5">Reviews</h3>
        <div className="flex justify-evenly flex-wrap">
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </div>
      </section>
      <section className="mb-5">
        <h3 className="text-2xl text-center my-5">Business summary</h3>
        <BusinessSummary></BusinessSummary>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
