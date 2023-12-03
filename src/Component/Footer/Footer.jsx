import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg_gray">
                <div className="footer_top small_pt pb_20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="widget">
                                    <div className="footer_logo">
                                        <a href="#"><img src="assets/anh/logo/Logo-De_Beer_Footer-1.png" alt="logo" /></a>
                                    </div>
                                    <p className="mb-3">If you have any questions or concerns, you can come to our address or send them via email</p>
                                    <ul className="contact_info">
                                        <li>
                                            <i className="ti-location-pin"></i>
                                            <p>123 Street, Old Trafford, NewYork, USA</p>
                                        </li>
                                        <li>
                                            <i className="ti-email"></i>
                                            <a href="mailto:info@sitename.com">info@sitename.com</a>
                                        </li>
                                        <li>
                                            <i className="ti-mobile"></i>
                                            <p>+ 457 789 789 65</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="widget">
                                    <h6 className="widget_title">Useful Links</h6>
                                    <ul className="widget_links">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/Aboutus">About Us</a></li>
                                        <li><a href="/Contact">Contact Us</a></li>
                                        <li><a href="/Feedback">Feedback</a></li>
                                        <li><a href="/Gallery">Gallery</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="widget">
                                    <h6 className="widget_title">Download App</h6>
                                    <ul className="app_list">
                                        <li><a href="#"><img src="assets/images/f1.png" alt="f1" /></a></li>
                                        <li><a href="#"><img src="assets/images/f2.png" alt="f2" /></a></li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h6 className="widget_title">Social</h6>
                                    <ul className="social_icons">
                                        <li><a href="#" className="sc_facebook"><i className="ion-social-facebook"></i></a></li>
                                        <li><a href="#" className="sc_twitter"><i className="ion-social-twitter"></i></a></li>
                                        <li><a href="#" className="sc_google"><i className="ion-social-googleplus"></i></a></li>
                                        <li><a href="#" className="sc_youtube"><i className="ion-social-youtube-outline"></i></a></li>
                                        <li><a href="#" className="sc_instagram"><i className="ion-social-instagram-outline"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle_footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="shopping_info">
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <div className="icon_box icon_box_style2">
                                                <div className="icon">
                                                    <i className="flaticon-shipped"></i>
                                                </div>
                                                <div className="icon_box_content">
                                                    <h5>Free Delivery</h5>
                                                    <p>
                                                        Fast, free shipping still available for orders over $500.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="icon_box icon_box_style2">
                                                <div className="icon">
                                                    <i className="flaticon-money-back"></i>
                                                </div>
                                                <div className="icon_box_content">
                                                    <h5>30 Day Returns Guarantee</h5>
                                                    <p>30-day return policy if found unsatisfactory or error from the company.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="icon_box icon_box_style2">
                                                <div className="icon">
                                                    <i className="flaticon-support"></i>
                                                </div>
                                                <div className="icon_box_content">
                                                    <h5>27/4 Online Support</h5>
                                                    <p>Staff responds quickly, on duty 24/7.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_footer border-top-tran">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-center text-md-start mb-md-0">© 2020 All Rights Reserved by Bestwebcreator</p>
                            </div>
                            <div className="col-lg-6">
                                <ul className="footer_payment text-center text-md-end">
                                    <li><a href="#"><img src="assets/images/visa.png" alt="visa" /></a></li>
                                    <li><a href="#"><img src="assets/images/discover.png" alt="discover" /></a></li>
                                    <li><a href="#"><img src="assets/images/master_card.png" alt="master_card" /></a></li>
                                    <li><a href="#"><img src="assets/images/paypal.png" alt="paypal" /></a></li>
                                    <li><a href="#"><img src="assets/images/amarican_express.png" alt="amarican_express" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer