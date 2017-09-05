/**
*
* SignUp
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SignUp extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="newInputContainer">
          <a name="signUP"></a>
          <br /><p>Sign up with us!</p><br />
          <input type="text" className="newNameInput" id="newNameInput"  placeholder="(name)" value="" onChange="" onKeyDown="" />
          <input type="text" className="newEmailInput" id="newEmailInput"  placeholder="(email)" value="" onChange="" onKeyDown="" />
          <input type="text" className="newPwInput" id="newPwInput"  placeholder="(password)" value="" onChange="" onKeyDown="" />
          <input type="submit" className="signUPButton" value="Submit" onClick="" />
            <br />
            <br />
            <div className="signUPDiv">
            <p><a href=""></a></p>
            </div>
        </div>
      </div>
    );
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object
};
