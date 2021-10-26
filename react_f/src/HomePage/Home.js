import './HomeCSS/Home.css';
import HomeNavBar from "./HomeNavBar"
import PageFooter from "../PageFooter/PageFooter";
import Border from "./Border";
import Ad from "./Ad";
import Ad2 from "./Ad2";

import logo from "./logo.png"
function Home() {
 return(
    <div className="BackGround1">
        <div className="BackGround2">
            <HomeNavBar/>

            <div className="main">
                <img  className="logo" src={logo} alt="logo"/>
                <div className="Content2">
                    <div className="Content">
                        Stwórz Swoje konto już dziś!
                    </div>
                    <div className="Content">
                        Korzystaj z setek filmów i seriali
                    </div>
                    <div className="Content">
                        dostępnych w każdej chwili!
                    </div>
                </div>
                <div className="Register">
                    <a className="btn btn-dark  btn-lg" href="Register" role="button"> Register</a>
                </div>

            </div>

        </div>
        <Border/>
        <Ad/>
        <Border/>
        <Ad2/>
        <Border/>

        <PageFooter/>

    </div>


 )
}
export default Home;