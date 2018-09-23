import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
// import Social from './components/Social';
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
      this.loginUpdate = this.loginUpdate.bind(this);
    };
    loginUpdate(e){
      e.preventDefault();
      this.setState({
        loggedIn : !this.state.loggedIn,
      })
        
    }
    checkPassword(){

    }
    render() {
      // const SocialIcons = ["google", "facebook", "twitter"];
      return (
        <React.Fragment>
          <div className="logo">
            <h1>AcmeStack</h1>
            <div className="logo-icon">
              <img src="/images/svg/logo-acmestack.svg" alt="AcmeStack Logo"/>
            </div>
          </div>
          <div className="login">
            <form className="login-form">
              <Input type="text" name="username"/>
              <Input type="password" name="password"/>
              <Button btnType="Login" click={this.loginUpdate}/>
            </form>
            <Input type="checkbox" name="remember me"/>
            <div className="social-media-container">
              <Google />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </React.Fragment>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
