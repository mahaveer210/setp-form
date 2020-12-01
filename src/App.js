import React, { Component } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import './App.css';

export default class App extends Component {
 
    constructor(props)
    {
      super(props);
      this.state = {
        fields: {
          contact_no : "",
          first_name : "",
          delivery_address : "",
          pin_code: "",
          gender:"",
          hobbies:[],
          about:"",
        },
        errors: {
            hobbies:'',
            gender:'',
            about:'',
        },
        step:1,
      }
    }


    handleChange = async (field, value) => {
        let fields = this.state.fields;
        fields[field] = value; 
        this.setState({fields});
    }

    handleError = async (field, value) => {
        let errors = this.state.errors;
        errors[field] = value; 
        this.setState({errors});
    }

    submitForm  = async (step) => {
        
        if(step == 2)
        {
            this.setState({step});
        }

        if(step == 3)
        {
            let valid = 1;
            if(this.state.fields.hobbies.length == 0)
            {
                valid = 0;
                this.handleError('hobbies', 'please select atleast one');
            }
    
            if(this.state.fields.gender == "")
            {
                valid = 0;
                this.handleError('gender', 'please select one');
            }
           
            if(valid)
            {
                this.setState({step});  
            }
        }


        if(step == 4)
        {
            let valid = 1;
            if(this.state.fields.about.length < 2)
            {
                valid = 0;
                this.handleError('about', 'About detail must be at least 2 characters. ');
            }
            if(valid)
            {
                this.setState({step});  
            }
        }

    }

    render()  
  {
      console.log(this.state.fields);
  return (
    <div className="App">

        {this.state.step === 1 ?
         <Step1 handleChange={this.handleChange} fields={this.state.fields} errors={this.state.errors} submitForm={this.submitForm} handleError={this.handleError}  />
         : null}

        {this.state.step === 2 ?
         <Step2 handleChange={this.handleChange} fields={this.state.fields} errors={this.state.errors} submitForm={this.submitForm} handleError={this.handleError}  />
         : null}

         {this.state.step === 3 ?
         <Step3 handleChange={this.handleChange} fields={this.state.fields} errors={this.state.errors} submitForm={this.submitForm} handleError={this.handleError}  />
         : null}

        {this.state.step === 4 ?
           <div className="card-body">
           <h5 className="title_text mt-4">Customer Details</h5>
             <div className="row">
                 <div className="col-xl-12 col-lg-12">
                     Contact No : {this.state.fields.contact_no}
                  </div>
                  <div className="col-xl-12 col-lg-12">
                     Name : {this.state.fields.first_name}
                  </div>
                  <div className="col-xl-12 col-lg-12">
                     Address : {this.state.fields.delivery_address}
                  </div>
                  <div className="col-xl-12 col-lg-12">
                     Pincode : {this.state.fields.pin_code}
                  </div>
                  <div className="col-xl-12 col-lg-12">
                     Gender : {this.state.fields.gender}
                  </div>
                  <div className="col-xl-12 col-lg-12">
                     hobbies : {this.state.fields.hobbies.join(",")}
                  </div>
                  <div className="col-xl-12 col-lg-12">
                     About Me : {this.state.fields.about}
                  </div>
             </div>
           </div>
         : null}

    </div>
  );
}
}
