import useAxios from "../hooks/use-axios";

const playersService = {
    getAllPlayers: useAxios('get', '/players', { "code": "123" })
}

export default playersService