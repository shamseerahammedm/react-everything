import React, { Component } from 'react';
import { authAsync, logOut } from '../redux/redux-files/general/general.actions';
import { connect } from 'react-redux';

class Authentication extends Component {

    state = {
      password: '',
      email: '',
      isSignUpMode: false
    }

    submitHandler = (e, method) => {
      e.preventDefault();
      const { onAuth } = this.props;
      const { password, email } = this.state;
      // console.log(this.state,method);
      onAuth(email, password, method);

    }

    switchSignUpMode = () => {
      this.setState((prevState) => ({
        isSignUpMode: !prevState.isSignUpMode
      }));
    }

    changeHandler = (e) => {
      const { value, name } = e.target;
      this.setState({
        [name]: value
      }, () => {
        // console.log(this.state);
      });
    }

    componentDidMount()
    {
      alert(1);
    }

    render() {
      const { isSignUpMode } = this.state;
      const { isAuthenticated } = this.props;
      return (
        <>
          <header>
            {
              isAuthenticated ?
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    const { logOut } = this.props;
                    logOut();
                  }}
                >
                                Log Out
                </button>
                :
                <button className="btn btn-danger">Log In</button>
            }
            <button onClick={this.setTimeOuthandler}>Set</button>
          </header>
          <div className="container">
            <div className="row mt-4">
              <div className="col-sm-6">
                {
                  isAuthenticated ?
                    <p>Your signed In</p>
                    :
                    (
                      isSignUpMode ?
                        <>
                          <label htmlFor="">SignUp Form</label>
                          <form onSubmit={(e) => this.submitHandler(e, 'signup')}>
                            <div className="form-group">
                              <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" name="password" placeholder="Password" onChange={this.changeHandler} />
                            </div>
                            <button className="btn btn-primary"> {isSignUpMode ? ' Sign Up' : 'Sign In'} </button>
                          </form>
                          <div className="form-group mt-4">
                            <button className="btn btn-info" onClick={this.switchSignUpMode}>Switch SignUp</button>
                          </div>
                        </>
                        :
                        <>
                          <label htmlFor="">SignIn Form</label>
                          <form onSubmit={(e) => this.submitHandler(e, 'signin')}>
                            <div className="form-group">
                              <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" name="password" placeholder="Password" onChange={this.changeHandler} />
                            </div>
                            <button className="btn btn-primary"> {isSignUpMode ? ' Sign Up' : 'Sign In'} </button>
                          </form>
                          <div className="form-group mt-4">
                            <button className="btn btn-info" onClick={this.switchSignUpMode}>Switch SignUp</button>
                          </div>
                        </>
                    )

                }

              </div>
            </div>
          </div>
        </>
      );
    }
}

const mapStateToProps = ({ generalReducer }) => {
  return {
    isAuthenticated: generalReducer.token ? true : false,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, method) => dispatch(authAsync(email, password, method)),
    logOut: () => dispatch(logOut())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
