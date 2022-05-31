import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useGetSingleProduct = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return { product };
};

export default useGetSingleProduct;
