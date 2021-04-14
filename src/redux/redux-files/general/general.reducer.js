import generalTypes from './general.types'; 



const INITIAL_STATE = {
    token : null,
    userId : null,
    loading : false,
    error : null
}



const generalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case generalTypes.AUTH_START :
            return {
                ...state,
                error : null,
                loading : true
            }
        case generalTypes.AUTH_SUCCESS :
            console.log(action.payload);
            return {
                ...state,
                token : action.payload.idToken,
                userId : action.payload.localId,
                loading : false,
                error : null 
            }
        case generalTypes.AUTH_FAILURE :
            return {
                ...state,
                token : null,
                userId : null,
                loading : false,
                error : null 
            }
        case generalTypes.LOG_OUT :
            return {
                ...state,
                token : null,
                userId : null,
                error : null 
            }
        default:
            return state
    }
}


export default generalReducer;