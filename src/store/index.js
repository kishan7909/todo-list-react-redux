import { createStore } from 'redux'

const initialvalue = {
    inputText : '',
    items : [],

}

const reducer = (state = initialvalue , action) => {
    console.log('reducer running',action)
    switch(action.type){
        case 'INPUT_CHANGE' :
            return Object.assign({}, state , {inputText : action.text})
        case 'ADD_ITEM' :
            return Object.assign({}, state , {items : state.items.concat(state.inputText),inputText : '',})
        case 'DELETE_ITEM' :
            const copyOfItems = state.items.slice();
            copyOfItems.splice(action.index,1)
            return Object.assign({},state, {items : copyOfItems })

        default :
            return state
    }

}
const store = createStore(reducer);

export default store;
