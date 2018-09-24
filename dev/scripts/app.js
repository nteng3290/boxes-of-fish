import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Input from './components/Input';
import Facebook from './components/Facebook';
import Google from './components/Google';
import Twitter from './components/Twitter';

class App extends React.Component {
    constructor() {
      super();
      this.state={
        loggedIn : false,
      }
      this.passwordInput = React.createRef();
      this.loginUpdate = this.loginUpdate.bind(this);
    };
    loginUpdate(e){
      //Check User login
      e.preventDefault();
      this.setState({
        loggedIn : !this.state.loggedIn,
      })
    }
    checkPassword(){
      //Check length of password
      this.passwordInput;
      console.log(this.passwordInput);
    }
    render() {
      return <React.Fragment>
          <div className="logo-screen">
            <h1>AcmeStack</h1>
            <div className="logo-icon">
              <img src="/images/svg/logo-acmestack.svg" alt="AcmeStack Logo" />
            </div>
          </div>
          <div className="login-screen">
            <form className="login-form">
              <Input type="text" name="username" />
              <Input type="password" name="password" ref={this.passwordInput}/>
              <Button btnType="login" click={this.loginUpdate} login={this.state.loggedIn} />
            </form>
            <Input type="checkbox" name="remember" text="remember me" />
            <div className="social-media-container">
              <Google />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </React.Fragment>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
