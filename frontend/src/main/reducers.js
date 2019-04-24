import { CombineReducers, combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id:1,
            description: 'pagar fatura',
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
    })
})

export default rootReducer