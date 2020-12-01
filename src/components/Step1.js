import React, { Component } from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import './step.css';


export default class Step1 extends Component {

    constructor(props)
    {
      super(props);
    }


    handleChange = async (field, event) => {
        this.props.handleChange(field, event.target.value);
    }

 render()  
   {
        return (<div className="card-body">
                 <h5 className="title_text mt-4">Customer Details (Step 1 - 3)</h5>

                 <ValidatorForm className="user mt-4" ref="form" onSubmit={() => this.props.submitForm(2)}>
                      <div className="row">
                      <div className="col-xl-12 col-lg-12">
                         <div className="form-group">
                         
                            <TextValidator id="contact_no" 
                                            label="Mobile Number" 
                                            autoComplete="off" 
                                            validators={['required', 'matchRegexp:^[0-9]{10,10}$']} 
                                            errorMessages={['Mobile Number is Required', 'Invalid Mobile Number']}
                                            value={this.props.fields.contact_no}
                                            onChange={this.handleChange.bind(this, "contact_no")} />
                         </div>
                       </div>

                       <div className="col-xl-12 col-lg-12">
                         <div className="form-group">
                             <TextValidator id="first_name" 
                                            label="Name"  
                                            autoComplete="off" 
                                            value={this.props.fields.first_name} 
                                            onChange={this.handleChange.bind(this, "first_name")}
                                            validators={['required', 'matchRegexp:^[a-z, A-Z, 0-9]{2,64}$']} 
                                            errorMessages={['this field is required', 'The name must be at least 2 characters.']} />
                         </div>
                       </div> 

                       <div className="col-xl-12 col-lg-12">
                         <div className="form-group">
                             <TextValidator id="delivery_address" 
                                            label="Delivery Address"  
                                            autoComplete="off" 
                                            value={this.props.fields.delivery_address} 
                                            onChange={this.handleChange.bind(this, "delivery_address")}
                                            validators={['required']} 
                                            errorMessages={['this field is required']} />
                         </div>
                       </div>

                       <div className="col-xl-12 col-lg-12">
                         <div className="form-group">
                             <TextValidator id="pin_code" 
                                            label="Pincode"  
                                            autoComplete="off" 
                                            value={this.props.fields.pin_code} 
                                            onChange={this.handleChange.bind(this, "pin_code")}
                                            validators={['required', 'matchRegexp:^[0-9]{6,6}$']} 
                                            errorMessages={['this field is required', 'Invalid pincode']} />
                         </div>
                       </div>
                       


                       <div className="col-xl-12 col-lg-12" style={{textAlign:'center'}}>
                          <button type="submit" className="btn btn-primary submit_btn">Next</button>
                       </div>

                     </div>

                     </ValidatorForm>
               
                <div className="clear"></div>
             </div>
                );
    }
}
