import React, { Component } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './step.css';





export default class Step3 extends Component {

    constructor(props)
    {
      super(props);
    }


    handleChange = async (field, event) => {
        this.props.handleChange(field, event.target.value);
        this.props.handleError('about', event.target.value.length < 2 ? 'About detail must be at least 2 characters. ' : '');
    }

 render()  
   {
        return (<div className="card-body">
                 <h5 className="title_text mt-4">Customer Details (Step 3 - 3)</h5>

                 <form className="user mt-4" ref="form">
                      <div className="row">
                      <div className="col-xl-12 col-lg-12">
                           
                           <TextareaAutosize aria-label="minimum height" rowsMin={3} onChange={this.handleChange.bind(this, "about")} value={this.props.fields.about} placeholder="About me" style={{width:'100%'}} />

                            <div className="error">{this.props.errors.about}</div>
                       </div>

                

                       <div className="col-xl-12 col-lg-12" style={{textAlign:'center'}}>
                          <button type="button" className="btn btn-primary" onClick={() => this.props.submitForm(4)}>Submit</button>
                       </div>

                     </div>

                     </form>
               
                <div className="clear"></div>
             </div>
                );
    }
}
