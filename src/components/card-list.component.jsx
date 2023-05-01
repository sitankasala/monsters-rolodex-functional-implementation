import '../card-list.css'
import Card from "./card.component";

function CardList({monsters}){
    return (
        <div className='card-list'>
            {monsters.map((monster) =>
                <Card monster={monster}/>
            )}
        </div>
    );
}
export default CardList