import { Component } from "react";

class NavbarSlider extends Component {
    render() {
        return (
            <div>
                <section className="slider">
                    <header>
                        <div className="container" style={{ padding: '15px 0', borderRadius: '0 0 10px 10px' }}>
                            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="logo"><a href="#">Logo</a></div>
                                <ul className='headerMenu' style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Pages</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <ul className='headerIcon' style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>
                                    <li><a href="#">Search</a></li>
                                    <li><a href="#">Cart</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <div className="container" style={{ padding: "150px 0" }}>
                        <div className="row">
                            <div className="sliderBox" style={{ width: '50%' }}>
                                <h1 style={{ color: 'white', fontSize: '70px', lineHeight: '1.3' }}>Delicious & Mouth <span style={{ color: '#7de2d1' }}>Watering Test</span></h1>
                                <p style={{ color: '#ff8700', fontSize: '18px', fontWeight: '600', padding: '60px 0' }}>GET 35% DISCOUNT</p>
                                <p style={{ color: '#fff', letterSpacing: '1px', fontWeight: '500', fontSize: '25px' }}>Best food made by our <a href="#" style={{ color: "#ff8700", textDecoration: 'underline' }}>Passionate Chefs</a></p>
                                <button style={{ padding: '18px 35px', backgroundColor: 'transparent', color: 'white', border: '1px solid #fff', fontSize: '18px', letterSpacing: '1px', marginTop: '60px' }}>Book a Table</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <footer style={{ backgroundColor: "#02161d", padding: "100px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="footerBox" style={{ width: '25%' }}>
                                <div className="logo"><a href="#">Logo</a></div>
                                <p style={{ fontSize: '18px', color: '#fff', padding: '20px 35px 45px 0', letterSpacing: '1px' }}>Rosoi is one of the most popular Restaurant & special menu made by our passionate chefs</p>
                                <span>
                                    <a href="#" style={{ fontSize: '20px', border: '1px solid #fff', borderRadius: '100%', padding: '10px', marginRight: '10px' }}>FB</a>
                                    <a href="#" style={{ fontSize: '20px', border: '1px solid #fff', borderRadius: '100%', padding: '10px', marginRight: '10px' }}>TW</a>
                                    <a href="#" style={{ fontSize: '20px', border: '1px solid #fff', borderRadius: '100%', padding: '10px', marginRight: '10px' }}>IG</a>
                                    <a href="#" style={{ fontSize: '20px', border: '1px solid #fff', borderRadius: '100%', padding: '10px', marginRight: '10px' }}>WA</a>
                                </span>
                                <p style={{ fontSize: '18px', color: '#fff', letterSpacing: '1px', paddingTop: '110px' }}>Powered by Webflow</p>
                            </div>
                            <div className="footerBox" style={{ width: '25%' }}>
                                <h2 style={{ color: '#fff', fontSize: '30px', letterSpacing: '1px' }}>Restaurant</h2>
                                <ul style={{ listStyle: 'none', padding: '45px 0 0 0', margin: '0', lineHeight: '2.5' }}>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                </ul>
                            </div>
                            <div className="footerBox" style={{ width: '25%' }}>
                                <h2 style={{ color: '#fff', fontSize: '30px', letterSpacing: '1px' }}>Restaurant</h2>
                                <ul style={{ listStyle: 'none', padding: '45px 0 0 0', margin: '0', lineHeight: '2.5' }}>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                </ul>
                            </div>
                            <div className="footerBox" style={{ width: '25%' }}>
                                <h2 style={{ color: '#fff', fontSize: '30px', letterSpacing: '1px' }}>Restaurant</h2>
                                <ul style={{ listStyle: 'none', padding: '45px 0 0 0', margin: '0', lineHeight: '2.5' }}>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                    <li><a href="#" style={{ fontSize: '20px', color: '#fff', letterSpacing: '1px' }}>About us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div style={{ backgroundColor: '#011920', padding: '20px 0', textAlign: 'center' }}>
                    <p style={{ fontSize: '18px', color: '#fff', letterSpacing: '1px' }}>© Brandbes. All Rights Reserved - Privacy Policy</p>
                </div>
            </div>
        )
    }
}

export { NavbarSlider, Footer };