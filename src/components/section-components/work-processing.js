import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import Modal from './Modal.js';

//Include Sweetalert
import Swal from 'sweetalert2'
//axios for api request
import axios from 'axios';

class WordProcessing extends Component {

  constructor() {
    super();
    this.state = {    
      fields: {},
      errors: {},
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
  
    //Name
    if(!fields["fnames"]){
       formIsValid = false;
       errors["fnames"] = "Cannot be empty";
    }
  
    if(typeof fields["fnames"] !== "undefined"){
       if(!fields["fnames"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["fnames"] = "Only letters";
       }        
    }
  
    //Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }
  
    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');
  
       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }  
  
   this.setState({errors: errors});
   return formIsValid;
  }
  
  contactSubmit(e){
    e.preventDefault();
  
    if(this.handleValidation()){
       alert("Form submitted");
    }else{
       alert("Form has errors.")
    }
  
  }
  
  handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
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
                        <h1 className="counting-number"></h1>
                        <h2 className="title">SMS and     <span> Voice Communication </span>Platform  </h2>
               
                        <p>Engage your clients and stakeholders, through two-way SMS and Voice communication, surveys, analytics and deep conversations.</p>
                      </div>
                      <a className="btn btn-#E77817 btn-rounded" onClick={this.showModal} show={this.state.show} handleClose={this.hideModal}>Request Demo </a>

                    </div>
                  </div>
                               
                </div>
        
                <main>
                            
                            
                            {/* ---------------------------Start---Modal------------------------------------------------- */}
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                               <p>
                               <h3 stylealigin="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Request For a Demo </h3>
                                  <form className="riyaqas-form-wrap mt-5 mt-lg-0" method="post" action="savedata.php" onSubmit= {this.contactSubmit.bind(this)}> 
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