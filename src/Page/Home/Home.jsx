import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
                <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active background_bg" style={{ backgroundImage: 'url(assets/images/banner1.jpg)' }}>
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 col-9">
                                            <div className="banner_content overflow-hidden">
                                                <h5 className="mb-3 staggered-animation font-weight-light" style={{ color: "white" }}
                                                    data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off
                                                    Today Only!</h5>
                                                <h2 className="staggered-animation" data-animation="slideInLeft" style={{ color: "white" }}
                                                    data-animation-delay="1s"> For Couple Ring Products</h2>
                                                <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                                                    href="shop-left-sidebar.html" data-animation="slideInLeft"
                                                    data-animation-delay="1.5s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" style={{ backgroundImage: 'url(assets/images/banner2.jpg)' }}>
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            {/* <div className="banner_content overflow-hidden">
                                                <h5 className="mb-3 staggered-animation font-weight-light"
                                                    data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all
                                                    products</h5>
                                                <h2 className="staggered-animation" data-animation="slideInLeft"
                                                    data-animation-delay="1s">Man Fashion</h2>
                                                <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                                                    href="shop-left-sidebar.html" data-animation="slideInLeft"
                                                    data-animation-delay="1.5s">Shop Now</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" style={{ backgroundImage: 'url(assets/images/banner3.jpg)' }}>
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="banner_content overflow-hidden">
                                                <h5 className="mb-3 staggered-animation font-weight-light" style={{ color: "white" }}
                                                    data-animation="slideInLeft" data-animation-delay="0.5s">Big Discounts At The End Of The Year</h5>
                                                <h2 className="staggered-animation" data-animation="slideInLeft" style={{ color: "white" }}
                                                    data-animation-delay="1s">Up To 50% Off</h2>
                                                <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                                                    href="shop-left-sidebar.html" data-animation="slideInLeft"
                                                    data-animation-delay="1.5s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"><i
                        className="ion-chevron-left"></i></a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"><i
                        className="ion-chevron-right"></i></a>
                </div>
            </div>

            <div className="section small_pb small_pt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="heading_s4 text-center">
                                <h2>Product is coming soon</h2>
                            </div>
                            <p className="text-center leads">The product is expected to arrive in early 2024, the product is part of the winter 2023 collection</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="main_content">


                <div className="section pb_20 small_pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="sale-banner mb-3 mb-md-4">
                                    <a className="hover_effect1" href="#">
                                        <img src="assets/images/shop_banner_img7.jpg" alt="shop_banner_img7" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="sale-banner mb-3 mb-md-4">
                                    <a className="hover_effect1" href="#">
                                        <img src="assets/images/shop_banner_img8.jpg" alt="shop_banner_img8" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="sale-banner mb-3 mb-md-4">
                                    <a className="hover_effect1" href="#">
                                        <img src="assets/images/shop_banner_img9.jpg" alt="shop_banner_img9" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section small_pb small_pt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="heading_s1 text-center">
                                    <h2>Exclusive Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-style1">
                                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="arrival-tab" data-bs-toggle="tab" href="#arrival"
                                                role="tab" aria-controls="arrival" aria-selected="true">Ring</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="sellers-tab" data-bs-toggle="tab" href="#sellers" role="tab"
                                                aria-controls="sellers" aria-selected="false">Bracelet</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="featured-tab" data-bs-toggle="tab" href="#featured"
                                                role="tab" aria-controls="featured" aria-selected="false">Necklace</a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" id="special-tab" data-bs-toggle="tab" href="#special" role="tab"
                                                aria-controls="special" aria-selected="false">Special Offer
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="tab_slider tab-content">
                                    <div className="tab-pane fade show active" id="arrival" role="tabpanel"
                                        aria-labelledby="arrival-tab">
                                        <div className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                                            data-loop="true" data-margin="20"
                                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/nhan1glamira">
                                                            <img src="assets/anh/nhan/nhan1.jpg" alt="el_img1" />
                                                            <img className="product_hover_img" src="assets/anh/nhan/nhan1.1.jpg"
                                                                alt="el_hover_img1" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">


                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/nhan1glamira">Diamong Ring Zeno</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$536.33</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:80%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/nhan2glamira">
                                                            <img src="assets/anh/nhan/nhan2.jpg" alt="el_img2" />
                                                            <img className="product_hover_img" src="assets/anh/nhan/nhan2.2.jpg"
                                                                alt="el_hover_img2" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/nhan2glamira">Diamond Ring Sueann</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$1414.80</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:68%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <span className="pr_flash">New</span>
                                                    <div className="product_img">
                                                        <a href="/nhan3glamira">
                                                            <img src="assets/anh/nhan/nhan3.jpg" alt="el_img3" />
                                                            <img className="product_hover_img" src="assets/anh/nhan/nhan3.3.jpg"
                                                                alt="el_hover_img3" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/nhan3glamira">Diamond Ring Baltic</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$505.00</span>
                                                            <del>$99.00</del>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:87%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/nhan4glamira">
                                                            <img src="assets/anh/nhan/nhan4.jpg" alt="el_img4" />
                                                            <img className="product_hover_img" src="assets/anh/nhan/nhan4.4.jpg"
                                                                alt="el_hover_img4" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/nhan4glamira">Diamond Ring  Kleinman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$596.70</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:70%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/nhan5glamira">
                                                            <img src="assets/anh/nhan/nhan5.jpg" alt="el_img5" />
                                                            <img className="product_hover_img" src="assets/anh/nhan/nhan5.5.jpg"
                                                                alt="el_hover_img5" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/nhan5glamira">Diamond Ring Collin</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$395.08</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:80%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="/nhan6glamira">
                                                            <img src="assets/anh/nhan/nhan6.jpg" alt="el_img6" />
                                                            <img className="product_hover_img" src="assets/anh/nhan/nhan6.6.jpg"
                                                                alt="el_hover_img6" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/nhan6glamira">Diamond Ring Accablement</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$914.68</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:68%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="sellers" role="tabpanel" aria-labelledby="sellers-tab">
                                        <div className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                                            data-loop="true" data-margin="20"
                                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/vongtay1glamira">
                                                            <img src="assets/anh/vong-tay/vongtay1.jpg" alt="el_img7" />
                                                            <img className="product_hover_img" src="assets/anh/vong-tay/vongtay1.1.jpg"
                                                                alt="el_hover_img7" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/vongtay1glamira">Bracelet Waren</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$772.33</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:80%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="/vongtay2glamira">
                                                            <img src="assets/anh/vong-tay/vongtay2.jpg" alt="el_img8" />
                                                            <img className="product_hover_img" src="assets/anh/vong-tay/vongtay2.2.jpg"
                                                                alt="el_hover_img8" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a
                                                            href="/vongtay2glamira">Bracelet Ferstel</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$ 426.58</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:68%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/vongtay3glamira">
                                                            <img src="assets/anh/vong-tay/vongtay3.jpg" alt="el_img9" />
                                                            <img className="product_hover_img" src="assets/anh/vong-tay/vongtay3.3.jpg"
                                                                alt="el_hover_img9" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/vongtay3glamira">Bracelet Monika</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$8216.25</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:87%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <span className="pr_flash bg-success">Sale</span>
                                                    <div className="product_img">
                                                        <a href="/vongtay4glamira">
                                                            <img src="assets/anh/vong-tay/vongtay4.jpg" alt="el_img10" />
                                                            <img className="product_hover_img"
                                                                src="assets/anh/vong-tay/vongtay4.4.jpg" alt="el_hover_img10" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/vongtay4glamira">Bracelet Verdoiment</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$900.33</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:87%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/vongtay5glamira">
                                                            <img src="assets/anh/vong-tay/vongtay5.jpg" alt="el_img11" />
                                                            <img className="product_hover_img"
                                                                src="assets/anh/vong-tay/vongtay5.5.jpg" alt="el_hover_img11" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/vongtay5glamira">Bracelet Mahle</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$1776.91</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:70%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/vongtay6glamira">
                                                            <img src="assets/anh/vong-tay/vongtay6.jpg" alt="el_img12" />
                                                            <img className="product_hover_img"
                                                                src="assets/anh/vong-tay/vongtay6.6.jpg" alt="el_hover_img12" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/vongtay6glamira">Bracelet Courtney</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$1144.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:80%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                        <div className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                                            data-loop="true" data-margin="20"
                                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="/daychuyen1glamira">
                                                            <img src="assets/anh/vong-co/daychuyen1.jpg" alt="el_img8" />
                                                            <img className="product_hover_img" src="assets/anh/vong-co/daychuyen1.1.jpg"
                                                                alt="el_hover_img8" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a
                                                            href="/daychuyen1glamira">Necklace Ahishar</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$752.75</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:68%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/daychuyen2glamira">
                                                            <img src="assets/anh/vong-co/daychuyen2.jpg" alt="el_img4" />
                                                            <img className="product_hover_img" src="assets/anh/vong-co/daychuyen2.2.jpg"
                                                                alt="el_hover_img4" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/daychuyen2glamira">Necklace Amtsgericht</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$817.16</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:70%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/daychuyen3glamira">
                                                            <img src="assets/anh/vong-co/daychuyen3.jpg" alt="el_img11" />
                                                            <img className="product_hover_img"
                                                                src="assets/anh/vong-co/daychuyen3.3.jpg" alt="el_hover_img11" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/daychuyen3glamira">Necklace Agatane</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$880.16</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:70%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/daychuyen4glamira">
                                                            <img src="assets/anh/vong-co/daychuyen4.jpg" alt="el_img1" />
                                                            <img className="product_hover_img" src="assets/anh/vong-co/daychuyen4.4.jpg"
                                                                alt="el_hover_img1" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/daychuyen4glamira">Necklace Lucci</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$320.87</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:80%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href="/daychuyen5glamira">
                                                            <img src="assets/anh/vong-co/daychuyen5.jpg" alt="el_img7" />
                                                            <img className="product_hover_img" src="assets/anh/vong-co/daychuyen5.5.jpg"
                                                                alt="el_hover_img7" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/daychuyen5glamira">Necklace Interstellar</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$461.79</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:80%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product_wrap">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="/daychuyen6glamira">
                                                            <img src="assets/anh/vong-co/daychuyen6.jpg" alt="el_img6" />
                                                            <img className="product_hover_img" src="assets/anh/vong-co/daychuyen6.6.jpg"
                                                                alt="el_hover_img6" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">

                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="/daychuyen6glamira">Necklace Keviona</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$314.29</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                {/* <div className="product_rate" style="width:68%"></div> */}
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section pb_20 small_pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sale-banner mb-3 mb-md-4">
                                    <a className="hover_effect1" href="#">
                                        <img src="assets/images/shop_banner_img11.png" alt="shop_banner_img11" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section small_pt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="heading_s1 text-center">
                                    <h2>Trending Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="product_slider carousel_slider owl-carousel owl-theme dot_style1" data-loop="true"
                                    data-margin="20"
                                    data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                    <div className="item">
                                        <div className="product_wrap">
                                            <div className="product_img">
                                                <a href="/vongtay1glamira">
                                                    <img src="assets/anh/vong-tay/vongtay1.jpg" alt="el_img2" />
                                                    <img className="product_hover_img" src="assets/anh/vong-tay/vongtay1.1.jpg"
                                                        alt="el_hover_img2" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">

                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="/vongtay1glamira">Bracelet Waren</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$637.45</span>
                                                    <del>$772.33</del>
                                                    <div className="on_sale">
                                                        <span>25% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        {/* <div className="product_rate" style="width:68%"></div> */}
                                                    </div>
                                                    <span className="rating_num">(15)</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product_wrap">
                                            <div className="product_img">
                                                <a href="/vongtay2glamira">
                                                    <img src="assets/anh/vong-tay/vongtay2.jpg" alt="el_img5" />
                                                    <img className="product_hover_img" src="assets/anh/vong-tay/vongtay2.2.jpg"
                                                        alt="el_hover_img5" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">

                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="/vongtay2glamira">Bracelet Ferstel</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$426.58</span>
                                                    <del>$55.25</del>
                                                    <div className="on_sale">
                                                        <span>35% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        {/* <div className="product_rate" style="width:80%"></div> */}
                                                    </div>
                                                    <span className="rating_num">(21)</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product_wrap">
                                            <div className="product_img">
                                                <a href="/daychuyen1glamira">
                                                    <img src="assets/anh/vong-co/daychuyen1.jpg" alt="el_img9" />
                                                    <img className="product_hover_img" src="assets/anh/vong-co/daychuyen1.1.jpg"
                                                        alt="el_hover_img9" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">

                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="/daychuyen1glamira">Necklace Ahishar</a>
                                                </h6>
                                                <div className="product_price">
                                                    <span className="price">$752.75</span>
                                                    <del>$99.00</del>
                                                    <div className="on_sale">
                                                        <span>20% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        {/* <div className="product_rate" style="width:87%"></div> */}
                                                    </div>
                                                    <span className="rating_num">(25)</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product_wrap">
                                            <div className="product_img">
                                                <a href="/daychuyen2glamira">
                                                    <img src="assets/anh/vong-co/daychuyen2.jpg" alt="el_img7" />
                                                    <img className="product_hover_img" src="assets/anh/vong-co/daychuyen2.2.jpg"
                                                        alt="el_hover_img7" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">

                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="/daychuyen2glamira">Necklace Amtsgericht </a>
                                                </h6>
                                                <div className="product_price">
                                                    <span className="price">$817.16</span>
                                                    <del>$55.25</del>
                                                    <div className="on_sale">
                                                        <span>35% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        {/* <div className="product_rate" style="width:80%"></div> */}
                                                    </div>
                                                    <span className="rating_num">(21)</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product_wrap">
                                            <div className="product_img">
                                                <a href="/nhan1glamira">
                                                    <img src="assets/anh/nhan/nhan1.jpg" alt="el_img5" />
                                                    <img className="product_hover_img" src="assets/anh/nhan/nhan1.1.jpg"
                                                        alt="el_hover_img5" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">

                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="/nhan1glamira">Diamong Ring Zeno</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$536.33</span>
                                                    <del>$55.25</del>
                                                    <div className="on_sale">
                                                        <span>35% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        {/* <div className="product_rate" style="width:80%"></div> */}
                                                    </div>
                                                    <span className="rating_num">(21)</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product_wrap">
                                            <div className="product_img">
                                                <a href="/nhan2glamira">
                                                    <img src="assets/anh/nhan/nhan2.jpg" alt="el_img12" />
                                                    <img className="product_hover_img" src="assets/anh/nhan/nhan2.2.jpg"
                                                        alt="el_hover_img12" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">

                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="/nhan2glamira">Diamond Ring Sueann</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$1414.80</span>
                                                    <del>$55.25</del>
                                                    <div className="on_sale">
                                                        <span>35% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        {/* <div className="product_rate" style="width:80%"></div> */}
                                                    </div>
                                                    <span className="rating_num">(21)</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section bg_redon">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="heading_s1 text-center">
                                    <h2>Our Client Say!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="testimonial_wrap testimonial_style1 carousel_slider owl-carousel owl-theme nav_style2"
                                    data-nav="true" data-dots="false" data-center="true" data-loop="true" data-autoplay="true"
                                    data-items='1'>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>With strengths in product quality, dedicated service and flexible return and warranty policies, I believe that the store is a trustworthy and worthy jewelry shopping address for customers select.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/anh/avata/tran-thanh.webp" alt="user_img1" />
                                            </div>
                                            <div className="author_name">
                                                <h6>Trấn Thành</h6>
                                                <span>Performer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>The staff at the store are very enthusiastic and friendly. They are ready to answer all customer questions and advise customers on choosing the most suitable products. This creates a comfortable and pleasant shopping space.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/anh/avata/avata-son-tung.jpg" alt="user_img2" />
                                            </div>
                                            <div className="author_name">
                                                <h6>Sơn Tùng</h6>
                                                <span>Singer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>After experiencing and using the service at the store, I am very satisfied with the quality of the store's products and services. From choosing the product to the process of shopping and using it, I did not encounter any problems and felt very comfortable and satisfied.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/anh/avata/avata-g-dragon.jpg" alt="user_img3" />
                                            </div>
                                            <div className="author_name">
                                                <h6>Kwon Ji-yong</h6>
                                                <span>Idol</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>The staff at the store are very enthusiastic and friendly. They are always ready to answer all customer questions and advise customers on choosing the most suitable products. This creates a comfortable and pleasant shopping space.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/anh/avata/avata-chi-pu.webp" alt="user_img4" />
                                            </div>
                                            <div className="author_name">
                                                <h6>Nguyễn Thùy Chi</h6>
                                                <span>Singer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section pb_20">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="heading_s1 text-center">
                                    <h2>Latest News</h2>
                                </div>
                                <p className="leads text-center">Jewelry information and trends are always updated daily</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog_post blog_style2 box_shadow1">
                                    <div className="blog_img">
                                        <a href="">
                                            <img src="assets/anh/last-new/last-new-1.jpg" alt="el_blog_img1" />
                                        </a>
                                    </div>
                                    <div className="blog_content bg-white">
                                        <div className="blog_text">
                                            <h5 className="blog_title"><a href="">Cast Brings Its Playful Fine Jewelry Strategy to Nordstrom</a></h5>
                                            <ul className="list_none blog_meta">
                                                <li><a href="#"><i className="ti-calendar"></i> NOV 17, 2023, 12:01 GMT</a></li>
                                                <li><a href="#"><i className="ti-comments"></i> 2 Comment</a></li>
                                            </ul>
                                            <p>Cast is continuing its mission of aiming to disrupt the fine jewelry market with its first retail partnership. The San Francisco-based fine jewelry brand founded by Eric Ryan and Rachel Skelly — who are behind brands like Olly Vitamins, Plum Organics, Method and Welly — is bringing its playful, approachable strategy to Nordstrom, enterin ...

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog_post blog_style2 box_shadow1">
                                    <div className="blog_img">
                                        <a href="">
                                            <img src="assets/anh/last-new/last-new-2.jpg" alt="el_blog_img2" />
                                        </a>
                                    </div>
                                    <div className="blog_content bg-white">
                                        <div className="blog_text">
                                            <h5 className="blog_title"><a href="">Dawn O’Porter x Rachel Jackson’s new jewellery collection is here</a></h5>
                                            <ul className="list_none blog_meta">
                                                <li><a href="#"><i className="ti-calendar"></i> NOV 02, 2023, 12:00 GMT</a></li>
                                                <li><a href="#"><i className="ti-comments"></i> 2 Comment</a></li>
                                            </ul>
                                            <p>As we edge towards winter, it’s tempting to look for lighter, brighter purchases to liven up dull days. Colourful knits, vibrant lipsticks and even (dare we say it) a Christmas bauble or two, are all items starting to seep into our online baskets. But when it comes to mood-lifting buys, we’ve spied a new jewellery collection that’s left us dancing for joy. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog_post blog_style2 box_shadow1">
                                    <div className="blog_img">
                                        <a href="">
                                            <img src="assets/anh/last-new/last-new-3.jpg" alt="el_blog_img2" />
                                        </a>
                                    </div>
                                    <div className="blog_content bg-white">
                                        <div className="blog_text">
                                            <h5 className="blog_title"><a href="">The Pandora jewellery gifts we're wishing for this Christmas</a></h5>
                                            <ul className="list_none blog_meta">
                                                <li><a href="#"><i className="ti-calendar"></i> NOV 06, 2023, 15:00 GMT</a></li>
                                                <li><a href="#"><i className="ti-comments"></i> 2 Comment</a></li>
                                            </ul>
                                            <p>This year Pandora’s holiday campaign, "Loves, Unboxed" celebrates the people closest to us, as love remains top of any wish list. Taking inspiration from the celestial magic of a night’s sky, the power of love and the spirit of Christmas the collection offers a unique take on classNameic jewellery motifs, with sparkling moon and star motifs studded ... </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section small_pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-8">
                                        <div className="heading_s1 text-center">
                                            <h2>Sponsors</h2>
                                        </div>
                                        <p className="leads text-center">The store is honored to be sponsored by</p>
                                    </div>
                                </div>
                                <div className="client_logo carousel_slider owl-carousel owl-theme" data-dots="false"
                                    data-margin="30" data-loop="true" data-autoplay="true"
                                    data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="assets/images/cl_logo1.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="assets/images/cl_logo2.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="assets/images/cl_logo3.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="assets/images/cl_logo4.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="assets/images/cl_logo5.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="assets/images/cl_logo6.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="assets/images/cl_logo7.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section bg_default small_pt small_pb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="newsletter_text text_white">
                                    <h3>Join Our Newsletter Now</h3>
                                    <p> Register now to get updates on promotions. </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="newsletter_form2">
                                    <form>
                                        <input type="text" required="" className="form-control rounded-0"
                                            placeholder="Enter Email Address" />
                                        <button type="submit" className="btn btn-dark rounded-0" name="submit"
                                            value="Submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home