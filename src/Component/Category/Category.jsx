import React, { useState } from 'react'
import Data_category from '../Category.json';
import { Link, useParams } from 'react-router-dom';



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
            <div className="breadcrumb_section bg_gray page-title-mini">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h1>Shop List Left Sidebar</h1>
                                <Link to="/cart" className="nav-link"><i className="linearicons-bag2"></i>My Cart</Link>
                                <Link to="/compare" className="nav-link"><i className="icon-shuffle"></i>Compare</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ol className="breadcrumb justify-content-md-end">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Categories</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_content">


                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
                                <div className="sidebar">
                                    <div className="widget">
                                        <h5 className="widget_title">Categories</h5>
                                        <ul className="widget_categories">
                                            <li><a href="/category-glamira"><span className="categories_name">GLAMIRA</span><span className="categories_num">(21)</span></a></li>
                                            <li><a href="/category-tierra"><span className="categories_name">TIERRA</span><span className="categories_num">(10)</span></a></li>
                                            <li><a href="/category-sokolov"><span className="categories_name">SOKOLOV</span><span className="categories_num">(15)</span></a></li>

                                        </ul>
                                    </div>

                                    <div className="widget">
                                        <h5 className="widget_title">Product</h5>
                                        <ul className="list_brand">
                                            <li>
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="Arrivals" value="" />
                                                    <label className="form-check-label" for="Arrivals"><span>Ring</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="Lighting" value="" />
                                                    <label className="form-check-label" for="Lighting"><span>Necklace</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="Tables" value="" />
                                                    <label className="form-check-label" for="Tables"><span>Bracelet</span></label>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>


                                    <div className="widget">
                                        <div className="shop_banner">
                                            <div className="banner_img overlay_bg_20">
                                                <img src="assets/anh/img-category.png" alt="sidebar_banner_img" />
                                            </div>
                                            <div className="shop_bn_content2 text_white">
                                                <h5 className="text-uppercase shop_subtitle">New Collection</h5>
                                                <h3 className="text-uppercase shop_title">Sale 30% Off</h3>
                                                <a href="#" className="btn btn-white rounded-0 btn-sm text-uppercase">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row align-items-center mb-4 pb-1">
                                    <div className="col-12">
                                        <div className="product_header">
                                            <div className="product_header_left">
                                                <div className="custom_select">
                                                    <select className="form-control form-control-sm">
                                                        <option value="order">Default sorting</option>
                                                        <option value="popularity">Sort by popularity</option>
                                                        <option value="date">Sort by newness</option>
                                                        <option value="price">Sort by price: low to high</option>
                                                        <option value="price-desc">Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="product_header_right">
                                                <div className="products_view">
                                                    <a className="shorting_icon grid"><i className="ti-view-grid"></i></a>
                                                    <a className="shorting_icon list active"><i className="ti-layout-list-thumb"></i></a>
                                                </div>
                                                <div className="custom_select">
                                                    <select className="form-control form-control-sm">
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
                                <div className="row shop_container list">
                                    {
                                        records.map((items, index) => {
                                            return <div className="col-md-12 col-12">
                                                <div className="product" key={items.id}>
                                                    <div className="product_img">
                                                        <a href={items.link}>
                                                            <img src={items.image} alt="product_img1" />
                                                        </a>

                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href={items.link}>{items.name}</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">${items.newprice}</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div classNameName="product_rate" style={{ width: "80%" }}></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>{items.content}</p>
                                                        </div>

                                                        <div className="list_product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <button onClick={() => addCourseToCartFunction(items)}>
                                                                    <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                </button>
                                                                <li><a className="popup-ajax" href="#"><i className="icon-shuffle" onClick={() => addCourseToCartFunction(items)}></i></a></li>

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })

                                    }
                                </div>
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
                                        <a href='#' className='page-link' onClick={nextPage}>Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section bg_default small_pt small_pb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="heading_s1 mb-md-0 heading_light">
                                    <h3>Subscribe Our Newsletter</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="newsletter_form">
                                    <form>
                                        <input type="text" required="" className="form-control rounded-0" placeholder="Enter Email Address" />
                                        <button type="submit" className="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
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