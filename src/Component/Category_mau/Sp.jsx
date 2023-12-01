import React from 'react'

function Sp(props) {
    return (
        <div>
            <div class="col-md-12 col-12">
                <div class="product">
                    <div class="product_img">
                        <a href={props.link}>
                            <img src={props.image} alt="product_img1" />
                        </a>
                        <div class="product_action_box">
                            <ul class="list_none pr_action_btn">
                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i class="icon-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="product_info">
                        <h6 class="product_title"><a href={props.link}>{props.name}</a></h6>
                        <div class="product_price">
                            <span class="price">${props.newprice}</span>
                            <del>$55.25</del>
                            <div class="on_sale">
                                <span>35% Off</span>
                            </div>
                        </div>
                        <div class="rating_wrap">

                            <span class="rating_num">(21)</span>
                        </div>
                        <div class="pr_desc">
                            <p>{props.content}</p>
                        </div>

                        <div class="list_product_action_box">
                            <ul class="list_none pr_action_btn">
                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                                <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>

                                <li><a href="#"><i class="icon-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Sp