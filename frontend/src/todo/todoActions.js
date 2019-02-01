import Axios from 'axios'

const URL = 'http://localhost:3004/api/todos'

export const changeDescription = (e) => ({
    type: 'CHANGEDESCRIPTION',
    payload: e.target.value
})

export const pesquisar = () => {
    const request = Axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'PESQUISATODO',
        payload: request
    }
}