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
        default:
            return state
    }
}