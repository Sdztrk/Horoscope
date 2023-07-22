
import Card from "./Card"
import {data} from "../../helper/Data.js"
 import "../body/Body.scss"
 import "../../scss/Variables.scss"
 import "../../scss/Mixins.scss"


 console.log(data)

const Body = () => {
    return(
        <div className="card-container">
            {data.map((data, index) => {
                return (<Card  {...data} key= {index} />)
            })}
        </div>
    )
}

export default Body;