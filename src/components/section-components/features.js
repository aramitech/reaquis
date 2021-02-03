import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Features extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'

    return <div>
            <div className="sba-featute-area">
                <div className="container">
                    <div className="row custom-gutters-16 justify-content-center">
                        <div className="col-xl-4 col-lg-9">
                            <div className="section-title style-two text-xl-left text-center">
                                <h2 className="title">{parse(sectiondata.features.sectiontitle)} <span>{sectiondata.features.sectiontitle_color}</span></h2>
                                <p>{sectiondata.features.short_description}</p>
                                <a className="read-more" href={sectiondata.features.btn_url}>{sectiondata.features.btn_text} <i className="la la-long-arrow-right"></i></a>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-sm-6">
                            <div className="single-feature-left">
                              <div className="single-feature">
                                <div className="media">
                                  <img
                                    className="media-left"
                                    src={publicUrl+"assets/img/features/1.png"}
                                    alt="feature"
                                  />
                                  <div className="media-body">
                                    <h6>Bulk Airtime Portal</h6>
                                    <p>
                                    Transfer or topup airtime to employees and customers and get reports for monthly used airtime amount.
                                                                        </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single-feature">
                                <div className="media border-radius-2">
                                  <img
                                    className="media-left"
                                    src={publicUrl+"assets/img/features/2.png"}
                                    alt="feature"
                                  />
                                  <div className="media-body">
                                    <h6>M-Pesa Payments Portal</h6>
                                    <p>
                                    Pay individuals and businesses instantly, manage and track your money from one spot
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6 mg-top-80">
                            <div className="single-feature-right">
                              <div className="single-feature">
                                <div className="media border-radius-3">
                                  <img
                                    className="media-left"
                                    src={publicUrl+"assets/img/features/3.png"} alt="feature"/>
                                  <div className="media-body">
                                    <h6>SMS and Airtime APIs</h6>
                                    <p>
                                    We provide quick integrations of SMS and Airtime APIs to your existing and new systems.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single-feature">
                                <div className="media border-radius-4">
                                  <img
                                    className="media-left"
                                    src={publicUrl+"assets/img/features/4.png"}
                                    alt="feature"
                                  />
                                  <div className="media-body">
                                    <h6>Mobile Apps and Custom Software Development</h6>
                                    <p>
                                    We use cutting edge technologies to develop high end mobile apps and custom software to meet your needs.
                                    We develop Mobile Apps on Android, IOS, Web Applications, Communication Platforms and USSD Applications.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
 
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Features

