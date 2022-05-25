import React from "react";
import BannerImg from "../../Images/paint-tools-banner.webp";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold uppercase">
            Welcome to Paint tools
          </h1>
          <p class="mb-5">
            If you are looking for a wall painting tools wholesaler, This is the
            best place for make a deal. We are manufacturing painting tools. So,
            We can provide the best value.
          </p>
          <a href="#about-us" class="btn btn-primary">
            More about us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
