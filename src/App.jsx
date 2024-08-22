import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import volleyService from "./services/volei_service.js";
import ListOfComponents from "./components/list_of_components/ListOfComponents.jsx";
import LoadingSpinner from "./components/loading_spinner/LoadingSpinner.jsx"; // Importe o componente

function App() {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  async function getData(params) {
    setLoading(true); // Inicia o carregamento
    try {
      const data = await volleyService.getTeamsOfVolley(params);
      console.log(data.response);
      let value = data.response.map(team => {
        return { ...team, isFavorited: false };
      });
      setTeams(value);
    } catch (error) {
      console.error("Erro ao buscar times de vôlei:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  }

  const toggleFavorite = (newState, id) => {
    const newTeams = teams.map(team =>
      team.id === id ? { ...team, isFavorited: newState } : team
    );
    setTeams(newTeams);
  };

  const filterTeams = (isFavorited) => {
    let data;

    if (search === "") {
      data = teams.filter(team => team.isFavorited === isFavorited);
      return data;
    }
    data = teams.filter(team =>
      team.isFavorited === isFavorited &&
      team.name.toLowerCase().includes(search.toLowerCase())
    );
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const noTeamsFound = filterTeams(false).length === 0 && filterTeams(true).length === 0;
  
    if (noTeamsFound) {
      if (search.length > 2) {
        getData({ search });
        console.log('Nenhum resultado encontrado, fazendo requisição com pesquisa...');
      } else if (search.length > 2 && noTeamsFound) {
        getData();
        console.log('Nenhum resultado encontrado, carregando dados iniciais...');
      }
    }
  }, [search]);
  

  return (
    <>
      <Header onChange={(value) => setSearch(value.target.value)} />
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <LoadingSpinner />
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginLeft: '20px' }}>
            <ListOfComponents
              teams={filterTeams(false)}
              onFavoriteToggle={toggleFavorite}
              title="Times de Vôlei"
            />
          </div>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <ListOfComponents
              teams={filterTeams(true)}
              onFavoriteToggle={toggleFavorite}
              title="Times de Vôlei Favoritos"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
