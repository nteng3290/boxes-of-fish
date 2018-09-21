import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Social from "./components/Social"

class App extends React.Component {
    render() {
      const SocialIcons = ["google", "facebook", "twitter"];
      return (
        <div>
          <h1>AcmeStack</h1>
          <Button btn-type="Login" />
          <div className="social-media-container">
            { 
              SocialIcons.map(social => (
                <Social type={social} key={social}/>
              ))
            }
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
