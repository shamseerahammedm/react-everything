import React from 'react';
// import styles from './form.styles.scss';

const INITIAL_STATE = {
   
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  firstnameError: '',
  lastnameError: '',
  emailError: '',
  passwordError: '',
    
};

class Form extends React.Component {

    state = INITIAL_STATE;

    handleSubmit = (e) => {
      e.preventDefault();
      let formNotValid = this.validateForm();
      if(formNotValid)
      {
        console.log('not submitting');
      }
      else
      {
        console.log('submitting');
        // clearing form 
        this.setState(INITIAL_STATE);
      }
    }

    validateForm = () => {
      const { firstname, lastname } = this.state;
      let fieldWithErrors = false;

      let firstnameError = '';
      if(firstname.length <= 4)
      {
        firstnameError = 'First name error '; 
      }

      let lastnameError = '';
      if(lastname.length<=4 )
      {
        lastnameError = 'Last name error '; 
      }

      if(firstnameError || lastnameError)
      {
        this.setState({
          firstnameError,lastnameError
        });
        fieldWithErrors =  true;
      }

      return fieldWithErrors;
    }

    changeHandler = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name] : value
      });
    }

    render()
    {
      const { firstname, lastname, email, password, firstnameError, lastnameError } = this.state;
      return(
        <div className="wrapper">
          <h4>Create Account</h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" placeholder="First name" name="firstname" onChange={this.changeHandler} value={firstname} className={firstnameError !== '' ? 'error' : null}/>
              {firstnameError}
            </div>
            <div>
              <input type="text" placeholder="Last name" name="lastname" onChange={this.changeHandler} value={lastname} className={lastnameError !== '' ? 'error' : null}/>
              {lastnameError}
            </div>
            <div>
              <input type="email" placeholder="email" name="email" onChange={this.changeHandler} value={email}/>
                     
            </div>
            <div>
              <input type="password" placeholder="password" name="password" onChange={this.changeHandler} value={password}/>
                       
            </div>
            <button type="submit">Create account</button>
          </form>
        </div>
      );
    }
}

export default Form;