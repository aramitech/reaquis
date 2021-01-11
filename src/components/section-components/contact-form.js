import React, { Component } from 'react';

//bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';
//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';



class Contact_Form extends Component {


    state = {
        email: '',
        fnames: '',
        phone: '',
       
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
  
    e.preventDefault();
    // console.log( "Text Here");
     console.log(this.state)
    // let formData = new FormData();
    // formData.append("text",this.state.text);
    // const url = "http://localhost:80/ss/savecontact.php.php";
     const url = "savecontact.php";
    axios.post(url,this.state)
    .then(res=>console.log(res.data))
    .catch(err=> console.log(err));
    let res=""
         //Success alert
       Swal.fire({
      title: 'Your inquiry was Sent',
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
        let anchor = '#'
        let imgalt = 'image'
        let publicUrl = process.env.PUBLIC_URL+'/'
   
    return <div>
            <div className="contact-form-area pd-top-112">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center w-100">
                                <h2 className="title">Send your <span>inquiry</span></h2>
                                <p> Transform your customer experiences with programmable messaging, voice, Shortcodes and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-5">
                            <img src={publicUrl+'assets/img/others/21.png'} alt={imgalt}/>
                        </div>
                        <div className="col-lg-7 offset-xl-1">
                            <form className="riyaqas-form-wrap mt-5 mt-lg-0" method="post" action="">
                                <div className="row custom-gutters-16">
                                    <div className="col-md-6">
                                        <div className="single-input-wrap">
                                            <input type="text" ref="fnames" value={this.state.fnames} onChange={this.handleAdd} name="fnames" className="single-input"/>
                                            <label>Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input-wrap">
                                            <input type="text" ref="email" name="email"   ref="organization" value={this.state.organization} onChange={this.handleAdd} className="single-input"/>
                                            <label>E-mail</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <input type="text" ref="subject"  ref="organization" value={this.state.organization} onChange={this.handleAdd}  name="organization" className="single-input"/>
                                            <label>Organization</label>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <input type="text" ref="subject"  ref="subject" value={this.state.subject} onChange={this.handleAdd}  name="subject" className="single-input"/>
                                            <label>Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <textarea className="single-input textarea"  value={this.state.message} onChange={this.handleAdd}  ref="message" name="message" cols="20"></textarea>
                                            <label className="single-input-label">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">

                                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Submit</button>  

                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     }
}

export default Contact_Form

