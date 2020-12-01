import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import './step.css';





export default class Step2 extends Component {

    constructor(props)
    {
      super(props);
    }


    handleChange = async (field, event) => {
        this.props.handleChange(field, event.target.value);
        this.props.handleError('gender', event.target.value == '' ? 'please select one' : '');
    }

    handleChangeCheckbox = async (field, event) => {
        
        let hobbies = this.props.fields.hobbies;
        if(hobbies.indexOf(event.target.value) > -1)
         {
            hobbies = hobbies.filter(e => e !== event.target.value);
         }
         else
         {
            hobbies.push(event.target.value);
         }

         this.props.handleChange(field, hobbies);
         this.props.handleError('hobbies', hobbies.length == 0 ? 'please select atleast one' : '');
        
    }

 render()  
   {
        return (<div className="card-body">
                 <h5 className="title_text mt-4">Customer Details (Step 2 - 3)</h5>

                 <form className="user mt-4" ref="form">
                      <div className="row">
                      <div className="col-xl-12 col-lg-12">
                           <div className="label">Hobbies:</div> 
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox value="Cricket" checked={this.props.fields.hobbies.indexOf("Cricket") > -1 ? true : false} name="hobbies" onChange={this.handleChangeCheckbox.bind(this, "hobbies")} />}
                                    label="Cricket"
                                />

                                <FormControlLabel
                                    control={<Checkbox  value="Music" checked={this.props.fields.hobbies.indexOf("Music") > -1 ? true : false}  onChange={this.handleChangeCheckbox.bind(this, "hobbies")} />}
                                    label="Music"
                                />

                                  <FormControlLabel
                                    control={<Checkbox value="Books" checked={this.props.fields.hobbies.indexOf("Books") > -1 ? true : false} onChange={this.handleChangeCheckbox.bind(this, "hobbies")} />}
                                    label="Books"
                                />
                                <div className="error">{this.props.errors.hobbies}</div>
                            </FormGroup>

                             

                            <div className="label">Gender:</div>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Radio checked={this.props.fields.gender == 'male' ? true : false} name="gender" value="male" onChange={this.handleChange.bind(this, "gender")} />}
                                    label="Male"
                                />

                                <FormControlLabel
                                    control={<Radio checked={this.props.fields.gender == 'female' ? true : false} name="gender" value="female" onChange={this.handleChange.bind(this, "gender")} />}
                                    label="Female"
                                />
                                <div className="error">{this.props.errors.gender}</div>
                            </FormGroup>

                            
                       </div>

                

                       <div className="col-xl-12 col-lg-12" style={{textAlign:'center'}}>
                          <button type="button" className="btn btn-primary" onClick={() => this.props.submitForm(3)}>Next</button>
                       </div>

                     </div>

                     </form>
               
                <div className="clear"></div>
             </div>
                );
    }
}
