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
                                    <h6>BULK AIRTIME</h6>
                                    <p>
                                    Transfer or topup airtime to emloyees and customers and
                                     get reports for monthly used airtime amount.
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
                                    <h6>BULK M-PESA</h6>
                                    <p>
                                    Send payment transactions to multiple people in simple processes.
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
                                    <h6>USSD</h6>
                                    <p>
                                    Build real-time interactive text based solutions that can be accessed on every type of mobile phone..
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
                                    <h6>VOice</h6>
                                    <p>
                                    Reach more customers worldwide with crystal-clear voice messaging .
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

