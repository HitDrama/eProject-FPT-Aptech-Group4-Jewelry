import React from 'react'
import Nhan_Sok from '../../../json/sokolov/nhan.json'
import Sp from './Sp'

function Brand_Sok_nhan() {
    return (
        <div>
            <div class="breadcrumb_section bg_gray page-title-mini">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="page-title">
                                <h1>Shop List</h1>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ol class="breadcrumb justify-content-md-end">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active">Product</li>
                                <li class="breadcrumb-item active">Sokolov</li>
                                <li class="breadcrumb-item active">Ring</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main_content">


                <div class="section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="row align-items-center mb-4 pb-1">
                                    <div class="col-12">
                                        <div class="product_header">
                                            <div class="product_header_left">
                                                <div class="custom_select">
                                                    <select class="form-control form-control-sm">
                                                        <option value="order" href="#">Default sorting</option>
                                                        <option value="popularity">Sort by popularity</option>
                                                        <option value="date">Sort by newness</option>
                                                        <option value="price" href="#">Sort by price: low to high</option>
                                                        <option value="price-desc">Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="product_header_right">
                                                <div class="products_view">
                                                    <a class="shorting_icon grid"><i class="ti-view-grid"></i></a>
                                                    <a class="shorting_icon list active"><i class="ti-layout-list-thumb"></i></a>
                                                </div>
                                                <div class="custom_select">
                                                    <select class="form-control form-control-sm">
                                                        <option value="">Showing</option>
                                                        <option value="9">9</option>
                                                        <option value="12">12</option>
                                                        <option value="18">18</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row shop_container list">
                                    {
                                        Nhan_Sok.map((items, i) => {

                                            return <Sp name={items.name} image={items.image} newprice={items.newprice} content={items.content} link={items.link} view={items.view} />
                                        })
                                    }

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="section bg_default small_pt small_pb">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="heading_s1 mb-md-0 heading_light">
                                    <h3>Subscribe Our Newsletter</h3>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="newsletter_form">
                                    <form>
                                        <input type="text" required="" class="form-control rounded-0" placeholder="Enter Email Address" />
                                        <button type="submit" class="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
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

export default Brand_Sok_nhan