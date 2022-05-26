import React from "react";
import Linkedin from "../../Images/linkedin.png";
import Rakib from "../../Images/rakib.jpeg";

const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={Rakib} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Rakibul Hasan</h1>
            <h1 class="text-2xl font-bold">Fullstack developer</h1>
            <div className="my-5">
              <h3>
                <span className="font-bold">Email:</span> rakibodesk7@gmail.com
              </h3>
              <p class="py-6">
                Once upon a time I was a project manager in a Canadian software
                development company. That environment made my mindset to be an
                web developer. I left my previous job to be an web developer.
                Finally my perpouse is going to be success. I have no strong
                educational background. It's only 12 till now. But, I have
                curiosity to do something new. And I love to take risk as well.
              </p>
              <p className="font-bold">My tech stacks are:</p>
              <p>
                HTML, CSS, Javascript, Bootstrap, Tailwind css, React.js,
                Node.js, MongoDB, Express.js, Firebase.
              </p>
            </div>
            <h3 className="text-center mb-5 rounded-sm text-2xl font-bold uppercase">
              recent projects
            </h3>
            <div className="flex justify-around flex-wrap rounded-sm">
              <a
                href="https://fragrance-wms.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button class="btn btn-primary">Fragrance WMS</button>
              </a>
              <a
                href="https://robert-carlson-seo.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button class="btn btn-primary">Robert Carlson</button>
              </a>
              <a
                href="https://canon-eos-700d-review-developed-by-rakib.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button class="btn btn-primary">Canon EOS 700D Review</button>
              </a>
            </div>
            <div
              className="flex justify-center rounded mt-5 tooltip"
              data-tip="My linked in profile."
            >
              <a
                href="https://www.linkedin.com/in/rakibul-hasan-65425a1b9/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Linkedin} alt="" width={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
