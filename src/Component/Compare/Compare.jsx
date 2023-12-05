import React from 'react'

function Compare({ cartCourses, deleteCourseFromCartFunction, setCartCourses }) {

    //    function totalAmountCalculationFunction() {
    //         const totalPrice = cartCourses.reduce(
    //             (total, item) => total + item.product.price * item.quantity,
    //             0
    //         );

    //         return totalPrice;
    //     } 

    return (
        <div>
            <div className="breadcrumb_section bg_gray page-title-mini">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h1>Compare</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ol className="breadcrumb justify-content-md-end">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item active">Compare</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_content">


                <div className="section">
                    <div className="container">
                        <div className="row">


                            {

                                cartCourses.map((item, i) => (

                                    <div className="col-md-3">
                                        <div className="compare_box">
                                            <div className="table-responsive">
                                                <table className="table table-bordered text-center">
                                                    <tbody>
                                                        <tr className="pr_image">

                                                            <td className="row_img"><img src={item.product.image} alt={item.product.name} /></td>

                                                        </tr>
                                                        <tr className="pr_title">

                                                            <td className="product_name"><a href={item.product.link}>{item.product.name}</a></td>

                                                        </tr>
                                                        <tr className="pr_price">
                                                            <td className="product_price"><span className="price">${item.product.newprice}</span></td>

                                                        </tr>
                                                        <tr className="pr_rating">

                                                            <td>
                                                                <div className="rating_wrap">
                                                                    <span className="rating_num">{item.product.content}</span>
                                                                </div>
                                                            </td>

                                                        </tr>
                                                        <tr className="pr_remove">

                                                            <td className="row_remove">
                                                                <a href="#" onClick={() => deleteCourseFromCartFunction(item.product)}><span>Remove</span> <i className="fa fa-times"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr className="description">

                                                            <td className="row_text"><p>{item.product.type}</p></td>
                                                        </tr>


                                                        <tr className="pr_size">

                                                            <td className="row_size"><span>{item.product.type_stone}</span></td>

                                                        </tr>
                                                        <tr className="pr_size">

                                                            <td className="row_size"><span>{item.product.material}</span></td>

                                                        </tr>
                                                        <tr className="pr_stock">
                                                            <td className="row_title">{item.product.bard[0].name}</td>

                                                        </tr>




                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                ))

                            }

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

export default Compare