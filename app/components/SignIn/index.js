/**
*
* SignIn
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="inputContainer">
          <br />
          <p>Already a registered user?</p>
          <p>Sign in here!</p><br />
          <input type="text" className="nameInput" id="nameInput"  placeholder="(name)" value="" onChange="" onKeyDown="" />
          <input type="text" className="emailInput" id="emailInput"  placeholder="(email)" value="" onChange="" onKeyDown="" />
          <input type="text" className="pwInput" id="pwInput"  placeholder="(password)" value="" onChange="" onKeyDown="" />
          <input type="submit" className="signINButton" value="Submit" onClick="" />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

SignIn.contextTypes = {
  router: React.PropTypes.object
};
