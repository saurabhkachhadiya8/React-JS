import { Component } from "react";

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

export default Footer;