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
        loading: false,
      }
      this.loginUpdate = this.loginUpdate.bind(this);
      this.logout = this.logout.bind(this);
    };
    loginUpdate(e){
      //Check password length    
      const inputPassword = document.querySelector('input[type=password');
      const errorMessage = document.querySelector('.error-msg')
      
      if (inputPassword.value.length < 8) {
        inputPassword.classList.add("error");
        errorMessage.append("password must be between 8 to 24 characters")
      }
      else{
        inputPassword.classList.remove("error");
        // Check User login
        e.preventDefault();
        this.setState({
          loading: true,
        })
        setTimeout(() => {
          this.setState({
            loggedIn: !this.state.loggedIn,
            loading: false,
          })
        }, 2000)
      }
    }
    logout(e){
      e.preventDefault();
      this.setState({
        loading: true,
      })
      setTimeout(() => {
        this.setState({
          loggedIn: !this.state.loggedIn,
          loading: false,
        })
      }, 2000)
    }

    render() {
      return <React.Fragment>
          <div className="logo-screen">
            <h1>AcmeStack</h1>
            <div className="logo-icon">
              <div className="bg" />
              <svg id="SvgLogoAcmeStack" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44">
                <defs>
                  <linearGradient id="SvgLogoAcmeStackGradient" x1="6.725" x2="37.275" y1="37.279" y2="6.729" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#7e24fa" />
                    <stop offset="1" stop-color="#caaef2" />
                  </linearGradient>
                </defs>
                <path fill="url(#SvgLogoAcmeStackGradient)" d="M44 22.007a2.928 2.928 0 0 0-1.477-2.56l-1.911-1.104 1.909-1.102c.926-.534 1.479-1.49 1.479-2.559s-.552-2.025-1.477-2.56L23.482 1.121a2.961 2.961 0 0 0-2.956-.001L1.478 12.117A2.926 2.926 0 0 0 0 14.677c0 1.069.552 2.026 1.478 2.56l1.91 1.103-1.911 1.103A2.923 2.923 0 0 0 0 22.001c0 1.068.552 2.025 1.478 2.56l1.91 1.102-1.91 1.103A2.929 2.929 0 0 0 0 29.326c0 1.069.552 2.026 1.478 2.56l19.05 10.994a2.953 2.953 0 0 0 2.954-.001L42.521 31.89A2.922 2.922 0 0 0 44 29.332a2.928 2.928 0 0 0-1.477-2.56l-1.911-1.104 1.909-1.102A2.925 2.925 0 0 0 44 22.007zM21.991 3.702L41.032 14.66 22.005 25.642 7.328 17.205a1.467 1.467 0 0 0-.456-.262l-3.904-2.244L21.991 3.702zm19.041 25.607L22.017 40.298 2.968 29.349l3.401-1.964 14.159 8.172a2.963 2.963 0 0 0 2.954-.001l14.156-8.171 3.394 1.924zm-19.015 3.665L7.329 24.53a1.488 1.488 0 0 0-.458-.263l-3.903-2.243L6.37 20.06l14.158 8.171a2.953 2.953 0 0 0 2.954-.001l14.156-8.171 3.393 1.925-19.014 10.99z" />
              </svg>
            </div>
          </div>
          {this.state.loggedIn ? <div className="success-screen">
              <div className="success-script">
                <h2>Congratulations</h2>
                <p>You have successfully logged in.</p>
              </div>
              <Button btnType="sign out" click={this.logout} loading={this.state.loading} login={this.state.loggedIn} />
            </div> : <div className="login-screen">
              <form className="login-form">
                <Input type="text" name="username" />
                <Input type="password" name="password" />
                <Button btnType="login" click={this.loginUpdate} loading={this.state.loading} login={this.state.loggedIn} />
              </form>
              <div className="error-msg-container">
                <p className="error-msg" />
              </div>
              <div className="check-rmb">
                <Input type="checkbox" name="remember" text="remember me" />
              </div>
              <div className="social-media-container">
                <p>or login with</p>
                <div className="social-icons">
                  <Google />
                  <Facebook />
                  <Twitter />
                </div>
              </div>
            </div>}
        </React.Fragment>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
