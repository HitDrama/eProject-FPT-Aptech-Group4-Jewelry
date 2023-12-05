import React from 'react'
import { useParams } from 'react-router-dom'
import Prodetail from '../../../Category.json'

function Daychuyen8({ addCourseToCartFunction }) {
    const { id } = useParams();
    let items = Prodetail.filter((items) => items.id == id);
    items = items[0];

    return (
        <div>
            <div>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                                <div className="product-image">
                                    <div className="product_img_box">
                                        <img id="product_img" src={items.image} alt={items.name} />
                                        <a href="#" className="product_img_zoom" title="Zoom">
                                            <span className="linearicons-zoom-in"></span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="pr_detail">
                                    <div className="product_description">
                                        <h4 className="product_title"><a href="#">{items.name}
                                        </a></h4>
                                        <div className="product_price">
                                            <span className="price">${items.newprice}</span>
                                            <del>$899.00</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{ width: '80%' }}></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>The store is committed to fully processing jewelry. For any needs, customers can contact us.</p>
                                        </div>
                                        <div className="product_sort_info">
                                            <ul>
                                                <li><i className="linearicons-shield-check"></i> 1 Year  Brand Warranty</li>
                                                <li><i className="linearicons-sync"></i> 30 Day Return Policy</li>
                                                <li><i className="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="cart_extra">

                                        <button onClick={() => addCourseToCartFunction(items)} class="btn btn-fill-out btn-addtocart" type="button" ><i class="icon-basket-loaded"></i> Add to cart</button>

                                    </div>
                                    <br />
                                    <a download="" href={items.download} target="_blank">Download Information Product  <i className="ti-download"></i></a>

                                    <div className="product_share">
                                        <span>Share:</span>
                                        <ul className="social_icons">
                                            <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                            <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                            <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                                            <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                            <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="large_divider clearfix"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-style3">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description" role="tab" aria-controls="Description" aria-selected="true">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Additional info</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews" role="tab" aria-controls="Reviews" aria-selected="false">Reviews (2)</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content shop_info_tab">
                                        <div className="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                                            <p>{items.content}</p>
                                        </div>
                                        <div className="tab-pane fade" id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                                            <table className="table table-bordered">
                                                <tr>
                                                    <td>Capacity</td>
                                                    <td>{items.weight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gemstone</td>
                                                    <td>{items.type_stone}</td>
                                                </tr>

                                                <tr>
                                                    <td>Type</td>
                                                    <td>{items.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Material</td>
                                                    <td>{items.material}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
                                            <div className="comments">
                                                <h5 className="product_tab_title">2 Review For <span>Blue Dress For Woman</span></h5>
                                                <ul className="list_none comment_list mt-4">
                                                    <li>
                                                        <div className="comment_img">
                                                            <img src="/assets/images/user1.jpg" alt="user1" />
                                                        </div>
                                                        <div className="comment_block">
                                                            <div className="rating_wrap">
                                                                <div className="rating">
                                                                    <div className="product_rate" style={{ width: '80%' }}></div>
                                                                </div>
                                                            </div>
                                                            <p className="customer_meta">
                                                                <span className="review_author">Alea Brooks</span>
                                                                <span className="comment-date">March 5, 2018</span>
                                                            </p>
                                                            <div className="description">
                                                                <p>Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="comment_img">
                                                            <img src="/assets/images/user2.jpg" alt="user2" />
                                                        </div>
                                                        <div className="comment_block">
                                                            <div className="rating_wrap">
                                                                <div className="rating">
                                                                    <div className="product_rate" style={{ width: '60%' }}></div>
                                                                </div>
                                                            </div>
                                                            <p className="customer_meta">
                                                                <span className="review_author">Grace Wong</span>
                                                                <span className="comment-date">June 17, 2018</span>
                                                            </p>
                                                            <div className="description">
                                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="review_form field_form">
                                                <h5>Add a review</h5>
                                                <form className="row mt-3">
                                                    <div className="form-group col-12 mb-3">
                                                        <div className="star_rating">
                                                            <span data-value="1"><i className="far fa-star"></i></span>
                                                            <span data-value="2"><i className="far fa-star"></i></span>
                                                            <span data-value="3"><i className="far fa-star"></i></span>
                                                            <span data-value="4"><i className="far fa-star"></i></span>
                                                            <span data-value="5"><i className="far fa-star"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-12 mb-3">
                                                        <textarea required="required" placeholder="Your review *" className="form-control" name="message" rows="4"></textarea>
                                                    </div>
                                                    <div className="form-group col-md-6 mb-3">
                                                        <input required="required" placeholder="Enter Name *" className="form-control" name="name" type="text" />
                                                    </div>
                                                    <div className="form-group col-md-6 mb-3">
                                                        <input required="required" placeholder="Enter Email *" className="form-control" name="email" type="email" />
                                                    </div>

                                                    <div className="form-group col-12 mb-3">
                                                        <button type="submit" className="btn btn-fill-out" name="submit" value="Submit">Submit Review</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="small_divider"></div>
                                <div className="divider"></div>
                                <div className="medium_divider"></div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div >
    )
}

export default Daychuyen8