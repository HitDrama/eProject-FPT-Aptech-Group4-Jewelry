import React, { useState } from 'react'
import Data_category from '../Category.json';
import { useParams } from 'react-router-dom';



function Category({ courses,
    filterCourseFunction,
    addCourseToCartFunction }) {

    const { id } = useParams();
    let items = Data_category.filter((items) => items.category == id);

    const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
    const recordsPerPage = 6; //so san pham tren 1 trang
    const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
    const firstIndex = lastIndex - recordsPerPage;  //trang dau tien
    const records = items.slice(firstIndex, lastIndex);   //tong dong du lieu
    const npage = Math.ceil(items.length / recordsPerPage); //so trang
    const numbers = [...Array(npage + 1).keys()].slice(1);




    return (
        <div>
            <div class="breadcrumb_section bg_gray page-title-mini">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="page-title">
                                <h1>Shop List Left Sidebar</h1>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ol class="breadcrumb justify-content-md-end">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">Categories</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main_content">


                <div class="section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
                                <div class="sidebar">
                                    <div class="widget">
                                        <h5 class="widget_title">Categories</h5>
                                        <ul class="widget_categories">
                                            <li><a href="#"><span class="categories_name">Women</span><span class="categories_num">(9)</span></a></li>
                                            <li><a href="#"><span class="categories_name">Top</span><span class="categories_num">(6)</span></a></li>
                                            <li><a href="#"><span class="categories_name">T-Shirts</span><span class="categories_num">(4)</span></a></li>
                                            <li><a href="#"><span class="categories_name">Men</span><span class="categories_num">(7)</span></a></li>
                                            <li><a href="#"><span class="categories_name">Shoes</span><span class="categories_num">(12)</span></a></li>
                                        </ul>
                                    </div>
                                    <div class="widget">
                                        <h5 class="widget_title">Filter</h5>
                                        <div class="filter_price">
                                            <div id="price_filter" data-min="0" data-max="500" data-min-value="50" data-max-value="300" data-price-sign="$"></div>
                                            <div class="price_range">
                                                <span>Price: <span id="flt_price"></span></span>
                                                <input type="hidden" id="price_first" />
                                                <input type="hidden" id="price_second" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget">
                                        <h5 class="widget_title">Brand</h5>
                                        <ul class="list_brand">
                                            <li>
                                                <div class="custome-checkbox">
                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="Arrivals" value="" />
                                                    <label class="form-check-label" for="Arrivals"><span>New Arrivals</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custome-checkbox">
                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="Lighting" value="" />
                                                    <label class="form-check-label" for="Lighting"><span>Lighting</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custome-checkbox">
                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="Tables" value="" />
                                                    <label class="form-check-label" for="Tables"><span>Tables</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custome-checkbox">
                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="Chairs" value="" />
                                                    <label class="form-check-label" for="Chairs"><span>Chairs</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custome-checkbox">
                                                    <input class="form-check-input" type="checkbox" name="checkbox" id="Accessories" value="" />
                                                    <label class="form-check-label" for="Accessories"><span>Accessories</span></label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="widget">
                                        <div class="shop_banner">
                                            <div class="banner_img overlay_bg_20">
                                                <img src="assets/images/sidebar_banner_img.jpg" alt="sidebar_banner_img" />
                                            </div>
                                            <div class="shop_bn_content2 text_white">
                                                <h5 class="text-uppercase shop_subtitle">New Collection</h5>
                                                <h3 class="text-uppercase shop_title">Sale 30% Off</h3>
                                                <a href="#" class="btn btn-white rounded-0 btn-sm text-uppercase">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="row align-items-center mb-4 pb-1">
                                    <div class="col-12">
                                        <div class="product_header">
                                            <div class="product_header_left">
                                                <div class="custom_select">
                                                    <select class="form-control form-control-sm">
                                                        <option value="order">Default sorting</option>
                                                        <option value="popularity">Sort by popularity</option>
                                                        <option value="date">Sort by newness</option>
                                                        <option value="price">Sort by price: low to high</option>
                                                        <option value="price-desc">Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="product_header_right">
                                                <div class="products_view">
                                                    <a class="shorting_icon grid"><i class="ti-view-grid"></i></a>
                                                    <a class="shorting_icon list active"><i class="ti-layout-list-thumb"></i></a>
                                                </div>
                                                <div class="custom_select">
                                                    <select class="form-control form-control-sm">
                                                        <option value="">Showing</option>
                                                        <option value="9">9</option>
                                                        <option value="12">12</option>
                                                        <option value="18">18</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row shop_container list">
                                    {
                                        records.map((items, index) => {
                                            return <div class="col-md-12 col-12">
                                                <div class="product" key={items.id}>
                                                    <div class="product_img">
                                                        <a href={items.link}>
                                                            <img src={items.image} alt="product_img1" />
                                                        </a>

                                                    </div>
                                                    <div class="product_info">
                                                        <h6 class="product_title"><a href={items.link}>{items.name}</a></h6>
                                                        <div class="product_price">
                                                            <span class="price">${items.newprice}</span>
                                                            <del>$55.25</del>
                                                            <div class="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div class="rating_wrap">
                                                            <div class="rating">
                                                                <div className="product_rate" style={{ width: "80%" }}></div>
                                                            </div>
                                                            <span class="rating_num">(21)</span>
                                                        </div>
                                                        <div class="pr_desc">
                                                            <p>{items.content}</p>
                                                        </div>

                                                        <div class="list_product_action_box">
                                                            <ul class="list_none pr_action_btn">
                                                                <button onClick={() => addCourseToCartFunction(items)}>
                                                                    <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                </button>
                                                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>

                                                                <li><a href="#"><i class="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })

                                    }
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <ul className='pagination mt-4'>
                                            <li className='page-item'>
                                                <a href='#' className='page-link' onClick={prePage}>Prev</a>
                                            </li>
                                            {
                                                numbers.map((n, i) => (
                                                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}> <a href='#' className='page-link'
                                                        onClick={() => changeCPage(n)} >{n}</a>
                                                    </li>
                                                ))
                                            }
                                            <li className='page-item'>
                                                <a href='#' className='page-link' onClick={nextPage}>Prev</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section bg_default small_pt small_pb">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="heading_s1 mb-md-0 heading_light">
                                    <h3>Subscribe Our Newsletter</h3>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="newsletter_form">
                                    <form>
                                        <input type="text" required="" class="form-control rounded-0" placeholder="Enter Email Address" />
                                        <button type="submit" class="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    //ham cac trang
    function changeCPage(id) {
        setCurrentPage(id);
    }
    //ham trang tiep theo
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }
}

export default Category