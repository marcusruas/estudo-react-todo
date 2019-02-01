const INITIAL_STATE = {
    description: 'Crie uma nova Tarefa',
    list: [
        {_id: 1, description: 'Pagar Fatura', done: true},
        {_id: 2, description: 'Reunião', done: false},
        {_id: 3, description: 'Consulta Médica', done: false}
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGEDESCRIPTION':
            return {...state, description: action.payload}
        case 'PESQUISATODO':
            return {...state, list: action.payload.data}
        default:
            return state
    }
}