import React from 'react'
import Vong_tay_Tierra from '../../../json/tierra/vontay.json'
import Sp from './Sp'

function Brand_Tierra_vongtay() {
    return (
        <div>
            <div className="breadcrumb_section bg_gray page-title-mini">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h1>List of products</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ol className="breadcrumb justify-content-md-end">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Product</li>
                                <li className="breadcrumb-item active">Tierra</li>
                                <li className="breadcrumb-item active">Bracelet</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_content">


                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row align-items-center mb-4 pb-1">
                                    <div className="col-12">
                                        <div className="product_header">
                                            <div className="product_header_left">
                                                <div className="custom_select">
                                                    <select className="form-control form-control-sm">
                                                        <option value="order" href="#">Default sorting</option>
                                                        <option value="popularity">Sort by popularity</option>
                                                        <option value="date">Sort by newness</option>
                                                        <option value="price" href="#">Sort by price: low to high</option>
                                                        <option value="price-desc">Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="product_header_right">
                                                <div className="products_view">
                                                    <a className="shorting_icon grid"><i className="ti-view-grid"></i></a>
                                                    <a className="shorting_icon list active"><i className="ti-layout-list-thumb"></i></a>
                                                </div>
                                                <div className="custom_select">
                                                    <select className="form-control form-control-sm">
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
                                <div className="row shop_container list">
                                    {
                                        Vong_tay_Tierra.map((items, i) => {

                                            return <Sp name={items.name} image={items.image} newprice={items.newprice} content={items.content} link={items.link} view={items.view} />
                                        })
                                    }

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="section bg_default small_pt small_pb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="heading_s1 mb-md-0 heading_light">
                                    <h3>Subscribe Our Newsletter</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="newsletter_form">
                                    <form>
                                        <input type="text" required="" className="form-control rounded-0" placeholder="Enter Email Address" />
                                        <button type="submit" className="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
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

export default Brand_Tierra_vongtay