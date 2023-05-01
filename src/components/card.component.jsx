import '../card.css'

function Card({monster:{id,name,email}}){
    console.log(`id is ${id}`);
    return (
        <div className='card-container' key={id}>
            <img alt={`monster, ${name}`} src={`https://robohash.org/${id}?set=set3`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>);
}
export default Card