import React from "react";
import { useNavigate } from "react-router-dom";
import aboutUsImg from "../../Images/about-us-img.jpg";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={aboutUsImg} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">More about Paint tools</h1>
          <p class="py-6">
            Founded in 2022, Paint tools Corporation is one of the key painting
            tool manufacturers in the world. The company offers a wide line-up
            of painting equipment including cordless tool system, first brush ,
            Roller,Tray,Paint Tray Liner and other wall painting tools. Paint
            tools has also been engaged in offering wall painting tools based on
            the usage in different purposes including interior design ,
            metalworking, woodworking, and polishing. The company has a strong
            geographic presence across the advanced economies of the asian
            region, eventually, resulting in owing a significant share in the
            wall painting Tools Market in the Bangladesh.
          </p>
          <button
            onClick={() => navigate("/all-products")}
            class="btn btn-primary"
          >
            Check our tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
