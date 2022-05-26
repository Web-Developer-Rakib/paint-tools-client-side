import { useEffect, useState } from "react";

const useGetOrdersInfo = (isLoad) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isLoad]);
  return { orders };
};

export default useGetOrdersInfo;
