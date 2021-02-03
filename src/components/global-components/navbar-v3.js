import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <div>
                <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <div className="logo-wrapper mobile-logo">
                                <a href={anchor} className="logo">
                                    <img src={publicUrl+ 'assets/img/logo.png' } alt={imgattr} />
                                </a>
                            </div>
                            <div className="nav-right-content">
                                <ul>
                                    <li className="search">
                                        <i className="ti-search" />
                                      </li>
                                      <li className="cart">
                                        <div className="notification">
                                              {/* <a href="#">
                                                <i className="la la-shopping-cart" />
                                                <span className="notification-count ">2</span>
                                              </a> */}
                                       </div>
                                        <div className="widget_shopping_cart_content">
                                          <ul>
                                            <li>
                                              <div className="media">
                                                <div className="media-left">
                                                  {/* <img src={publicUrl+"assets/img/checkout/7.png" }alt="img" /> */}
                                                </div>
                                                {/* <div className="media-body">
                                                  <a className="title" href="#">Smart99999 watch red color</a>
                                                  <p>Quantity: 1</p>
                                                  <span className="price">$150.00</span>
                                                </div> */}
                                              </div>
                                              {/* <a className="remove-product" href="#"><span className="ti-close" /></a> */}
                                            </li>
                                            <li>
                                              <div className="media">
                                                <div className="media-left">
                                                  {/* <img src={publicUrl+"assets/img/checkout/8.png"} alt="img" /> */}
                                                </div>
                                                {/* <div className="media-body">
                                                  <a className="title" href="#">Smart watch red color</a>
                                                  <p>Quantity: 1</p>
                                                  <span className="price">$150.00</span>
                                                </div> */}
                                              </div>
                                              <a className="remove-product" href="#"><span className="ti-close" /></a>
                                            </li>
                                          </ul>
                                          {/* <p className="total">
                                            <strong>Subtotal:</strong> 
                                            <span className="amount">
                                              <span className="woocommerce-Price-currencySymbol">$</span>129.00
                                            </span>       
                                          </p> */}
                                          {/* <p className="buttons">
                                              <Link to="/checkout" className="button">View Card &amp; Check out</Link>
                                          </p> */}
                                        </div>
                                      </li>
                                      <li className="notification">
                                        {/* <a href="#">
                                          <i className="fa fa-heart-o" />
                                          <span className="notification-count">0</span>
                                        </a> */}
                                  </li>
                                </ul>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Riyaqas_main_menu" 
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggle-icon">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="Riyaqas_main_menu">
                            <div className="logo-wrapper desktop-logo">
                                <a href="#" className="logo">
                                    <img src={publicUrl + 'assets/img/logo.png'} alt={imgattr}/>
                                </a>
                            </div>
                            <ul className="navbar-nav">
                            <li><Link to="/"> Home</Link>
                                    {/* <ul className="sub-menu">
                                        <li><Link to="/">App Home</Link></li>
                                        <li><Link to="/home-v1">Software Home</Link></li>
                                        <li><Link to="/home-v3">Startup Company</Link></li>
                                        <li><Link to="/home-v4">Management software</Link></li>
                                        <li><Link to="/home-v5">Tech-company</Link></li>
                                        <li><Link to="/home-v6">New Technology</Link></li>
                                        <li><Link to="/home-v7">Digital Marketing</Link></li>
                                        <li><Link to="/home-v8">Pos Device</Link></li>
                                        <li><Link to="/home-v9">Hosting</Link></li>
                                    </ul> */}
                                </li>
                                <li><Link to="/about">About</Link></li>
                                <li className="menu-item-has-children"><Link to="/services">Service</Link>     
                                   <ul className="sub-menu">
                                   <li><Link to="/services">All Services </Link></li>

                                        <li><Link to="/work-processing">Feedback Center</Link></li>
                                        <li><Link to="/home-v7">Bulk Airtime Portal </Link></li>
                                        <li><Link to="/home-v8">M-Pesa Payments Portal</Link></li>
                                        <li><Link to="/home-v9">Mobile Apps and Custom Software Development</Link></li>
                                        
                                        {/* <li><Link to="/work-processing">Bulk Airtime Portal</Link></li>
                                        <li><Link to="/work-processing">M-Pesa Payments Portal</Link></li>
                                        <li><Link to="/work-processing">SMS and Airtime APIs</Link></li>
                                        <li><Link to="/work-processing">Mobile Apps and Custom Software Development</Link></li> */}
                                    </ul>
                                </li> 
                                        <li><Link to="/pricing">Pricing</Link></li>
{/*                          
                                <li className="menu-item-has-children">
                                    <Link to="/blog">Blog</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/blog-grid">Blog Grid</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                    </ul>
                                </li> */}
                                 {/* <li className="menu-item-has-children">
                                    <Link to={'#'}>Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/services">Service</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/pricing">Pricing</Link></li>
                                        <li><Link to="/offer">Offer</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/faq">Faq</Link></li>
                                        <li><Link to="/work-processing">Work Processing</Link></li>
                                        <li><Link to="/comming-soon">Comming Soon</Link></li>
                                        <li><Link to="/error">Error 404</Link></li>
                                    </ul>
                                </li>  */}
                        
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li><Link to="/faq">Help</Link></li>


                            </ul>
                        </div>
                        <div className="nav-right-content">
                            <ul>
                                <li className="search">
                                    <i className="ti-search" />
                                      </li>
                                      <li className="cart">
                                       <div className="notification">
                                              {/* <a href="#">
                                                <i className="la la-shopping-cart" />
                                                <span className="notification-count riyaqas-cart-count">2</span>
                                              </a> */}
                                       </div>
                                        <div className="widget_shopping_cart_content">
                                          <ul>
                                            {/* <li>
                                              <div className="media">
                                                <div className="media-left">
                                                  <img src={publicUrl+"assets/img/checkout/7.png" }alt="img" />
                                                </div>
                                                <div className="media-body">
                                                  <Link className="title" to="/shop-details">Smartfffffff watch red color</Link>
                                                  <p>Quantity: 1</p>
                                                  <span className="price">$150.00</span>
                                                </div>
                                              </div>
                                              <a className="remove-product" href="#"><span className="ti-close" /></a>
                                            </li> */}
                                            {/* <li>
                                              <div className="media">
                                                <div className="media-left">
                                                  <img src={publicUrl+"assets/img/checkout/8.png"} alt="img" />
                                                </div>
                                                <div className="media-body">
                                                  <Link className="title" to="/shop-details">Smart watch red color</Link>                                                  <p>Quantity: 1</p>
                                                  <span className="price">$150.00</span>
                                                </div>
                                              </div>
                                              <a className="remove-product" href="#"><span className="ti-close" /></a>
                                            </li> */}
                                          </ul>
                                          {/* <p className="total">
                                            <strong>Subtotal:</strong> 
                                            <span className="amount">
                                              <span className="woocommerce-Price-currencySymbol">$</span>129.00
                                            </span>       
                                          </p>
                                          <p className="buttons">
                                             <Link to="/checkout" className="button">View Card &amp; Check out</Link>
                                          </p> */}
                                        </div>
                                      </li>
                                      {/* <li className="notification">
                                        <a href="#">
                                          <i className="fa fa-heart-o" />
                                          <span className="notification-count">0</span>
                                        </a>
                                  </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                
                    <div className="body-overlay" id="body-overlay"></div>
                    <div className="search-popup" id="search-popup">
                        <form action="index.html" className="search-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search....."/>
                            </div>
                            <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
            </div>
        )
    }
}


export default Navbar