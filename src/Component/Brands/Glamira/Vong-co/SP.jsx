import React from 'react'

function SP(props) {
    return (
        <div>
            <div className="col-lg-12 col-md-4 col-6">
                <div className="product">
                    <div className="product_img">

                        <a href={props.link}>
                            <img src={props.image} alt="product_img1" />
                        </a>
                        <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="product_info">
                        <h6 className="product_title"><a href={props.link}>{props.name}</a></h6>
                        <div className="product_price">
                            <span className="price">${props.newprice}</span>
                            <del>$55.25</del>

                        </div>
                        <div className="rating_wrap">
                            <div className="rating">
                                {/* <div className="product_rate" style="width:80%"></div> */}
                            </div>
                            <span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SP