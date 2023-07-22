
import "../../scss/Variables.scss"
import "../../scss/Mixins.scss"
import "../navbar/Navbar.scss"
import logo from "../../helper/logo.png"


const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src= {logo} alt="logo" />
            </div>
            <nav className="link">
                <a href="#horsocope">horoscope</a>
                <a href="#daily">daily</a>
                <a href="#tarot">tarot</a>
                <a href="#article">article</a>
                <a href="#contact">contact</a>
            </nav>
        </div>
    )
}


export default Navbar;