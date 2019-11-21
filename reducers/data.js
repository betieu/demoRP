const initialState = {
    dataHome:{},
    dataProduct:{}
}
export function redux_data(state = initialState, action) {
    switch(action.type){
        case "SAVE_DATA": 
            return {...state,dataHome:action.data}

        case "DATA_PRODUCT":
            return {...state,dataProduct:action.data}
        default:
            return state
    }
}