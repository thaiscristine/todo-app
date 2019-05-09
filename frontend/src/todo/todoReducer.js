const INITIAL_STATE ={
    description: 'Ler livro',
    list: [{
        _id:1,
        description: 'paga asdasdr fatura',
        done: true
    },{
        _id:2,
        description: 'test',
        done:false
    },{
        _id: 3,
        description: 'reuniao',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {
                ...state, description: action.payload
            }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}