import Card from "../card/Card";
import "./list_of_components.css";

export default function ListOfComponents({ teams, onFavoriteToggle, title }) {

    if (teams.length === 0) {
       return (
        <>
         <h1>{title}</h1>
         <h4>Não há times</h4>
        </>
          
       )
        
    }
    return (
        <>
            <h1>{title}</h1>
            <div className="list-of-cards">
               
                {teams.map((team) =>
                (
                    <Card
                        key={team.id}
                        id={team.id}
                        title={team.name}
                        description={team.country.name}
                        image={team.logo}
                        isFavorited={team.isFavorited}
                        onFavoriteToggle={onFavoriteToggle}
                    />
                )
                )}
            </div>
        </>
    );
}
