import restClient from "../helper/rest_client_axios";

const volleyService = {
    getTeamsOfVolley(params = {}) {
        // Parâmetros padrão
        const defaultParams = {
            country: 'Brazil',
            id: params.id || null,
            name: params.name || null,
            country_id: params.country_id || null,
            league: params.league || null,
            season: params.season || null,
            search: params.search || null
        };

        return restClient.get('teams', { params: defaultParams })
            .then(response => {
            
                return response.data; // Retorna os dados para uso posterior
            })
            .catch(error => {
                console.error("Erro ao buscar times de vôlei:", error);
                throw error; // Lança o erro para que ele possa ser tratado onde o serviço é chamado
            });
    }
};

export default volleyService;
