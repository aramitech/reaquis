import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import Modal from './Modal.js';
//bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';
//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';


class Video_V2 extends Component {
    state = {
        email: '',
        fnames: '',
        phone: '',
       
    };


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


   
}

//     constructor(props)
//     {
//       super(props);
//       this.addFormData = this.addFormData.bind(this);
//     }
//   //Form Submission
//   addFormData(evt)
//     {
//       evt.preventDefault();
//       const fd = new FormData();
//       fd.append('fnames', this.refs.fnames.value);
//       fd.append('email', this.refs.email.value);
//       fd.append('phone', this.refs.phone.value);
      
//       axios.post('savedata.php', fd
//       ).then(res=>
//       {
//       //Success alert
//        Swal.fire({
//       title: 'Therichpost',
//       text: res.data.data,
//       type: 'success',
      
//     });
//     this.myFormRef.reset();
//     }
//     );
//     }


    render() {
        let anchor = '#'
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.videov2
        let customclass = this.props.customclass ? this.props.customclass : ''
    
    return <div>
            <div className={"sba-work-area img-with-video-area "+customclass}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 order-lg-12 desktop-center-item">
                            <div className="section-title ml-xl-4 mb-lg-0 style-two text-lg-left text-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <h2 className="title">{parse(data.title)} <span>{data.title_color}</span></h2>
                                {parse (data.description) }
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 order-lg-1 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                            <div className="img-with-video">
                                <div className="img-wrap">

                                {/* <form ref={(el) => this.myFormRef = el}> */}
                                 <form className="riyaqas-form-wrap mt-5 mt-lg-0" method="post" action="savedata.php"> 
                                <div className="row custom-gutters-16">
                                    <div className="col-md-6"> 
                                     <label>Full Names</label>
                                        <div className="single-input-wrap">
                                      
                                            <input type="text" value={this.state.fnames} onChange={this.handleAdd} className="single-input" ref="fnames" name="fnames" required/>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <div className="single-input-wrap">
                                            <input type="text" value={this.state.email} onChange={this.handleAdd} className="single-input" ref="email"  name="email" required/>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-6"> 
                                     <label>Phone</label>
                                        <div className="single-input-wrap">
                                            <input type="text" value={this.state.phone} onChange={this.handleAdd} className="single-input" ref="phone" name="phone" required/>
                                          
                                        </div>
                                    </div>

                                    <div className="col-md-6"> 
                                     <label>Organization</label>
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
                                    <label className="single-input-label">Service</label><br></br>
                         
                                      
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
                                   
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Submit</button> </div> 
                                </div>
                            </form>


                            <main>
   {/* ---------------------------Start---Modal------------------------------------------------- */}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p> <form className="riyaqas-form-wrap mt-5 mt-lg-0" method="post" action="savedata.php"> 
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
                                   
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Submit</button> </div> 
                                </div>
                            </form></p>
  {/* -----------------------------End ----------------Modal------------------------------------ */}
        </Modal>
        {/* <button type="button" onClick={this.showModal}>
          Open
        </button> */}
      </main>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Video_V2