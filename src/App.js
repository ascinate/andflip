import {useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AITools from "./pages/AITools";
import AITrainings from "./pages/AITrainings";
import Listyourtool from "./pages/Listyourtool";
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Privacy from "./pages/Privacy";
import TermsConditions from "./pages/TermsConditions";
import AddProduct from "./pages/AddProduct";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Credits from "./pages/Credits";
import Payment from "./pages/Payment";
import Membership from "./pages/Membership";
import PaymentMethod from "./pages/PaymentMethod";
import PartnerDashoard from "./pages/PartnerDashoard";
import PartnerListing from "./pages/PartnerListing";
import Sales from "./pages/Sales";
import Contact from "./pages/Contact";
import ProductsClaims from "./pages/ProductsClaims";
import BlogDetails from "./pages/BlogDetails";
import Glossary from "./pages/Glossary";
import Billing from"./pages/Billing";
import Discussions from "./pages/Discussions";
import CommentDetails from "./pages/CommentDetails";
import VendorDashboard from "./pages/VendorDashboard";
import BuyerOrder from "./pages/BuyerOrder";
import BuyerBookMark from "./pages/BuyerBookMark";
import BuyerOffer from "./pages/BuyerOffer";
import StudentDashboard from "./pages/StudentDashboard";
import StudentBookmark from "./pages/StudentBookmark";
import StudentOffer from "./pages/StudentOffer";
import VenderProfile from "./pages/VenderProfile";
import StudentProfile from "./pages/StudentProfile";
import Templates from "./pages/Templates";
import Deals from "./pages/Deals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';


function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            
            <Route exact="true" path="/" element={<Home/>}/>
            <Route exact="true" path="/about" element={<About/>}></Route>
            <Route exact="true" path="/aitools" element={<AITools/>}></Route>
            <Route exact="true" path="/aitrainings" element={<AITrainings/>}></Route>
            <Route exact="true" path="/listyourtool" element={<Listyourtool/>}></Route>
            <Route exact="true" path="/blog" element={<Blog/>}></Route>
            <Route exact="true" path="/productdetails" element={<ProductDetails/>}></Route>
            <Route exact="true" path="/register" element={<Register/>}></Route>
            <Route exact="true" path="/dashboard" element={<Dashboard/>}></Route>
            <Route exact="true" path="/terms&conditions" element={<TermsConditions/>}></Route>
            <Route exact="true" path="/privacy" element={<Privacy/>}></Route>
            <Route exact="true" path="/addproduct" element={<AddProduct/>}></Route>
            <Route exact="true" path="/profile" element={<Profile/>}></Route>
            <Route exact="true" path="/products" element={<Products/>}></Route>
            <Route exact="true" path="/credits" element={<Credits/>}></Route>
            <Route exact="true" path="/payment" element={<Payment/>}></Route>
            <Route exact="true" path="/membership" element={<Membership/>}></Route>
            <Route exact="true" path="/paymentmethod" element={<PaymentMethod/>}></Route>
            <Route exact="true" path="/partnerdashoard" element={<PartnerDashoard/>}></Route>
            <Route exact="true" path="/partnerlisting" element={<PartnerListing/>}></Route>
            <Route exact="true" path="/sales" element={<Sales/>}></Route>
            <Route exact="true" path="/contact" element={<Contact/>}></Route>
            <Route exact="true" path="/productsclaims" element={<ProductsClaims/>}></Route>
            <Route exact="true" path="/blogdetails" element={<BlogDetails/>}></Route>
            <Route exact="true" path="/glossary" element={<Glossary/>}></Route>
            <Route exact="true" path="/billing" element={<Billing/>}></Route>   
            <Route exact="true" path="/discussions" element={<Discussions/>}></Route>
            <Route exact="true" path="/commentdetails" element={<CommentDetails/>}></Route>
            <Route exact="true" path="/vendordashboard" element={<VendorDashboard/>}></Route>
            <Route exact="true" path="/buyerorder" element={<BuyerOrder/>}></Route>
            <Route exact="true" path="/buyerbookmark" element={<BuyerBookMark/>}></Route>
            <Route exact="true" path="/buyeroffer" element={<BuyerOffer/>}></Route>
            <Route exact="true" path="/studentdashboard" element={<StudentDashboard/>}></Route>
            <Route exact="true" path="/studentbookmark" element={<StudentBookmark/>}></Route>
            <Route exact="true" path="/studentoffer" element={<StudentOffer/>}></Route>
            <Route exact="true" path="/venderprofile" element={<VenderProfile/>}></Route>
            <Route exact="true" path="/studentprofile" element={<StudentProfile/>}></Route>
            <Route exact="true" path="/templates" element={<Templates/>}></Route>
            <Route exact="true" path="/deals" element={<Deals/>}></Route>
            
            
            
            <Route path="*" element={<Error/>}></Route>

          </Routes>
          <Footer/>
       </Router>
    </div>
  );
}

export default App;
