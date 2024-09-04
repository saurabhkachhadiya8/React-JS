import React from 'react'

const PopularProduct = () => {
    return (
        <section style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center" style={{ margin: '0 auto' }}>
                        <h2 className='fw-bolder mb-3'>Popular Products</h2>
                        <p className='text-secondary mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="col-lg-12">
                                    <ul className='ps-0 mb-4'>
                                        <li className='d-flex align-items-center justify-content-between fw-bolder text-success border rounded p-3 mb-2 cursor-pointer' style={{ fontSize: '15px', backgroundColor: '#f1f1f1' }}>All <i className="fa-solid fa-arrow-right"></i></li>
                                        <li className='d-flex align-items-center justify-content-between fw-bolder border rounded p-3 mb-2 cursor-pointer' style={{ fontSize: '15px', backgroundColor: '#f1f1f1' }}>Snack <i className="fa-solid fa-arrow-right"></i></li>
                                        <li className='d-flex align-items-center justify-content-between fw-bolder border rounded p-3 mb-2 cursor-pointer' style={{ fontSize: '15px', backgroundColor: '#f1f1f1' }}>Vegetable <i className="fa-solid fa-arrow-right"></i></li>
                                        <li className='d-flex align-items-center justify-content-between fw-bolder border rounded p-3 mb-2 cursor-pointer' style={{ fontSize: '15px', backgroundColor: '#f1f1f1' }}>Fruit <i className="fa-solid fa-arrow-right"></i></li>
                                        <li className='d-flex align-items-center justify-content-between fw-bolder border rounded p-3 mb-2 cursor-pointer' style={{ fontSize: '15px', backgroundColor: '#f1f1f1' }}>Bakery <i className="fa-solid fa-arrow-right"></i></li>
                                    </ul>
                                </div>
                                <div className="col-lg-12">
                                    <div className="popular-product-banner rounded position-relative overflow-hidden" style={{ maxHeight: '500px' }}>
                                        <img src="./img/popular-product-banner.jpg" alt="popular-product-banner.jpg" width={'100%'} />
                                        <div className="position-absolute" style={{ top: '12%', left: '8%' }}>
                                            <h3 className='fs-2 text-white' style={{ opacity: '0.9' }}>Juicy</h3>
                                            <h2 className='fs-1 fw-bold text-warning' style={{ opacity: '0.7', letterSpacing: '1.5px' }}>Fruits</h2>
                                            <p className='fw-bolder text-white' style={{ opacity: '0.8' }}>100% Natural</p>
                                            <button className='btn btn-success'>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-1.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-2.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-3.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-4.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-5.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-6.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-7.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="product-card border rounded" style={{ padding: '12px' }}>
                                            <div className="card-img border rounded position-relative">
                                                <img src="./img/pop-pro-8.jpg" alt="pop-pro-1.jpg" width={'100%'} className='rounded' />
                                                <a href="#">
                                                    <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                </a>
                                            </div>
                                            <div className="card-body text-center pt-3">
                                                <a href="#">
                                                    <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>Vegetables</span>
                                                </a>
                                                <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                    <div>
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-solid fa-star pe-1" />
                                                        <i className="fa-regular fa-star pe-2" />
                                                        <span className='text-secondary'>( 4.5 )</span>
                                                    </div>
                                                </div>
                                                <a href='#' className='text-black fw-bolder'>Fresh organic villa farm lomon 500gm pack</a>
                                                <p className='m-0 pt-3 text-success fw-bold'>$120.25 <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>$123.25</del></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularProduct