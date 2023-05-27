export const addCharacter=(character)=>{
    return{
        type:'ADD_CHARACTER',
        payload: character
    }
}

export const deleteCharacter=(id)=>{
    return{
        type:'DELETE_CHARACTER',
        payload: id
    }
}