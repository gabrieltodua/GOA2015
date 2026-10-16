import './Templateproduct.css'
export default function Templateproduct(props) {
    return (
        <div className="main">

            <h1>Title :  {props.Title}</h1>
            <h4>Price : {props.Price}$</h4>
            <h4>Rating : {props.Rating}</h4>
            <h5>Description : {props.Description}</h5>

        </div>
    )
}