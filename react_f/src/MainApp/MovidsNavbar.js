import logo from "../HomePage/logo.png";
import './Css/Movids.css'

function MovidsNavbar() {
    return(

    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid2">
            <img src={logo}
                 className="logoMovids"/>
            <a className="navbar-brand2" href="#">Logout</a>
        </div>
        <div className="container-fluid">

            <a className="navbar-brand" href="films">Films</a>
            <a className="navbar-brand" href="Serials">Serials</a>
            <a className="navbar-brand" href="Rankings">Rankings</a>

        </div>

    </nav>



    )
}
export default MovidsNavbar;