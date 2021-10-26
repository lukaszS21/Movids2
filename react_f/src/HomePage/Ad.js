import './HomeCSS/Ad.css'
import zdj from './Ig.jpg'
import zdj2 from './HomeCSS/2.jpg'
function Ad(){

    return (
        <div className="Ad">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="Items">
                            <img className="Img" src={zdj} alt="zdj"/>
                            <div className="Words">
                                <div className="Words2">
                                    Igrzyska Smierci
                                </div>
                                <div className="Words3">
                                    Na znak terroru i poniżenia dystryktów, co roku organizowane są Głodowe Igrzyska,
                                    w których biorą udział młodzi ludzie w wieku między 12 a 18 rokiem życia.
                                    Główną bohaterką jest Katniss Everdeen, która zgłasza się na ochotnika,
                                    żeby chronić siostrę. ... Przed wielu laty trzynaście dystryktów podniosło bunt przeciw stolicy.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="Items">
                            <img className="Img" src={zdj2} alt="zdj"/>
                            <div className="Words">
                                <div className="Words2">
                                   Spider Man 3
                                </div>
                                <div className="Words3">
                                    Kiedy kostium Parkera nagle zmienia kolor na czarny, a jego moc staje się jeszcze większa,
                                    metamorfozie ulega również sam człowiek-pająk. Ujawnia się mroczna osobowość Spider-Mana.
                                    Na skutek nieujarzmionej pychy, Peter zaczyna zaniedbywać ludzi, na których zależy mu najbardziej.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="Items">
                            <img className="Img" src={zdj} alt="zdj"/>
                            <div className="Words">
                                <div className="Words2">
                                    Najlepszy film
                                </div>
                                <div className="Words3">
                                    Najlepszy film2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )

}
export default Ad