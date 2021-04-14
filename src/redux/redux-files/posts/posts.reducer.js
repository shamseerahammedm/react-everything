import postActionTypes from './posts.types'; 



const INITIAL_STATE = {
    posts: [],
    isFetching : false,
    errorMessage : undefined,
    currentFormCategory : null
}



const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postActionTypes.SET_POSTS:
            return {
                ...state,
                posts : action.payload
            }
 
    // redux thunk start 

        case postActionTypes.SET_POSTS_START :
            return {
                ...state,
                isFetching : true
            }
        case postActionTypes.SET_POSTS_SUCCESS :
            // console.log(action.payload);
            return {
                ...state,
                isFetching : false,
                posts : action.payload
            }
        case postActionTypes.SET_POSTS_FAILURE :
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload
            }

    // redux thunk ends 


        case 'SET_FORM_CATEGORY' : 
        return {
            ...state,
            currentFormCategory : action.payload
        }





        default:
            return state
    }
}


export default postsReducer;