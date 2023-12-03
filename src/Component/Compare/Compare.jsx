import React from 'react'

function Compare({ cartCourses, deleteCourseFromCartFunction, setCartCourses }) {

    function totalAmountCalculationFunction() {
        const totalPrice = cartCourses.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );

        return totalPrice;
    }

    return (
        <div>
            <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
                <h2>List Compare</h2>
                {cartCourses.length === 0 ? (
                    <p className="empty-cart">
                        You add products to compare</p>
                ) : (
                    <div>
                        <ul>
                            {cartCourses.map((item) => (
                                <li key={item.product.id} className="cart-item">
                                    <div>
                                        <div className="section">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="compare_box">
                                                            <div className="table-responsive">
                                                                <table className="table table-bordered text-center">
                                                                    <tbody>
                                                                        <tr className="pr_image">
                                                                            <td className="row_title">Product Image</td>
                                                                            <td className="row_img"><img src={item.product.image} alt={item.product.name} /></td>

                                                                        </tr>
                                                                        <tr className="pr_title">
                                                                            <td className="row_title">Product Name</td>
                                                                            <td className="product_name"><a href="shop-product-detail.html">{item.product.name}</a></td>

                                                                        </tr>
                                                                        <tr className="pr_price">
                                                                            <td className="row_title">Price</td>
                                                                            <td className="product_price"><span className="price">${item.product.newprice}</span></td>

                                                                        </tr>


                                                                        <tr className="description">
                                                                            <td className="row_title">Brand</td>
                                                                            <td className="row_text"><p> {item.product.bard} </p></td>

                                                                        </tr>

                                                                        <tr className="pr_size">
                                                                            <td className="row_title">Material</td>
                                                                            <td className="row_size"><span>{item.product.material}</span></td>

                                                                        </tr>

                                                                        <tr className="pr_weight">
                                                                            <td className="row_title">Weight</td>
                                                                            <td className="row_weight">{item.product.weight}</td>

                                                                        </tr>
                                                                        <tr className="pr_dimensions">
                                                                            <td className="row_title">Type</td>
                                                                            <td className="row_dimensions">{item.product.type}</td>

                                                                        </tr>
                                                                        <tr className="pr_remove">
                                                                            <td className="row_title"></td>
                                                                            <td className="row_remove">
                                                                                <a href="#" onClick={() => deleteCourseFromCartFunction(item.product)}><span>Remove</span> <i className="fa fa-times"></i></a>
                                                                            </td>

                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Compare