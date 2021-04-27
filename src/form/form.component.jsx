import React from 'react';
import styles from './form.styles.scss';

class Form extends React.Component {

    state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      formErrors : {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { formErrors } = this.state;
      console.log(formErrors);
      for(let i=0; i <= formErrors.length; i++)
      {
        console.log('wow');
      }
    }

    changeHandler = (e) => {
      const { name, value } = e.target;

      this.setState({
        [name] : value
      },()=>{
        if(name === 'firstname')
        {
          value.length <= 4 
            ? 
            this.setState({
              formErrors : {
                firstname : 'first name should be atleast 4 characters long '
              }
            })
            : 
            this.setState({
              formErrors : {
                firstname : ''
              }
            });
        }
        else if(name === 'lastname')
        {
          value.length <= 4 
            ? 
            this.setState({
              formErrors : {
                lastname : 'Last name should be atleast 4 characters long '
              }
            })
            : 
            this.setState({
              formErrors : {
                lastname : ''
              }
            });
        }
        else if(name === 'email')
        {
          const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
          if(!email)
          {
                    
            this.setState({
              formErrors : {
                email : 'Please type a valid email'
              }
            });
          }
          else
          {
            this.setState({
              formErrors : {
                email : ''
              }
            }); 
          }
        }
        else if(name === 'password')
        {
          value.length <= 6 
            ? 
            this.setState({
              formErrors : {
                password : 'Password should be atleast 6 characters long'
              }
            })
            : 
            this.setState({
              formErrors : {
                password : ''
              }
            });
        }
      });
    }

    render()
    {
      const { firstname, lastname, email, password, formErrors } = this.state;
      return(
        <div className="wrapper">
          <h4>Create Account</h4>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" placeholder="First name" name="firstname" onChange={this.changeHandler} value={firstname} 
                className= {formErrors.firstname ? 'error' : null }
              />
              {formErrors.firstname}
            </div>
            <div>
              <input type="text" placeholder="Last name" name="lastname" onChange={this.changeHandler} value={lastname}/>
              {formErrors.lastname}
            </div>
            <div>
              <input type="email" placeholder="email" name="email" onChange={this.changeHandler} value={email}/>
              {formErrors.email}
            </div>
            <div>
              <input type="password" placeholder="password" name="password" onChange={this.changeHandler} value={password}/>
              {formErrors.password}
            </div>
            <button type="submit">Create account</button>
          </form>
        </div>
      );
    }
}

export default Form;