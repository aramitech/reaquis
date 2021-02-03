import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import Modal from './Modal.js';

//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';

class Team extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  handleAdd= async e =>{
    console.log("Hello worldeeeeeeeeeeeeeeeeeeee!"); 
 await this.setState({
      [e.target.name] : e.target.value
     
 })
//  const txtFieldState = {
//     value: "",
//     valid: true,
//     typeMismatch: false,
//     errMsg: "" //this is where our error message gets across
// };



}
handleSubmit = (e) =>{
    console.log( "Textrrrrrrrrrrrrr Here");
    e.preventDefault();
    // console.log( "Text Here");
     console.log(this.state)
    // let formData = new FormData();
    // formData.append("text",this.state.text);
    // const url = "http://localhost:80/ss/savedata.php.php";
    const url = "savedata.php.php";
    axios.post(url,this.state)
    .then(res=>console.log(res.data))
    .catch(err=> console.log(err));
    let res=""
         //Success alert
       Swal.fire({
      title: 'Request For Meeting <br> Reserved',
    //   text: this.state,
      type: 'success',
      
    });

}
render()
{

   return {

   } 
}

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className={ "sba-pricing-area "+customclass }>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-9">
                    <div className="section-title text-center">
                      <h2 className="title">
                        { sectiondata.pricingtable.sectiontitle } <span>{sectiondata.pricingtable.sectiontitle_color}</span>
                      </h2>
                    
                    </div>
                  </div>
                </div>
                <div className="row custom-gutters-20">
                    {sectiondata.pricingtable.tables.map( ( item, i ) => 
                        <div key={i} className="col-xl-3 col-sm-6">
                            <div className="single-pricing text-center">
                                <h6 className="title">{item.title}</h6>
                                <div className="thumb">
                                    <img src={publicUrl+item.icon} alt={imgattr} />
                                </div>
                                <h3 className="price">{item.price} <span>{item.duration}</span></h3>
                                <ul>
                                {item.features.map( ( feature, i  ) =>
                                 <li key={i}>{feature}</li>
                                )}
                                </ul>
                                <a className="btn btn-white btn-rounded" onClick={this.showModal} show={this.state.show} handleClose={this.hideModal}>Get Started</a>
                               
                            </div>
                            <main>
                            
                            
       {/* ---------------------------Start---Modal------------------------------------------------- */}
       <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>
          <h3 stylealigin="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Request For a Demo </h3>
             <form className="riyaqas-form-wrap mt-5 mt-lg-0" method="post" action="savedata.php"> 
                                <div className="row custom-gutters-16">
                                    <div className="col-md-6"> 
                                     <label><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Names</strong></label>
                                        <div className="single-input-wrap">
                                      
                                            <input type="text" value={this.state.fnames} onChange={this.handleAdd} className="single-input" ref="fnames" name="fnames" required/>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label><strong>E-mail</strong></label>
                                        <div className="single-input-wrap">
                                            <input type="text" value={this.state.email} onChange={this.handleAdd} className="single-input" ref="email"  name="email" required/>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6"> 
                                     <label><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone</strong></label>
                                        <div className="single-input-wrap">
                                            <input type="text" value={this.state.phone} onChange={this.handleAdd} className="single-input" ref="phone" name="phone" required/>
                                          
                                        </div>
                                    </div>

                                    <div className="col-md-6"> 
                                     <label><strong>Organization</strong></label>
                                        <div className="single-input-wrap">
                                            <input type="text" value={this.state.organization} onChange={this.handleAdd} className="single-input" ref="organization" name="organization" required/>
                                          
                                        </div>
                                    </div>



                                    <div className="col-md-6"> 
                                     <label></label>
                                        <div className="single-input-wrap">
                                            <input type="hidden"  className="single-input" ref="phcvone" name="phoxcvne"/>
                                          
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <label className="single-input-label"><strong>Service</strong></label><br></br>
                         
                                      
                                        <select labelId="label" id="select"  className="single-input" ref="service" value={this.state.service} onChange={this.handleAdd}  name="service">
                                        <option value="All Services">All Services</option>
                                         <option value="Feedback Center">Feedback Center</option>
                                        <option value="Bulk Airtime Portal">Bulk Airtime Portal</option>
                                        <option value="M-Pesa Payments Portal">M-Pesa Payments Portal</option>
                                        <option value="USMS and AirtimeSSD APIs">SMS and Airtime APIs</option>
                                        <option value="Mobile Apps">Mobile Apps</option>
                                        </select>


                                            
                                      
                                    </div>
                                    <div className="col-12">
                                        {/* <a className="btn btn-red mt-0" href={anchor}>Request</a> */}
                                        {/* <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button> */}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Submit</button> </div> 
                                </div>
                            </form></p>
  {/* -----------------------------End ----------------Modal------------------------------------ */}
        </Modal>
   
      </main>
                        </div>
                    )}

                </div>
              </div>
            </div>
            <div className="pricing-page-area pd-top-112">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6">
                    <div className="section-title text-center">
                      <h2 className="title">
                        { sectiondata.pricingtable.sectiontitle } <span>{sectiondata.pricingtable.sectiontitle_color}</span>
                      </h2>
                      {/* <p>
                       {sectiondata.teampage.short_description}
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="row no-gutters justify-content-center">
                 {/* {sectiondata.pricingtablev2.tables.map( ( item, i ) => 
                    <div key={ i } className="col-xl-3 col-lg-4 col-sm-6">
                      <div className="single-pricing text-center">
                        <h6 className="title">{item.title}</h6>
                        <div className="thumb">
                          <img src={publicUrl+item.icon} alt={imgattr} />
                        </div>
                        <h3 className="price">
                          { item.price } <span>{ item.duration }</span>
                        </h3>
                        <ul>
                           {item.features.map( ( feature, i  ) =>
                                 <li key={i}>{feature}</li>
                            )}
                        </ul>
                        <a className="btn btn-white btn-rounded" href={item.url}>Get Started</a>
                      </div>
                    </div>
                   )} */}
                </div>
              </div>
            </div>
        </div>
    }
}

export default Team