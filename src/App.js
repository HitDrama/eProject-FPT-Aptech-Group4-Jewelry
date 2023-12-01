import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Category from './Component/Category/Category';
import About from './Component/About/About';
import Mau from './Component/Category_mau/Mau';
import Appcart from './Component/App_Cart/Appcart';
import React, { useState } from 'react';



//Brands
import Product_Gla_nhan from './Component/Brands/Glamira/Nhan/Brand_PDR_nhan';
import Product_Gla_vongco from './Component/Brands/Glamira/Vong-co/Brand_PDR_vongco';
import Product_Gla_vongtay from './Component/Brands/Glamira/Vong-tay/Brand_Gla_vong_tay';
import Product_Sok_nhan from './Component/Brands/Sokolov/Nhan/Brand_Sok_nhan';
import Product_Sok_vong_co from './Component/Brands/Sokolov/Vong-co/Brand_Sok_vong_co';
import Product_Tie_nhan from './Component/Brands/Tierra/Nhan/Brand_Tierra_nhan';
import Product_Tie_vong_co from './Component/Brands/Tierra/Vong-co/Brand_Tierra_vong_co';
import Product_Tie_vong_tay from './Component/Brands/Tierra/Vong-tay/Brand_Tierra_vongtay';


//Product

// PanDoRa
import Daychuyen1pandora from './Component/Product/Pandora/daytruyen/daychuyen1';
import Daychuyen2pandora from './Component/Product/Pandora/daytruyen/daychuyen2';
import Daychuyen3pandora from './Component/Product/Pandora/daytruyen/daychuyen3';
import Daychuyen4pandora from './Component/Product/Pandora/daytruyen/daychuyen4';
import Daychuyen5pandora from './Component/Product/Pandora/daytruyen/daychuyen5';
import Daychuyen6pandora from './Component/Product/Pandora/daytruyen/daychuyen6';
import Daychuyen7pandora from './Component/Product/Pandora/daytruyen/daychuyen7';
import Nhan1pandora from './Component/Product/Pandora/Nhan/nhan1';
import Nhan2pandora from './Component/Product/Pandora/Nhan/nhan2';
import Nhan3pandora from './Component/Product/Pandora/Nhan/nhan3';
import Nhan4pandora from './Component/Product/Pandora/Nhan/nhan4';
import Nhan5pandora from './Component/Product/Pandora/Nhan/nhan5';
import Nhan6pandora from './Component/Product/Pandora/Nhan/nhan6';
import Nhan7pandora from './Component/Product/Pandora/Nhan/nhan7';
import Vongtay1 from './Component/Product/Pandora/vongtay/vongtay1';
import Vongtay2 from './Component/Product/Pandora/vongtay/vongtay2';
import Vongtay3 from './Component/Product/Pandora/vongtay/vongtay3';
import Vongtay4 from './Component/Product/Pandora/vongtay/vongtay4';
import Vongtay5 from './Component/Product/Pandora/vongtay/vongtay5';
import Vongtay6 from './Component/Product/Pandora/vongtay/vongtay6';
import Vongtay7 from './Component/Product/Pandora/vongtay/vongtay7';
// Sokolov
import Daychuyen1sokolov from './Component/Product/Sokolov/daytruyen/daychuyen1';
import Daychuyen2sokolov from './Component/Product/Sokolov/daytruyen/daychuyen2';
import Daychuyen3sokolov from './Component/Product/Sokolov/daytruyen/daychuyen3';
import Daychuyen4sokolov from './Component/Product/Sokolov/daytruyen/daychuyen4';
import Daychuyen5sokolov from './Component/Product/Sokolov/daytruyen/daychuyen5';

import Nhan1sokolov from './Component/Product/Sokolov/Nhan/nhan1';
import Nhan2sokolov from './Component/Product/Sokolov/Nhan/nhan2';
import Nhan3sokolov from './Component/Product/Sokolov/Nhan/nhan3';
import Nhan4sokolov from './Component/Product/Sokolov/Nhan/nhan4';
import Nhan5sokolov from './Component/Product/Sokolov/Nhan/nhan5';
// Tierra
import Daychuyen1tierra from './Component/Product/Tierra/daytruyen/daychuyen1';
import Daychuyen2tierra from './Component/Product/Tierra/daytruyen/daychuyen2';
import Daychuyen3tierra from './Component/Product/Tierra/daytruyen/daychuyen3';
import Daychuyen4tierra from './Component/Product/Tierra/daytruyen/daychuyen4';
import Daychuyen5tierra from './Component/Product/Tierra/daytruyen/daychuyen5';
import Nhan1tierra from './Component/Product/Tierra/Nhan/nhan1';
import Nhan2tierra from './Component/Product/Tierra/Nhan/nhan2';
import Nhan3tierra from './Component/Product/Tierra/Nhan/nhan3';
import Nhan4tierra from './Component/Product/Tierra/Nhan/nhan4';
import Nhan5tierra from './Component/Product/Tierra/Nhan/nhan5';
import Vongtay1tierra from './Component/Product/Tierra/vongtay/vongtay1';
import Vongtay2tierra from './Component/Product/Tierra/vongtay/vongtay2';
import Vongtay3tierra from './Component/Product/Tierra/vongtay/vongtay3';
import Vongtay4tierra from './Component/Product/Tierra/vongtay/vongtay4';
import Vongtay5tierra from './Component/Product/Tierra/vongtay/vongtay5';

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




  return (
    <div >
      <Header />

      <BrowserRouter>
        <Routes>


          {/* Pages */}

          <Route path='/Cart' element={<Appcart cartCourses={cartCourses}
            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
            totalAmountCalculationFunction={
              totalAmountCalculationFunction
            }
            setCartCourses={setCartCourses} />} />


          <Route path='/' element={<Home />} />

          <Route path='/Category' element={<Category courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction} />} />











          {/* Product */}
          <Route path='/Product-Glamira-Ring' element={<Product_Gla_nhan />} />
          <Route path='/Product-Glamira-Necklace' element={<Product_Gla_vongco />} />
          <Route path='/Product-Glamira-Bracelet' element={<Product_Gla_vongtay />} />
          <Route path='/Product-Sokolov-Ring' element={<Product_Sok_nhan />} />
          <Route path='/Product-Sokolov-Necklace' element={<Product_Sok_vong_co />} />
          <Route path='/Product-Tierra-Ring' element={<Product_Tie_nhan />} />
          <Route path='/Product-Tierra-Necklace' element={<Product_Tie_vong_co />} />
          <Route path='/Product-Tierra-Bracelet' element={<Product_Tie_vong_tay />} />

          {/* // Product */}

          {/* Link day chuyen Pandora */}
          <Route path="/daychuyen1glamira" element={<Daychuyen1pandora />} />
          <Route path="/daychuyen2glamira" element={<Daychuyen2pandora />} />
          <Route path="/daychuyen3glamira" element={<Daychuyen3pandora />} />
          <Route path="/daychuyen4glamira" element={<Daychuyen4pandora />} />
          <Route path="/daychuyen5glamira" element={<Daychuyen5pandora />} />
          <Route path="/daychuyen6glamira" element={<Daychuyen6pandora />} />
          <Route path="/daychuyen7glamira" element={<Daychuyen7pandora />} />
          {/* Link nhan Pandora */}
          <Route path="/nhan1glamira" element={<Nhan1pandora />} />
          <Route path="/nhan2glamira" element={<Nhan2pandora />} />
          <Route path="/nhan3glamira" element={<Nhan3pandora />} />
          <Route path="/nhan4glamira" element={<Nhan4pandora />} />
          <Route path="/nhan5glamira" element={<Nhan5pandora />} />
          <Route path="/nhan6glamira" element={<Nhan6pandora />} />
          <Route path="/nhan7glamira" element={<Nhan7pandora />} />
          {/* link vong tay Pandora */}
          <Route path="/vongtay1glamira" element={<Vongtay1 />} />
          <Route path="/vongtay2glamira" element={<Vongtay2 />} />
          <Route path="/vongtay3glamira" element={<Vongtay3 />} />
          <Route path="/vongtay4glamira" element={<Vongtay4 />} />
          <Route path="/vongtay5glamira" element={<Vongtay5 />} />
          <Route path="/vongtay6glamira" element={<Vongtay6 />} />
          <Route path="/vongtay7glamira" element={<Vongtay7 />} />
          {/* Link day chuyen Sokolov */}
          <Route path="/daychuyen1sokolov" element={<Daychuyen1sokolov />} />
          <Route path="/daychuyen2sokolov" element={<Daychuyen2sokolov />} />
          <Route path="/daychuyen3sokolov" element={<Daychuyen3sokolov />} />
          <Route path="/daychuyen4sokolov" element={<Daychuyen4sokolov />} />
          <Route path="/daychuyen5sokolov" element={<Daychuyen5sokolov />} />

          {/* Link nhan Sokolov */}
          <Route path="/nhan1sokolov" element={<Nhan1sokolov />} />
          <Route path="/nhan2sokolov" element={<Nhan2sokolov />} />
          <Route path="/nhan3sokolov" element={<Nhan3sokolov />} />
          <Route path="/nhan4sokolov" element={<Nhan4sokolov />} />
          <Route path="/nhan5sokolov" element={<Nhan5sokolov />} />

          {/* Link day chuyen Tierra */}
          <Route path="/daychuyen1tierra" element={<Daychuyen1tierra />} />
          <Route path="/daychuyen2tierra" element={<Daychuyen2tierra />} />
          <Route path="/daychuyen3tierra" element={<Daychuyen3tierra />} />
          <Route path="/daychuyen4tierra" element={<Daychuyen4tierra />} />
          <Route path="/daychuyen5tierra" element={<Daychuyen5tierra />} />

          {/* Link nhan Tierra */}
          <Route path="/nhan1tierra" element={<Nhan1tierra />} />
          <Route path="/nhan2tierra" element={<Nhan2tierra />} />
          <Route path="/nhan3tierra" element={<Nhan3tierra />} />
          <Route path="/nhan4tierra" element={<Nhan4tierra />} />
          <Route path="/nhan5tierra" element={<Nhan5tierra />} />

          {/* Link vong tay tierra  */}
          <Route path="/vongtay1tierra" element={<Vongtay1tierra />} />
          <Route path="/vongtay2tierra" element={<Vongtay2tierra />} />
          <Route path="/vongtay3tierra" element={<Vongtay3tierra />} />
          <Route path="/vongtay4tierra" element={<Vongtay4tierra />} />
          <Route path="/vongtay5tierra" element={<Vongtay5tierra />} />




        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
