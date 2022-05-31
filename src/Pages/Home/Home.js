import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import BusinessSummary from "../../Components/BusinessSummary/BusinessSummary";
import Faq from "../../Components/Faq/Faq";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import useGetAllReviews from "../../Hooks/useGetAllReviews";

const Home = () => {
  const { products } = useGetAllProducts();
  const productSlice = products.slice(0, 3);
  const { reviews } = useGetAllReviews();
  const reviewSlice = reviews.slice(0, 3);
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-10">
        <Banner></Banner>
      </div>
      <section className="ml-5 mr-5 mb-10">
        <h3 className="text-2xl text-center my-5 uppercase font-bold">
          Products
        </h3>
        <div className="flex justify-evenly flex-wrap">
          {productSlice.map((product) => (
            <ProductsCard product={product}></ProductsCard>
          ))}
        </div>
        <div className="flex justify-center my-3">
          <button
            onClick={() => navigate("all-products")}
            className="btn bg-indigo-700"
          >
            See more products
          </button>
        </div>
      </section>
      <section className="ml-5 mr-5 mb-10">
        <h3 className="text-2xl text-center my-5  font-bold uppercase">
          Reviews
        </h3>
        <div className="flex justify-evenly flex-wrap">
          {reviewSlice.map((review) => (
            <ReviewCard review={review}></ReviewCard>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("all-reviews")}
            className="btn bg-indigo-700"
          >
            See more reviews
          </button>
        </div>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl text-center my-5 uppercase font-bold">
          Business summary
        </h3>
        <BusinessSummary></BusinessSummary>
      </section>
      <section className="mb-10" id="about-us">
        <h3 className="text-2xl text-center my-5 uppercase font-bold">
          About us
        </h3>
        <AboutUs></AboutUs>
      </section>
      <section className="ml-5 mr-5 mb-10">
        <h3 className="text-2xl text-center my-5 uppercase font-bold">Faq</h3>
        <Faq></Faq>
      </section>
    </div>
  );
};

export default Home;
