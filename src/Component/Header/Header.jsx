import React from 'react'
import { Link } from 'react-router-dom';
import CateProduct from '../Brand.json'


function Header({ cartCourses, number }) {
    console.log(cartCourses.length);
    return (
        <div>

            {/* <div className="preloader">
                <div className="lds-ellipsis">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div> */}

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
                                    <div className="background_bg h-100" style={{ backgroundImage: "url(/assets/anh/anh-QC-1.jpg)" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header_wrap">


                <div className="bottom_header dark_skin main_menu_uppercase border-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-1.5 col-md-2 col-sm-4 col-3">
                                <div className="nav_block">
                                    <a className="navbar-brand" href="/">


                                        <img className="logo_dark" src="/assets/anh/logo/Logo-De-Beer-Header-1.png" alt="logo" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-10.5 col-md-10 col-sm-8 col-9">
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
                                                <a href='/' className="nav-link">Home</a>
                                            </li>

                                            <li className="dropdown">
                                                <a className="dropdown-toggle nav-link" href="#" data-bs-toggle="dropdown">Category</a>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        {
                                                            CateProduct.map((items, i) => {
                                                                return <li><a className="dropdown-item nav-link nav_item" href={`/category/${items.id}`}>{items.name}</a>
                                                                </li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="dropdown dropdown-mega-menu">
                                                <a className="dropdown-toggle nav-link" href="#"
                                                    data-bs-toggle="dropdown">Products</a>
                                                <div className="dropdown-menu">
                                                    <ul className="mega-menu d-lg-flex">
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Glamira</li>
                                                                <li><Link to="/Product-Glamira-Bracelet" className="dropdown-item nav-link nav_item">Bracelet</Link></li>
                                                                <li><Link to="/Product-Glamira-Ring" className="dropdown-item nav-link nav_item">Ring</Link></li>
                                                                <li><Link to="/Product-Glamira-Necklace" className="dropdown-item nav-link nav_item">Necklace</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Sokolov</li>
                                                                <li><Link to="/Product-Sokolov-Ring" className="dropdown-item nav-link nav_item">Ring</Link></li>
                                                                <li><Link to="/Product-Sokolov-Necklace" className="dropdown-item nav-link nav_item">Necklace</Link></li>

                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-4">
                                                            <ul>
                                                                <li className="dropdown-header">Tierra</li>
                                                                <li><Link to="/Product-Tierra-Bracelet" className="dropdown-item nav-link nav_item">Bracelet</Link></li>
                                                                <li><Link to="/Product-Tierra-Ring" className="dropdown-item nav-link nav_item">Ring</Link></li>
                                                                <li><Link to="/Product-Tierra-Necklace" className="dropdown-item nav-link nav_item">Necklace</Link></li>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                    <div className="d-lg-flex menu_banners row g-3 px-3">
                                                        <div className="col-lg-6">
                                                            <div className="header-banner">
                                                                <div className="sale-banner">
                                                                    <a className="hover_effect1" href="#">
                                                                        <img src="/assets/images/shop_banner_img7.jpg"
                                                                            alt="shop_banner_img7" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="header-banner">
                                                                <div className="sale-banner">
                                                                    <a className="hover_effect1" href="#">
                                                                        <img src="/assets/images/shop_banner_img8.jpg"
                                                                            alt="shop_banner_img8" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li><a href='/aboutus' className="nav-link nav_item">About</a></li>
                                            <li><Link to="/Contact" className="nav-link nav_item">Contact</Link></li>
                                            <li><Link to="/gallery" className="nav-link nav_item">Gallery</Link></li>
                                            <li><Link to="/feedback" className="nav-link nav_item">Feedback</Link></li>

                                            <li className="dropdown cart_dropdown"><Link to="/cart" className="nav-link nav_item"> <i className="linearicons-bag2"></i><span
                                                className="cart_count" >({cartCourses.length})</span></Link>
                                                <div className="cart_box cart_right dropdown-menu dropdown-menu-right">
                                                </div>
                                            </li>
                                            <li><Link to="/compare" className="nav-link nav_item"><i className="icon-shuffle"></i>Compare</Link></li>

                                        </ul>
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div >
            </header >

        </div >
    )
}

export default Header