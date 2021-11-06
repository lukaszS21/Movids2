import './UserCSS/Login.css'
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export class Register extends Component {


    handleSubmit = event => {
        event.preventDefault()
        console.log("tu")
        const user = {
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword,


        };
        console.log(user);


        axios.post("http://localhost:8080/home/registration", user).then(
            res => {
                alert("User created succesful")
                console.log(res);

            }
        ).catch(
            err => {
                alert("User not created succesful")
                console.log(err);
            }
        )

    };

    render() {
        return (
            <form  onSubmit={this.handleSubmit} action="Movids" method="post"  >
            <div className="BackLogin">

                <div className="BackLogin2">

                    <div className="Box">
                        <div className="text">
                            <div className="Login">
                                Register
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="email"
                                       onChange={event => this.email=event.target.value}/>
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control" id="inputPassword4" placeholder="password"
                                       onChange={event => this.password=event.target.value}/>
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control" id="inputPassword4" placeholder="ComfirmPassword"
                                       onChange={event => this.confirmPassword=event.target.value}/>
                            </div>
                            <div className="ButtonLog">
                                <button className="btn btn-secondary">Register</button>
                            </div>
                            <div className="links2">
                                Have an account? <a href="Login" className="Sing2">Sign In</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            </form>

        );
    }
}
export default Register;