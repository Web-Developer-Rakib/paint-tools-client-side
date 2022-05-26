import { useEffect, useState } from "react";

const useGetOrdersInfo = (isLoad) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://painttools.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isLoad]);
  return { orders };
};

export default useGetOrdersInfo;
