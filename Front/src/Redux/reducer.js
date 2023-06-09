const initialState = {
    myFavorites:[]
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case 'ADD_CHARACTER':
        return{
            ...state, 
            myFavorites:[...state.myFavorites, action.payload]
        }
        case 'DELETE_CHARACTER':
        return{
            ...state,
            myFavorites:state.myFavorites.filter(char=>char.id !== Number(action.payload))
        }
        default:
            return{...state}
    }
}

export default reducer;