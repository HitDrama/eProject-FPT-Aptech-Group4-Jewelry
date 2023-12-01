import React from 'react'

function Sp_nhan_Glamira(props) {
    return (
        <div>
            <div class="col-lg-12 col-md-4 col-6">
                <div class="product">
                    <div class="product_img">

                        <a href={props.link}>
                            <img src={props.image} alt="product_img1" />
                        </a>
                        <div class="product_action_box">
                            <ul class="list_none pr_action_btn">
                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="product_info">
                        <h6 class="product_title"><a href={props.link}>{props.name}</a></h6>
                        <div class="product_price">
                            <span class="price">${props.newprice}</span>
                            <del>$55.25</del>

                        </div>
                        <div class="rating_wrap">
                            <div class="rating">
                                {/* <div class="product_rate" style="width:80%"></div> */}
                            </div>
                            <span class="rating_num">(21)</span>
                        </div>
                        <div class="pr_desc">
                            <p>{props.content}</p>
                        </div>

                        <div class="list_product_action_box">
                            <ul class="list_none pr_action_btn">
                                <li class="add-to-cart"><a href="#"><i class="icon-magnifier-add"></i> Add To Cart</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sp_nhan_Glamira