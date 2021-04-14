import postActionTypes from './posts.types';

// default redux format 
export const setPosts = (posts) => {
    return {
        type : postActionTypes.SET_POSTS,
        payload : posts
    }
}



// thunk starts 


export const setPostsStartAsync = () => {
    return async dispatch => {
        dispatch( setPostsStart());
        try{
            const postsData = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = (await postsData.json()).slice(0,10);
            dispatch( setPostsSuccess(posts));
        }
        catch(err)
        {
            console.log(err);
            dispatch( setPostsFailure(err));
        }
    }
}


export const setPostsStart = () => ({
    type : postActionTypes.SET_POSTS_START
})

export const setPostsSuccess = (posts) => {
    // console.log(posts);
    return {
        type : postActionTypes.SET_POSTS_SUCCESS,
        payload : posts
    }
}

export const setPostsFailure = (error) => ({
    type : postActionTypes.SET_POSTS_FAILURE,
    payload : error
})


// thunk ends
