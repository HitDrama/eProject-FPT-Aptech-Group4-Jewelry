import React, { useState, useEffect } from "react";
import CateProduct from '../Category.json';
import { Link, useParams } from 'react-router-dom';
import Catmenu from '../Brand.json';



function Category({ courses,
    filterCourseFunction,
    addCourseToCartFunction }) {

    const [items, setItems] = useState(CateProduct);
    const Keyparam = useParams();
    const applyFilters = () => {

        //load san pham category theo id
        if (Keyparam.id) {
            const itemsbyid = CateProduct.filter(temp => temp.bard[0].id.toString() === Keyparam.id);
            setItems(itemsbyid);
        }
        //

    }

    // const itemsbyid = (Keyparam.id === undefined ? CateProduct : CateProduct.filter(temp => temp.cate[0].id.toString() === Keyparam.id));


    //tao usestate tim theo ten
    const [sname, setName] = useState('');
    const [checked, setChecked] = useState([]);


    //khi nguoi dung check brand

    var updatedList = [...checked];
    const handleCheckedBrand = (event, id) => {
        const itemsbybrand = CateProduct.filter(items => {
            return items.brand[0].id == id && items.bard[0].id == Keyparam.id;
        });
        setItems(itemsbybrand);
    };

    //load lại trang
    useEffect(() => {
        applyFilters();
    }, [setChecked]);


    // const Keyparam = useParams();
    // const items = (Keyparam.id === undefined ? CateProduct : CateProduct.filter(temp => temp.bard[0].id.toString() === Keyparam.id));

    const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
    const recordsPerPage = 6; //so san pham tren 1 trang
    const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
    const firstIndex = lastIndex - recordsPerPage;  //trang dau tien
    const records = items.slice(firstIndex, lastIndex);   //tong dong du lieu
    const npage = Math.ceil(items.length / recordsPerPage); //so trang
    const numbers = [...Array(npage + 1).keys()].slice(1);






    return (


        <div>
            <div className="breadcrumb_section bg_gray page-title-mini">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h1>Shop List Left Sidebar</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ol className="breadcrumb justify-content-md-end">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Categories</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_content">


                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
                                <div className="sidebar">
                                    <div className="widget">
                                        <h5 className="widget_title">Search</h5>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search" onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="widget">
                                        <h5 className="widget_title">Categories</h5>
                                        <ul className="widget_categories">
                                            <li><Link to="/category-glamira"><span className="categories_name">  GLAMIRA</span><span className="categories_num">(21)</span></Link></li>
                                            <li><Link to="/category-tierra"><span className="categories_name">TIERRA</span><span className="categories_num">(10)</span></Link></li>
                                            <li><Link to="/category-sokolov"><span className="categories_name">  SOKOLOV</span><span className="categories_num">(15)</span></Link></li>

                                        </ul>
                                    </div>

                                    <div className="widget">
                                        <h5 className="widget_title">Product</h5>
                                        <ul className="list_brand">
                                            <li>
                                                <div className="custome-checkbox">
                                                    {Catmenu.map((citem, i) => (
                                                        <li>
                                                            <a href={`/category/${citem.id}`}>{citem.name} </a>
                                                        </li>
                                                    ))}
                                                </div>
                                            </li>


                                        </ul>
                                    </div>


                                    <div className="widget">
                                        <div className="shop_banner">
                                            <div className="banner_img overlay_bg_20">
                                                <img src="/assets/anh/img-category.png" alt="sidebar_banner_img" />
                                            </div>
                                            <div className="shop_bn_content2 text_white">
                                                <h5 className="text-uppercase shop_subtitle">New Collection</h5>
                                                <h3 className="text-uppercase shop_title">Sale 30% Off</h3>
                                                <a href="#" className="btn btn-white rounded-0 btn-sm text-uppercase">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">

                                <div className="row shop_container list">
                                    {
                                        records
                                            .filter((timitem) => {
                                                return sname.toLowerCase() === ''
                                                    ? timitem
                                                    : timitem.name.toLowerCase().includes(sname);
                                            })
                                            .map((items, index) => {
                                                return <div className="col-md-12 col-12">
                                                    <div className="product" key={items.id}>
                                                        <div className="product_img">
                                                            <a href={items.link}>
                                                                <img src={items.image} alt="product_img1" />
                                                            </a>

                                                        </div>
                                                        <div className="product_info">
                                                            <h6 className="product_title"><a href={items.link}>{items.name}</a></h6>
                                                            <div className="product_price">
                                                                <span className="price">${items.newprice}</span>
                                                                <del>$55.25</del>
                                                                <div className="on_sale">
                                                                    <span>35% Off</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating_wrap">
                                                                <div className="rating">
                                                                    <div classNameName="product_rate" style={{ width: "80%" }}></div>
                                                                </div>
                                                                <span className="rating_num">(21)</span>
                                                            </div>
                                                            <div className="pr_desc">
                                                                <p>{items.content}</p>
                                                            </div>

                                                            <div className="list_product_action_box">
                                                                <ul className="list_none pr_action_btn">
                                                                    <button onClick={() => addCourseToCartFunction(items)}>
                                                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                    </button>
                                                                    <li><a className="popup-ajax" href="#"><i className="icon-shuffle" onClick={() => addCourseToCartFunction(items)}></i></a></li>

                                                                    <li><a href="#"><i className="icon-heart"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })

                                    }
                                </div>
                                <ul className='pagination mt-4'>
                                    <li className='page-item'>
                                        <a href='#' className='page-link' onClick={prePage}>Prev</a>
                                    </li>
                                    {
                                        numbers.map((n, i) => (
                                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}> <a href='#' className='page-link'
                                                onClick={() => changeCPage(n)} >{n}</a>
                                            </li>
                                        ))
                                    }
                                    <li className='page-item'>
                                        <a href='#' className='page-link' onClick={nextPage}>Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    //ham cac trang
    function changeCPage(id) {
        setCurrentPage(id);
    }
    //ham trang tiep theo
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }
}

export default Category