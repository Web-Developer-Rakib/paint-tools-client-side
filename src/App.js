import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import RequireAuth from "./Hooks/RequireAuth";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AllReviews from "./Pages/AllReviews/AllReviews";
import Blogs from "./Pages/Blogs/Blogs";
import Dashbord from "./Pages/Dashboard/Dashbord";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Order from "./Pages/Order/Order";
import AddAProduct from "./Pages/Outlates/AddAProduct/AddAProduct";
import AddAReview from "./Pages/Outlates/AddAReview/AddAReview";
import MakeAdmin from "./Pages/Outlates/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Outlates/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/Outlates/ManageProducts/ManageProducts";
import MyOrders from "./Pages/Outlates/MyOrders/MyOrders";
import MyProfile from "./Pages/Outlates/MyProfile/MyProfile";
import Payment from "./Pages/Payment/Payment";
import Register from "./Pages/Register/Register";
import ThankYou from "./Pages/ThankYou/ThankYou";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashbord></Dashbord>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="add-a-review"
            element={<AddAReview></AddAReview>}
          ></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="manage-all-orders"
            element={<ManageAllOrders></ManageAllOrders>}
          ></Route>
          <Route
            path="add-a-product"
            element={<AddAProduct></AddAProduct>}
          ></Route>
          <Route path="make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route
            path="manage-products"
            element={<ManageProducts></ManageProducts>}
          ></Route>
        </Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route
          path="all-products"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route
          path="all-products"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route path="all-reviews" element={<AllReviews></AllReviews>}></Route>
        <Route
          path="order/:productId"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="payment/:orderId"
          element={
            <RequireAuth>
              <Payment></Payment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="my-portfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="thank-you" element={<ThankYou></ThankYou>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
