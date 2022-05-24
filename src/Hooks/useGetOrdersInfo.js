import { useEffect, useState } from "react";

const useGetOrdersInfo = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return { orders };
};

export default useGetOrdersInfo;
