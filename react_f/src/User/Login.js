import './UserCSS/Login.css'
function Login(){
    return(

        <div className="BackLogin">

            <div className="BackLogin2">

                <div className="Box">
                    <div className="text">
                        <div className="Login">
                            Login
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="email"/>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control" id="inputPassword4" placeholder="password"/>
                        </div>
                        <div className="ButtonLog">
                            <a className="btn btn-secondary" href="Movids" role="button"> LogIn</a>
                        </div>
                        <div className="links">
                            Don't have an account? <a href="Register" className="Sing">Sign Up</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login