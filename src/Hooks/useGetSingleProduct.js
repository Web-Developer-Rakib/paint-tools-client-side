import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useGetSingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return { product };
};

export default useGetSingleProduct;
