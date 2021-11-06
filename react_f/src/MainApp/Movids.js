
import MovidsNavbar from "./MovidsNavbar";
import SerialsAction from "./viedo/Serials/SerialsAction";
import './Moivds.css'
import {Carousel} from "react-elastic-carousel"
import { useRef, useState } from "react";
function Movids() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    return(

        <div>
            <MovidsNavbar/>
            <SerialsAction/>
            <div className="Serials">


            <div className="card" >
                <img src={process.env.PUBLIC_URL+"img/Ig.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
                <div className="card" >
                    <img src={process.env.PUBLIC_URL+"img/Ig.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" >
                    <img src={process.env.PUBLIC_URL+"img/Ig.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" >
                    <img src={process.env.PUBLIC_URL+"img/Ig.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" >
                    <img src={process.env.PUBLIC_URL+"img/Ig.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" >
                    <img src={process.env.PUBLIC_URL+"img/Ig.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </div>
        </div>

    )
}
export default Movids;