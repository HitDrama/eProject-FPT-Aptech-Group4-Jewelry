import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Category from './Component/Category/Category';
import About from './Component/About/About';
import Appcart from './Component/App_Cart/Appcart';
import React, { useState } from 'react';
import Compare from './Component/Compare/Compare';
import Gallery from './Component/Gallery/Gallery';
import Feedback from './Component/Feedback/Feedback';
import Contact from './Component/Contact/ContactUs';
import Aboutus from './Component/Aboutus/About'



//Brands
import Product_Gla_nhan from './Component/Brands/Glamira/Nhan/Brand_PDR_nhan';
import Product_Gla_vongco from './Component/Brands/Glamira/Vong-co/Brand_PDR_vongco';
import Product_Gla_vongtay from './Component/Brands/Glamira/Vong-tay/Brand_Gla_vong_tay';
import Product_Sok_nhan from './Component/Brands/Sokolov/Nhan/Brand_Sok_nhan';
import Product_Sok_vong_co from './Component/Brands/Sokolov/Vong-co/Brand_Sok_vong_co';
import Product_Tie_nhan from './Component/Brands/Tierra/Nhan/Brand_Tierra_nhan';
import Product_Tie_vong_co from './Component/Brands/Tierra/Vong-co/Brand_Tierra_vong_co';
import Product_Tie_vong_tay from './Component/Brands/Tierra/Vong-tay/Brand_Tierra_vongtay';


import Categorypandora from './Component/Category_hang/Categorypandora';
import Categorysokolov from './Component/Category_hang/Categorysokolov';
import Categorytierra from './Component/Category_hang/Categorytierra';


//Product

// PanDoRa
import Daychuyen8 from './Component/Product/Pandora/daytruyen/Daychuyen8';

// Sokolov
import Daychuyen1sokolov from './Component/Product/Sokolov/daytruyen/daychuyen1';



function App() {

  const [courses, setCourses] = useState(
    [

    ]);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState('');

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses
      .find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map(item =>
        item.product.id === GFGcourse.id ? {
          ...item, quantity: item.quantity + 1
        }
          : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses
      .filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses
      .reduce((total, item) =>
        total + item.product.price * item.quantity, 0);
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  const [cartItems, setCartItems] = useState([]);
  const handleAdd = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };














  return (
    <BrowserRouter>

      <div className="App">
        <Header cartCourses={cartCourses} number={cartItems.length} />
        <Routes>

          <Route path='/' element={<Home courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />



          {/* Pages */}

          <Route path='Cart' element={<Appcart cartCourses={cartCourses}
            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
            totalAmountCalculationFunction={
              totalAmountCalculationFunction
            }
            setCartCourses={setCartCourses} cartItems={cartItems} />} />


          <Route path='/' element={<Home />} />

          <Route path='/Category' element={<Category courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Category/:id' element={<Category courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction}
            cartItems={cartItems} />} />

          <Route path='/compare' element={<Compare cartCourses={cartCourses}
            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
            totalAmountCalculationFunction={
              totalAmountCalculationFunction
            }
            setCartCourses={setCartCourses} />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Category-Glamira' element={<Categorypandora />} />
          <Route path='/Category-Sokolov' element={<Categorysokolov />} />
          <Route path='/Category-Tierra' element={<Categorytierra />} />
          <Route path='/Aboutus' element={<Aboutus />} />

          <Route path='/detail/:id' element={<Daychuyen1sokolov />} />








          {/* Product */}
          <Route path='/Product-Glamira-Ring' element={<Product_Gla_nhan courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Product-Glamira-Necklace' element={<Product_Gla_vongco courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Product-Glamira-Bracelet' element={<Product_Gla_vongtay courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Product-Sokolov-Ring' element={<Product_Sok_nhan courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Product-Sokolov-Necklace' element={<Product_Sok_vong_co courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Product-Tierra-Ring' element={<Product_Tie_nhan courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Product-Tierra-Necklace' element={<Product_Tie_vong_co courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />
          <Route path='/Product-Tierra-Bracelet' element={<Product_Tie_vong_tay courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />



          {/* // Product */}

          {/* Link day chuyen Pandora */}
          <Route path="/Product/:id" element={<Daychuyen8 courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />






        </Routes>
        <Footer />
      </div >

    </BrowserRouter>
  );
}

export default App;
