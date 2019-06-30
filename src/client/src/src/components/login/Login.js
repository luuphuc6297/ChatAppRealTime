import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {userLogin} from '../../api/user/user';
class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
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

        // exports.CheckUserLogin = (req, res, next) => {
        //     const { email, password } = req.body;
        //     if (!email || !password) {
        //         return send.fail(res, "Please enter all fields")
        //     }
        //     if (email) {
        //         User.findOne({ email: email }).then(user => {
        //             if (!user) {
        //                 return send.fail(res, "User dose not exist");
        //             }
        //             ComparePassword.comparePassword (password, user.password, res);
        //             if(!user.password) {
                        
        //             }
        //         });
        //     }
        // }
        userLogin (this.state.email, this.state.password);
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Login</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default Login;