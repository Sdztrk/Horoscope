 import "../body/Body.scss"
 import "../../scss/Variables.scss"
 import "../../scss/Mixins.scss"

const Card = (item) => {
    return(
        <div className="cards">
            <h1 className="title"> {item.title} </h1>
            <img src={item.image} />
            <p className="card-over"> {item.desc} </p> 
        </div>
    )
}

export default Card;