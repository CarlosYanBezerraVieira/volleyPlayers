
export default function Card(props) {

    return (
        <div className="card">
            <img src={props.image} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}