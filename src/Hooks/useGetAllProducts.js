import { useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://painttools.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return { products, setProducts };
};

export default useGetAllProducts;
