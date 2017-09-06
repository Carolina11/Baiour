/**
*
* SignUp
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SignUp extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name:"",
      email:"",
      password:"",
      user: []
    }
  }

  /*componentWillMount() {
    this.storeUser();
  };*/

  /*componentDidMount () {
    this.newNameInput.focus();
  };*/

  handleName = (event) => {
    this.setState ({
      name:event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState ({
      email:event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState ({
      password:event.target.value
    })
  }

  storeUser = () => {
    let data = new FormData();
    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch('http://localhost:8000/api/signUp', {
      method: 'POST',
      body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error)
      {
        alert(json.error);
      }
       else if (json.success)
      {
        alert(json.success);
        this.signIn();
      }
    }.bind(this))
  };

  signIn = () => {

    let data = new FormData();

    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch ('http://localhost:8000/api/signIn',{
      method: 'POST',
      body: data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      if(json.error)
      {
        alert(json.error);
      }
      else if (json.token)
      {
        sessionStorage.setItem('token', json.token)
        this.getUser(json.token);
      }
    }.bind(this))
  }

  getUser = (token) => {

   fetch('http://localhost:8000/api/getUser', {
     method: 'GET',
     headers:{'Authorization':'Bearer ' + token}
   })
   .then(function(response){
     return response.json();
   })
   .then(function(json){
     sessionStorage.setItem('user', JSON.stringify(json.user));
       alert(JSON.stringify(json.user));

   }.bind(this))
 }


  render() {
    return (
      <div>
        <div className="newInputContainer">
          <a name="signUP"></a>
          <br /><p>Sign up with us!</p><br />
          <input type="text" className="newNameInput" id="newNameInput"  placeholder="(name)" value={this.state.name} onChange={this.handleName} onKeyDown="" />
          <input type="text" className="newEmailInput" id="newEmailInput"  placeholder="(email)" value={this.state.email} onChange={this.handleEmail} onKeyDown="" />
          <input type="text" className="newPwInput" id="newPwInput"  placeholder="(password)" value={this.state.password} onChange={this.handlePassword} onKeyDown="" />
          <input type="submit" className="signUPButton" value="Submit" onClick={this.storeUser} />
            <br />
            <br />

        </div>
      </div>
    );
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object
};
