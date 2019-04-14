import React, {Component} from 'react';
import Navbar from "../layout/Navbar";
import axios from "axios";

class Register extends Component {

    state = {
        username: '',
        password: '',
        error: false
    };

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    validateForm = () => {

        const {username, password} = this.state;

        return !(username === "" || password === "");

    };

    registerUser = async e => {
        e.preventDefault();

        const {username, password} = this.state;

        const newUser = {
            username,
            password
        };

        if (!this.validateForm()) {
            this.setState({
                error: true
            });
            setTimeout(() => {

                this.setState({
                    error: false
                });
            }, 1500);
            return;
        }

        await axios.post("http://192.168.1.33:5000/api/register", newUser);

        this.props.history.push("/login");
    };

    render() {

        const {username, password, error} = this.state;
        return (

            <div className="container">
                <Navbar/>
                <div className="container col-sm-8 card">
                    <div className="card-header">
                        <h4>Register Form</h4>
                    </div>
                    <div className="card-body">
                        {error ?
                            <div className="alert alert-danger">Lütfen Bilgilerinizi Kontrol
                                Ediniz</div>
                            : null
                        }
                        <form onSubmit={this.registerUser}>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <input type="text" name="username" id="username" placeholder="Enter Username"
                                       className="form-control" value={username}
                                       onChange={this.changeInput}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Password</label>
                                <input type="password" name="password" id="password"
                                       placeholder="Enter Password"
                                       className="form-control" value={password}
                                       onChange={this.changeInput}/>
                            </div>
                            <button className="btn btn-danger btn-block" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;