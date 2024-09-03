import React from 'react'

const Slider = () => {
    return (
        <section>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ background: 'url(../img/banner1.jpg) no-repeat center' }}>
                        <div className="container py-5">
                            <div className="row py-5">
                                <div className="sliderContent col-lg-4 px-0 py-5">
                                    <h5 className='fw-bold'><span className='text-success text-decoration-underline'>100%</span> Organic Fruits</h5>
                                    <h1 className='fw-bold pt-2 pb-4' style={{ fontSize: '55px', letterSpacing: '1.5px' }}>Explore fresh & juicy fruits.</h1>
                                    <p className='text-secondary'>Our fruits are grown in the best conditions to ensure the highest quality and taste.</p>
                                    <button className='btn btn-success px-4 py-2 fw-bold mt-4'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ background: 'url(../img/banner2.jpg) no-repeat center' }}>
                        <div className="container">
                            <div className="row">
                                <div className="sliderContent col-lg-4 px-0 py-5">
                                    <h5 className='fw-bold'><span className='text-success text-decoration-underline'>100%</span> Organic Vegetables</h5>
                                    <h1 className='fw-bold pt-2 pb-4' style={{ fontSize: '55px', letterSpacing: '1.5px' }}>The best way to stuff your wallet.</h1>
                                    <p className='text-secondary'>Our fruits are grown in the best conditions to ensure the highest quality and taste.</p>
                                    <button className='btn btn-success px-4 py-2 fw-bold mt-4'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Slider