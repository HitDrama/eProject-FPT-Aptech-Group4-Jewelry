import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <div className="preloader">
                <div className="lds-ellipsis">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="modal fade subscribe_popup" id="onload-popup" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="ion-ios-close-empty"></i></span>
                            </button>
                            <div className="row g-0">
                                <div className="col-sm-7">
                                    <div className="popup_content  text-start">
                                        <div className="popup-text">
                                            <div className="heading_s1">
                                                <h3>Subscribe Newsletter and Get 25% Discount!</h3>
                                            </div>
                                            <p>Subscribe to the newsletter to receive updates about new products.</p>
                                        </div>
                                        <form method="post">
                                            <div className="form-group mb-3">
                                                <input name="email" required type="email" className="form-control"
                                                    placeholder="Enter Your Email" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <button className="btn btn-fill-out btn-block text-uppercase" title="Subscribe"
                                                    type="submit">Subscribe</button>
                                            </div>
                                        </form>
                                        <div className="chek-form">
                                            <div className="custome-checkbox">
                                                <input className="form-check-input" type="checkbox" name="checkbox"
                                                    id="exampleCheckbox3" value="" />
                                                <label className="form-check-label" for="exampleCheckbox3"><span>Don't show this
                                                    popup again!</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="background_bg h-100" style={{ backgroundImage: "url(assets/anh/anh-QC-1.jpg)" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header_wrap">
                <div className="top-header light_skin bg_dark d-none d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="header_topbar_info">
                                    <div className="header_offer">
                                        <span>Free Ground Shipping Over $250</span>
                                    </div>
                                    <div className="download_wrap">
                                        <span className="me-3">Download App</span>
                                        <ul className="icon_list text-center text-lg-start">
                                            <li><a href="#"><i className="fab fa-apple"></i></a></li>
                                            <li><a href="#"><i className="fab fa-android"></i></a></li>
                                            <li><a href="#"><i className="fab fa-windows"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-4">
                                <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                                    <div className="lng_dropdown">
                                        <select name="countries" className="custome_select">
                                            <option value='en' data-image="assets/images/eng.png" data-title="English">English
                                            </option>
                                            <option value='fn' data-image="assets/images/fn.png" data-title="France">France
                                            </option>
                                            <option value='us' data-image="assets/images/us.png" data-title="United States">
                                                United States</option>
                                        </select>
                                    </div>
                                    <div className="ms-3">
                                        <select name="countries" className="custome_select">
                                            <option value='USD' data-title="USD">USD</option>
                                            <option value='EUR' data-title="EUR">EUR</option>
                                            <option value='GBR' data-title="GBR">GBR</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle-header dark_skin">
                    <div className="container">
                        <div className="nav_block">
                            <a className="navbar-brand" href="/">
                                {/* <img className="logo_light" src="assets/images/logo_light.png" alt="logo" /> */}
                                <img className="logo_dark" src="assets/anh/logo/Logo-De-Beer-Header-1.png" alt="logo" />
                            </a>
                            <div className="product_search_form radius_input search_form_btn">
                                <form>
                                    <div className="input-group">
                                        <input className="form-control" placeholder="Search Product..." required="" type="text" />
                                        <button type="submit" className="search_btn3">Search</button>
                                    </div>
                                </form>
                            </div>
                            <ul className="navbar-nav attr-nav align-items-center">
                                <li><a href="#" className="nav-link"><i className="linearicons-user"></i></a></li>
                                <li><a href="#" className="nav-link"><i className="linearicons-heart"></i><span
                                    className="wishlist_count">0</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom_header dark_skin main_menu_uppercase border-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-3">

                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                                <nav className="navbar navbar-expand-lg">
                                    <button className="navbar-toggler side_navbar_toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSidetoggle" aria-expanded="false">
                                        <span className="ion-android-menu"></span>
                                    </button>
                                    <div className="pr_search_icon">
                                        <a href="javascript:void(0);" className="nav-link pr_search_trigger"><i
                                            className="linearicons-magnifier"></i></a>
                                    </div>
                                    <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                                        <ul className="navbar-nav">
                                            <li className="dropdown">
                                                <a className="nav-link active"
                                                    href="/">Home</a>

                                            </li>
                                            <li><a className="nav-link nav_item" href="/category">Categories</a></li>

                                            <li className="dropdown dropdown-mega-menu">
                                                <a className="dropdown-toggle nav-link" href="#"
                                                    data-bs-toggle="dropdown">Products</a>
                                                <div className="dropdown-menu">
                                                    <ul className="mega-menu d-lg-flex">
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Glamira</li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Glamira-Bracelet">Bracelet</a>
                                                                </li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Glamira-Ring">Ring</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Glamira-Necklace">Necklace</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Sokolov</li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Sokolov-Ring">Ring</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Sokolov-Necklace">Necklace</a></li>

                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Tierra</li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Tierra-Bracelet">Bracelet</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Tierra-Ring">Ring</a></li>
                                                                <li><a className="dropdown-item nav-link nav_item"
                                                                    href="/Product-Tierra-Necklace">Necklace</a></li>

                                                            </ul>
                                                        </li>

                                                    </ul>
                                                    <div className="d-lg-flex menu_banners row g-3 px-3">
                                                        <div className="col-lg-6">
                                                            <div className="header-banner">
                                                                <div className="sale-banner">
                                                                    <a className="hover_effect1" href="#">
                                                                        <img src="assets/images/shop_banner_img7.jpg"
                                                                            alt="shop_banner_img7" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="header-banner">
                                                                <div className="sale-banner">
                                                                    <a className="hover_effect1" href="#">
                                                                        <img src="assets/images/shop_banner_img8.jpg"
                                                                            alt="shop_banner_img8" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">Pages</a>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        <li><a className="dropdown-item nav-link nav_item" href="/aboutus">About
                                                            Us</a></li>

                                                        <li><a className="dropdown-item nav-link nav_item"
                                                            href="/contact">Contact Us</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="/gallery">Gallery</a></li>
                                                        <li><a className="dropdown-item nav-link nav_item" href="/feedback">Feedback</a></li>

                                                    </ul>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="contact_phone contact_support">
                                        <i className="linearicons-phone-wave"></i>
                                        <span>123-456-7689</span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header