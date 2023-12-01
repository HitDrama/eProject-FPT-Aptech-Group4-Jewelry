import React from 'react'

function Header() {
    return (
        <div>

            <div class="preloader">
                <div class="lds-ellipsis">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="modal fade subscribe_popup" id="onload-popup" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i class="ion-ios-close-empty"></i></span>
                            </button>
                            <div class="row g-0">
                                <div class="col-sm-7">
                                    <div class="popup_content  text-start">
                                        <div class="popup-text">
                                            <div class="heading_s1">
                                                <h3>Subscribe Newsletter and Get 25% Discount!</h3>
                                            </div>
                                            <p>Subscribe to the newsletter to receive updates about new products.</p>
                                        </div>
                                        <form method="post">
                                            <div class="form-group mb-3">
                                                <input name="email" required type="email" class="form-control"
                                                    placeholder="Enter Your Email" />
                                            </div>
                                            <div class="form-group mb-3">
                                                <button class="btn btn-fill-out btn-block text-uppercase" title="Subscribe"
                                                    type="submit">Subscribe</button>
                                            </div>
                                        </form>
                                        <div class="chek-form">
                                            <div class="custome-checkbox">
                                                <input class="form-check-input" type="checkbox" name="checkbox"
                                                    id="exampleCheckbox3" value="" />
                                                <label class="form-check-label" for="exampleCheckbox3"><span>Don't show this
                                                    popup again!</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <div class="background_bg h-100" style={{ backgroundImage: "url(assets/anh/anh-QC-1.jpg)" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header class="header_wrap">
                <div class="top-header light_skin bg_dark d-none d-md-block">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-8">
                                <div class="header_topbar_info">
                                    <div class="header_offer">
                                        <span>Free Ground Shipping Over $250</span>
                                    </div>
                                    <div class="download_wrap">
                                        <span class="me-3">Download App</span>
                                        <ul class="icon_list text-center text-lg-start">
                                            <li><a href="#"><i class="fab fa-apple"></i></a></li>
                                            <li><a href="#"><i class="fab fa-android"></i></a></li>
                                            <li><a href="#"><i class="fab fa-windows"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4">
                                <div class="d-flex align-items-center justify-content-center justify-content-md-end">
                                    <div class="lng_dropdown">
                                        <select name="countries" class="custome_select">
                                            <option value='en' data-image="assets/images/eng.png" data-title="English">English
                                            </option>
                                            <option value='fn' data-image="assets/images/fn.png" data-title="France">France
                                            </option>
                                            <option value='us' data-image="assets/images/us.png" data-title="United States">
                                                United States</option>
                                        </select>
                                    </div>
                                    <div class="ms-3">
                                        <select name="countries" class="custome_select">
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
                <div class="middle-header dark_skin">
                    <div class="container">
                        <div class="nav_block">
                            <a class="navbar-brand" href="/">
                                {/* <img class="logo_light" src="assets/images/logo_light.png" alt="logo" /> */}
                                <img class="logo_dark" src="assets/anh/logo/Logo-Glamira.png" alt="logo" />
                            </a>
                            <div class="product_search_form radius_input search_form_btn">
                                <form>
                                    <div class="input-group">
                                        <input class="form-control" placeholder="Search Product..." required="" type="text" />
                                        <button type="submit" class="search_btn3">Search</button>
                                    </div>
                                </form>
                            </div>
                            <ul class="navbar-nav attr-nav align-items-center">
                                <li><a href="#" class="nav-link"><i class="linearicons-user"></i></a></li>
                                <li><a href="#" class="nav-link"><i class="linearicons-heart"></i><span
                                    class="wishlist_count">0</span></a></li>
                                <li><a href="/cart" class="nav-link"><i class="linearicons-bag2"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bottom_header dark_skin main_menu_uppercase border-top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-md-4 col-sm-6 col-3">

                            </div>
                            <div class="col-lg-9 col-md-8 col-sm-6 col-9">
                                <nav class="navbar navbar-expand-lg">
                                    <button class="navbar-toggler side_navbar_toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSidetoggle" aria-expanded="false">
                                        <span class="ion-android-menu"></span>
                                    </button>
                                    <div class="pr_search_icon">
                                        <a href="javascript:void(0);" class="nav-link pr_search_trigger"><i
                                            class="linearicons-magnifier"></i></a>
                                    </div>
                                    <div class="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                                        <ul class="navbar-nav">
                                            <li class="dropdown">
                                                <a class="nav-link active"
                                                    href="/">Home</a>

                                            </li>
                                            <li><a class="nav-link nav_item" href="/category">Categories</a></li>

                                            <li class="dropdown dropdown-mega-menu">
                                                <a class="dropdown-toggle nav-link" href="#"
                                                    data-bs-toggle="dropdown">Products</a>
                                                <div class="dropdown-menu">
                                                    <ul class="mega-menu d-lg-flex">
                                                        <li class="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li class="dropdown-header">Glamira</li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Glamira-Bracelet">Bracelet</a>
                                                                </li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Glamira-Ring">Ring</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Glamira-Necklace">Necklace</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li class="dropdown-header">Sokolov</li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Sokolov-Ring">Ring</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Sokolov-Necklace">Necklace</a></li>

                                                            </ul>
                                                        </li>
                                                        <li class="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li class="dropdown-header">Tierra</li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Tierra-Bracelet">Bracelet</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Tierra-Ring">Ring</a></li>
                                                                <li><a class="dropdown-item nav-link nav_item"
                                                                    href="/Product-Tierra-Necklace">Necklace</a></li>

                                                            </ul>
                                                        </li>

                                                    </ul>
                                                    <div class="d-lg-flex menu_banners row g-3 px-3">
                                                        <div class="col-lg-6">
                                                            <div class="header-banner">
                                                                <div class="sale-banner">
                                                                    <a class="hover_effect1" href="#">
                                                                        <img src="assets/images/shop_banner_img7.jpg"
                                                                            alt="shop_banner_img7" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="header-banner">
                                                                <div class="sale-banner">
                                                                    <a class="hover_effect1" href="#">
                                                                        <img src="assets/images/shop_banner_img8.jpg"
                                                                            alt="shop_banner_img8" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="dropdown">
                                                <a class="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">Pages</a>
                                                <div class="dropdown-menu">
                                                    <ul>
                                                        <li><a class="dropdown-item nav-link nav_item" href="about.html">About
                                                            Us</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item"
                                                            href="contact.html">Contact Us</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="faq.html">Faq</a>
                                                        </li>
                                                        <li><a class="dropdown-item nav-link nav_item" href="404.html">404 Error
                                                            Page</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item"
                                                            href="login.html">Login</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item"
                                                            href="signup.html">Register</a></li>
                                                        <li><a class="dropdown-item nav-link nav_item"
                                                            href="term-condition.html">Terms and Conditions</a></li>
                                                    </ul>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                    <div class="contact_phone contact_support">
                                        <i class="linearicons-phone-wave"></i>
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