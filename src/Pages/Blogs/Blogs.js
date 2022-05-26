import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="mx-10 my-10">
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5 shadow-lg"
        >
          <div class="collapse-title text-xl font-medium">
            How will you improve the performance of a React Application?
          </div>
          <div class="collapse-content">
            <p>
              <p className="font-bold">
                Few things we can do for improve the performance of a React
                Application:
              </p>
              <ul>
                <li>1. Use memo and pure component</li>
                <li>2. Try to avoid anonymous functions</li>
                <li>3. Try to avoid object literals</li>
                <li>4. Use React.lazy and React.Suspense</li>
                <li>2. Try to avoid frequent Mounting/Unmounting</li>
              </ul>
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5 shadow-lg"
        >
          <div class="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div class="collapse-content">
            <p>
              Basically we use <b>useState</b> hook to manage state in react.
              But, <b>useReducer</b> is another option that can be used for
              either local or global state. It is similar in many ways to{" "}
              <b>useState</b> under the hood, although instead of just an
              initial state it accepts a reducer.
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5 shadow-lg"
        >
          <div class="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div class="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5 shadow-lg"
        >
          <div class="collapse-title text-xl font-medium">
            Why you do not set the state directly in React? For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts.
          </div>
          <div class="collapse-content">
            <p>
              <b>useState</b> hook need a default value. So, If the data type is
              an array, Then we need to set an empty array inside the{" "}
              <b>useState</b> hook as a default value.
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5 shadow-lg"
        >
          <div class="collapse-title text-xl font-medium">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </div>
          <div class="collapse-content">
            <p>
              We have to apply <b>find</b> method.
            </p>{" "}
            The code should like below: <br />
            const searchValue= searchText; <i>From search input state value</i>
            <br />
            <code> products.find(product= product.name===searchText)</code>{" "}
            <i>disclaimer: Arrow did used due to fragment issue.</i>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5 shadow-lg"
        >
          <div class="collapse-title text-xl font-medium">
            What is a unit test? Why should write unit tests?
          </div>
          <div class="collapse-content">
            <p>
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. <br />
              Unit tests make code reuse easier. If we want to reuse existing
              code in a new project, we can simply migrate both the code and
              tests to our new project, then run our tests to make sure we have
              the desired results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
