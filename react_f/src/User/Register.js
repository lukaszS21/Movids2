import './UserCSS/Login.css'
function Register(){
    return(

        <div className="BackLogin">

            <div className="BackLogin2">

                <div className="Box">
                    <div className="text">
                        <div className="Login">
                            Register
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="email"/>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control" id="inputPassword4" placeholder="password"/>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control" id="inputPassword4" placeholder="ComfirmPassword"/>
                        </div>
                        <div className="ButtonLog">
                            <a className="btn btn-secondary" href="Page1" role="button"> LogIn</a>
                        </div>
                        <div className="links2">
                            Have an account? <a href="Login" className="Sing2">Sign In</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register