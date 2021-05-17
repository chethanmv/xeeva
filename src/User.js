import React from 'react';
  
class User extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["firstname"] = "";
        input["lastname"] = "";
        input["mobilenumber"] = "";
        input["email"] = "";
        input["dob"] = "";
        input["Address"] = "";
        input["City"] = "";
        input["State"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Form is submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["firstname"]) {
        isValid = false;
        errors["firstname"] = "Please enter your firstname.";
      }
      if (typeof input["firstname"] !== "undefined") {
          
        var pattern = new RegExp(/^[A-Za-z]+$/);
        if (!pattern.test(input["firstname"])) {
          isValid = false;
          errors["firstname"] = "Please input alphabet characters only ";
        }
      }

      if (!input["lastname"]) {
        isValid = false;
        errors["lastname"] = "Please enter  your lastname.";
      }
      if (typeof input["lastname"] !== "undefined") {
          
        var pattern = new RegExp(/^[A-Za-z]+$/);
        if (!pattern.test(input["lastname"])) {
          isValid = false;
          errors["lastname"] = "Please input alphabet characters only ";
        }
      }

      if (!input["mobilenumber"]) {
        isValid = false;
        errors["mobilenumber"] = "Please enter your mobilenumber.";
      }
      if (typeof input["mobilenumber"] !== "undefined") {
          
        var pattern = new RegExp(/^[0-9]+$/);
        if (!pattern.test(input["mobilenumber"])) {
          isValid = false;
          errors["mobilenumber"] = "Please input numbers only ";
        }
      }
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["dob"]) {
        isValid = false;
        errors["dob"] = "Please select Date of Birth.";
      }
      if (!input["Address"]) {
        isValid = false;
        errors["Address"] = "Please enter your Address.";
      }
      if (!input["City"]) {
        isValid = false;
        errors["City"] = "Please enter your City.";
      }
      if (!input["State"]) {
        isValid = false;
        errors["State"] = "Please enter your State.";
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
      if (typeof input["password"] !== "undefined") {
          
        var pattern = new RegExp("^(?=.{8,})");
        if (!pattern.test(input["password"])) {
          isValid = false;
          errors["password"] = "Please enter min 8 characters.";
        }
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      
      <div>
         <h1>User Registration</h1>
        <div className="container">
        <form onSubmit={this.handleSubmit}>
         <div class="row">
          <div class="form-group col-sm-6">
            <label for="name">FirstName:</label>
            <input 
              type="text" 
              name="firstname" 
              value={this.state.input.firstname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter firstname" 
              id="firstname" />
  
              <div className="text-danger">{this.state.errors.firstname}</div>
          </div>
          <div class="form-group col-sm-6">
            <label for="name">LastName:</label>
            <input 
              type="text" 
              name="lastname" 
              value={this.state.input.lastname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter lastname" 
              id="lastname" />
  
              <div className="text-danger">{this.state.errors.lastname}</div>
          </div>
          </div>
          <div class="row">
          <div class="form-group col-sm-6">
            <label for="mobilenumber">Mobile Number:</label>
            <input 
              type="text" 
              name="mobilenumber" 
              value={this.state.input.mobilenumber}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter mobilenumber" 
              id="mobilenumber" />
  
              <div className="text-danger">{this.state.errors.mobilenumber}</div>
          </div>
  
          <div class="form-group col-sm-6">
            <label for="email">Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
          </div>
          <div class="row">
          <div class="form-group col-sm-6">
            <label for="DOB">DOB:</label>
            <input 
              type="date" 
              name="dob" 
              value={this.state.input.dob}
              onChange={this.handleChange}
              class="form-control" 
              id="dob" />
  
              <div className="text-danger">{this.state.errors.dob}</div>
          </div>
          <div class="form-group col-sm-6">
            <label for="Address">Address:</label>
            <input 
              type="text" 
              name="Address" 
              value={this.state.input.Address}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your Address" 
              id="Address" />
  
              <div className="text-danger">{this.state.errors.Address}</div>
          </div>
          </div>
          <div class="row">
          <div class="form-group col-sm-6">
            <label for="City">City:</label>
            <input 
              type="text" 
              name="City" 
              value={this.state.input.City}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your City" 
              id="City" />
  
              <div className="text-danger">{this.state.errors.City}</div>
          </div>
          <div class="form-group col-sm-6">
            <label for="State">State:</label>
            <input 
              type="text" 
              name="State" 
              value={this.state.input.State}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your State" 
              id="State" />
  
              <div className="text-danger">{this.state.errors.State}</div>
          </div>
          </div>
          <div class="row">
          <div class="form-group col-sm-6">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group col-sm-6">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
          </div>
          <br></br>
          <input type="submit" value="Submit" class="btn btn-success" />
        </form>
      </div>
      </div>
    );
  }
}
  
export default User;