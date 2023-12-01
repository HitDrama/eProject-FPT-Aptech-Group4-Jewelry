import React, { useState } from 'react'
import Data_category from '../Category.json';
import Sp from './Sp';
import { useParams } from 'react-router-dom';


function Mau() {
    const { id } = useParams();
    let items = Data_category.filter((items) => items.category == id);

    const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
    const recordsPerPage = 6; //so san pham tren 1 trang
    const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
    const firstIndex = lastIndex - recordsPerPage;  //trang dau tien
    const records = items.slice(firstIndex, lastIndex);   //tong dong du lieu
    const npage = Math.ceil(items.length / recordsPerPage); //so trang
    const numbers = [...Array(npage + 1).keys()].slice(1);


    const [nameFilter, setNameFilter] = useState('');
    const filteredItems = items.filter(item => {
        const nameMatches = item.name.toLowerCase().includes(nameFilter.toLowerCase());
        return nameMatches;
    });


    return (
        <div>


            <div class="container">
                <div class="row mt-3 mb-3">
                    <aside class="col-md-3">
                        <div class="card">
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true"
                                        class="">
                                        <h6 class="title">Product type</h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_1">
                                    <div class="card-body">
                                        <form class="pb-3">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search" value={nameFilter} onChange={e => setNameFilter(e.target.value)} />
                                                <div class="input-group-append">
                                                    <button class="btn btn-light" type="button"><i
                                                        class="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                        </form>

                                        <ul class="list-menu">
                                            <li><a href="#">People </a></li>
                                            <li><a href="#">Watches </a></li>
                                            <li><a href="#">Cinema </a></li>
                                            <li><a href="#">Clothes </a></li>
                                            <li><a href="#">Home items </a></li>
                                            <li><a href="#">Animals</a></li>
                                            <li><a href="#">People </a></li>
                                        </ul>

                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true"
                                        class="">
                                        <h6 class="title">Brands </h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_2">
                                    <div class="card-body">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Mercedes
                                                <b class="badge badge-pill badge-light float-right">120</b>
                                            </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Toyota
                                                <b class="badge badge-pill badge-light float-right">15</b>
                                            </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Mitsubishi
                                                <b class="badge badge-pill badge-light float-right">35</b>
                                            </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Nissan
                                                <b class="badge badge-pill badge-light float-right">89</b>
                                            </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Honda
                                                <b class="badge badge-pill badge-light float-right">30</b>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true"
                                        class="">
                                        <h6 class="title">Price range </h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_3">
                                    <div class="card-body">
                                        <input type="range" class="custom-range" min="0" max="100" name="" />
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Min</label>
                                                <input class="form-control" placeholder="$0" type="number" />
                                            </div>
                                            <div class="form-group text-right col-md-6">
                                                <label>Max</label>
                                                <input class="form-control" placeholder="$1,0000" type="number" />
                                            </div>
                                        </div>
                                        <button class="btn btn-block btn-primary">Apply</button>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true"
                                        class="">
                                        <h6 class="title">Sizes </h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_4">
                                    <div class="card-body">
                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> XS </span>
                                        </label>

                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> SM </span>
                                        </label>

                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> LG </span>
                                        </label>

                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> XXL </span>
                                        </label>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </aside>
                    <main class="col-md-9">
                        <header class="mb-4 pb-3">
                            <div class="cate-record mt-3 mb-2 float-start">32 Items found </div>
                            <select class="cate-filter-select  mt-4 mb-2 form-control float-end">
                                <option>Latest items</option>
                                <option>Trending</option>
                                <option>Most Popular</option>
                                <option>Cheapest</option>
                            </select>
                            <div class="clearfix"></div>
                            <div class="row"></div>
                        </header>
                        <div class="row shop_container list">
                            {
                                records.map((items, index) => {
                                    return <Sp name={items.name} image={items.image} newprice={items.newprice} content={items.content} link={items.link} />
                                })

                            }
                        </div>
                        <nav class="mt-4" aria-label="Page navigation sample">
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
                                    <a href='#' className='page-link' onClick={nextPage}>Prev</a>
                                </li>
                            </ul>
                        </nav>
                    </main>
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



export default Mau