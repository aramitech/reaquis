import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class WordProcessing extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.whatwedo
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className={"work-processing-area "+customclass}>
              <div className="container">
                <div className="row justify-content-center custom-gutters-16 single-work-processing">
                  <div className="col-xl-5 col-md-6 order-lg-12">
                    <div className="thumb swp-right-thumb">
                      <img src={publicUrl+"assets/img/work-processing/1.png"} alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                    <div className="work-processing-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">1</h1>
                        <h2 className="title">Send Voive  <span> Message </span>  </h2>
               
                        <p>Send Voice mesage to your clients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center custom-gutters-16 single-work-processing">
                  <div className="col-xl-5 col-md-6">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/work-processing/2.png"} alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 desktop-center-item">
                    <div className="work-processing-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">2</h1>
                        <h2 className="title"><span>Send Custom  </span> Message </h2>
                        <p>Design a custom message from Excel in any format.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center custom-gutters-16 single-work-processing">
                  <div className="col-xl-5 col-md-6 order-lg-12">
                    <div className="thumb swp-right-thumb">
                      <img src={publicUrl+"assets/img/work-processing/3.png"} alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                    <div className="work-processing-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">3</h1>
                        <h2 className="title">Inbox <span>Tags</span> </h2>
                        <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center custom-gutters-16 single-work-processing">
                  <div className="col-xl-5 col-md-6">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/work-processing/4.png" }alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 desktop-center-item">
                    <div className="work-processing-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">4</h1>
                        <h2 className="title">Create Survey<span>Messaages</span></h2>
                        <p>Create survey questions for your clients and let them answer one question by one.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row justify-content-center custom-gutters-16 single-work-processing">
                  <div className="col-xl-5 col-md-6 order-lg-12">
                    <div className="thumb swp-right-thumb">
                      <img src={publicUrl+"assets/img/work-processing/5.png" }alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 order-lg-1 desktop-center-item">
                    <div className="work-processing-details">   
                      <div className="section-title style-four">
                        <h1 className="counting-number">5</h1>
                        <h2 className="title"><span>Test</span> the Final work then submit the Project</h2>
                        <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy.</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
        </div>
    }
}

export default WordProcessing