import React from 'react'
import { Link } from 'react-router-dom'
import dataNhan from '../../Component/json/pandora/nhan.json'
import dataVong from '../../Component/json/pandora/vongtay.json'
import dataVongco from '../../Component/json/pandora/daychuyen.json'
import Tonghop from '../../Component/json/pandora/Tonghop.json'

function Home({ addCourseToCartFunction }) {
    return (
        <div>
            <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
                <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active background_bg" style={{ backgroundImage: 'url(/assets/images/banner1.jpg)' }}>
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

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" style={{ backgroundImage: 'url(/assets/images/banner2.jpg)' }}>
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" style={{ backgroundImage: 'url(/assets/anh/Banner3.1.jpg)' }}>
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="banner_content overflow-hidden">
                                                <h5 className="mb-3 staggered-animation font-weight-light" style={{ color: "white" }}
                                                    data-animation="slideInLeft" data-animation-delay="0.5s">Big Discounts At The End Of The Year</h5>
                                                <h2 className="staggered-animation" data-animation="slideInLeft" style={{ color: "white" }}
                                                    data-animation-delay="1s">Up To 50% Off</h2>

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
                                        <img src="/assets/images/shop_banner_img7.jpg" alt="shop_banner_img7" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="sale-banner mb-3 mb-md-4">
                                    <a className="hover_effect1" href="#">
                                        <img src="/assets/images/shop_banner_img8.jpg" alt="shop_banner_img8" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="sale-banner mb-3 mb-md-4">
                                    <a className="hover_effect1" href="#">
                                        <img src="/assets/images/shop_banner_img9.jpg" alt="shop_banner_img9" />
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

                                    </ul>
                                </div>
                                <div className="tab_slider tab-content">
                                    <div className="tab-pane fade show active" id="arrival" role="tabpanel"
                                        aria-labelledby="arrival-tab">
                                        <div className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                                            data-loop="true" data-margin="20"
                                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>


                                            {
                                                dataNhan.map((item, i) => {
                                                    return <div className="item">
                                                        <div className="product_wrap">
                                                            <div className="product_img">
                                                                <a href={item.link}>
                                                                    <img src={item.image} alt={item.name} />
                                                                    <img className="product_hover_img" src={item.anhmoi}
                                                                        alt={item.name} />
                                                                </a>
                                                                <div className="product_action_box">
                                                                    <ul className="list_none pr_action_btn">
                                                                        <li onClick={() => addCourseToCartFunction(item)} class="add-to-cart"><a href="#"><i
                                                                            class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                        <li onClick={() => addCourseToCartFunction(item)} ><a href="#" class="popup-ajax"><i
                                                                            class="icon-shuffle"></i></a></li>
                                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="product_info">
                                                                <h6 className="product_title"><a href={item.link}>{item.name}</a></h6>
                                                                <div className="product_price">
                                                                    <span className="price">${item.newprice}</span>
                                                                    <del>$95.00</del>
                                                                    <div className="on_sale">
                                                                        <span>{item.view}% Off</span>
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
                                                })}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="sellers" role="tabpanel" aria-labelledby="sellers-tab">
                                        <div className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                                            data-loop="true" data-margin="20"
                                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>

                                            {
                                                dataVong.map((item, i) => {
                                                    return <div className="item">
                                                        <div className="product_wrap">
                                                            <div className="product_img">
                                                                <a href={item.link}>
                                                                    <img src={item.image} alt={item.name} />
                                                                    <img className="product_hover_img" src={item.anhmoi}
                                                                        alt={item.name} />
                                                                </a>
                                                                <div className="product_action_box">
                                                                    <ul className="list_none pr_action_btn">
                                                                        <li onClick={() => addCourseToCartFunction(item)} class="add-to-cart"><a href="#"><i
                                                                            class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                        <li onClick={() => addCourseToCartFunction(item)} ><a href="#" class="popup-ajax"><i
                                                                            class="icon-shuffle"></i></a></li>
                                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="product_info">
                                                                <h6 className="product_title"><a href={item.link}>{item.name}</a></h6>
                                                                <div className="product_price">
                                                                    <span className="price">${item.newprice}</span>
                                                                    <del>$95.00</del>
                                                                    <div className="on_sale">
                                                                        <span>{item.view}% Off</span>
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
                                                })}

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                        <div className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
                                            data-loop="true" data-margin="20"
                                            data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'>
                                            {
                                                dataVongco.map((item, i) => {
                                                    return <div className="item">
                                                        <div className="product_wrap">
                                                            <div className="product_img">
                                                                <a href={item.link}>
                                                                    <img src={item.image} alt={item.name} />
                                                                    <img className="product_hover_img" src={item.anhmoi}
                                                                        alt={item.name} />
                                                                </a>
                                                                <div className="product_action_box">
                                                                    <ul className="list_none pr_action_btn">
                                                                        <li onClick={() => addCourseToCartFunction(item)} class="add-to-cart"><a href="#"><i
                                                                            class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                        <li onClick={() => addCourseToCartFunction(item)} ><a href="#" class="popup-ajax"><i
                                                                            class="icon-shuffle"></i></a></li>
                                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="product_info">
                                                                <h6 className="product_title"><a href={item.link}>{item.name}</a></h6>
                                                                <div className="product_price">
                                                                    <span className="price">${item.newprice}</span>
                                                                    <del>$95.00</del>
                                                                    <div className="on_sale">
                                                                        <span>{item.view}% Off</span>
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
                                                })}
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
                                        <img src="/assets/images/shop_banner_img11.png" alt="shop_banner_img11" />
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
                                    {
                                        Tonghop.map((item, i) => {
                                            return <div className="item">
                                                <div className="product_wrap">
                                                    <div className="product_img">
                                                        <a href={item.link}>
                                                            <img src={item.image} alt={item.name} />
                                                            <img className="product_hover_img" src={item.anhmoi}
                                                                alt={item.name} />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li onClick={() => addCourseToCartFunction(item)} class="add-to-cart"><a href="#"><i
                                                                    class="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li onClick={() => addCourseToCartFunction(item)} ><a href="#" class="popup-ajax"><i
                                                                    class="icon-shuffle"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href={item.link}>{item.name}</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">${item.newprice}</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>{item.view}% Off</span>
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
                                        })}
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
                                                <img src="/assets/anh/avata/tran-thanh.webp" alt="user_img1" />
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
                                                <img src="/assets/anh/avata/avata-son-tung.jpg" alt="user_img2" />
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
                                                <img src="/assets/anh/avata/avata-g-dragon.jpg" alt="user_img3" />
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
                                                <img src="/assets/anh/avata/avata-chi-pu.webp" alt="user_img4" />
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
                                            <img src="/assets/anh/last-new/last-new-1.jpg" alt="el_blog_img1" />
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
                                            <img src="/assets/anh/last-new/last-new-2.jpg" alt="el_blog_img2" />
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
                                            <img src="/assets/anh/last-new/last-new-3.jpg" alt="el_blog_img2" />
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
                                            <img src="/assets/images/cl_logo1.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="/assets/images/cl_logo2.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="/assets/images/cl_logo3.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="/assets/images/cl_logo4.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="/assets/images/cl_logo5.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="/assets/images/cl_logo6.png" alt="cl_logo" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cl_logo">
                                            <img src="/assets/images/cl_logo7.png" alt="cl_logo" />
                                        </div>
                                    </div>
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