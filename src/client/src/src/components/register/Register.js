import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {userRegister} from '../../api/user/user'
class Register extends Component {
    constructor() {
        super();

        this.state = {
          name: '',
          email: '',
          password: '',
          confirmpassword: '',
          phone: '', 
          hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
          // if (!name || !email || !password || !password2 || !phone) {
          //     return send.fail(res, "Please enter all fields");
          // }
          // if (password !== password2) {
          //     return send.fail(res, "Passwords do not match");
          // }
          // if (password.length < 6) {
          //     return send.fail(res, "Password must be at least 6 characters");
          // }
        userRegister(this.state.name, this.state.email, this.state.password, this.state.confirmpassword, this.state.phone)
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirmpassword" className="FormField__Input" placeholder="Enter your confirm password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">phone</label>
                <input type="text" id="phone" className="FormField__Input" placeholder="Enter your phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Register</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default Register;