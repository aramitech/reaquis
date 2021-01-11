import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class FeedbackCenter extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.whatwedo
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className={"feedback-center-processing-area "+customclass}>
              <div className="container">
                <div className="row justify-content-center custom-gutters-16 single-feedback-center">
                  <div className="col-xl-5 col-md-6 order-lg-12">
                    <div className="thumb swp-right-thumb">
                      <img src={publicUrl+"assets/img/feedback-center/1.png"} alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                    <div className="feedback-center-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">1</h1>
                        <h2 className="title">SMS and Voice <span> Communication </span> Platform </h2>
                        <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center custom-gutters-16 single-feedback-center">
                  <div className="col-xl-5 col-md-6">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/feedback-center/2.png"} alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 desktop-center-item">
                    <div className="feedback-center-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">2</h1>
                        <h2 className="title"><span>Collect Information</span> and Analysis Client Requirement</h2>
                        <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center custom-gutters-16 single-feedback-center">
                  <div className="col-xl-5 col-md-6 order-lg-12">
                    <div className="thumb swp-right-thumb">
                      <img src={publicUrl+"assets/img/feedback-center/3.png"} alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                    <div className="feedback-center-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">3</h1>
                        <h2 className="title">We go to <span>Sketch/Wireframe</span> to mapping a Design</h2>
                        <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center custom-gutters-16 single-feedback-center">
                  <div className="col-xl-5 col-md-6">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/feedback-center/4.png" }alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 desktop-center-item">
                    <div className="feedback-center-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">4</h1>
                        <h2 className="title">Finally All Process We do <span>Implement</span></h2>
                        <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center custom-gutters-16 single-feedback-center">
                  <div className="col-xl-5 col-md-6 order-lg-12">
                    <div className="thumb swp-right-thumb">
                      <img src={publicUrl+"assets/img/feedback-center/5.png" }alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                    <div className="feedback-center-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">5</h1>
                        <h2 className="title"><span>Test</span> the Final work then submit the Project</h2>
                        <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default FeedbackCenter