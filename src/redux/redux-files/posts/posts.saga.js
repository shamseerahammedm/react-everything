import  postActionTypes from './posts.types';

import { takeEvery, put } from 'redux-saga/effects';
import { setPostsFailure, setPostsSuccess } from './posts.actions';




export function* setPostsStartAsync()
{
    try{
        const postsData = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = (yield postsData.json()).slice(0,10);
        yield put(setPostsSuccess(posts));
    }
    catch(err)
    {
        yield put(setPostsFailure(err))
    } 
}


export function* setPostsStart()
{
    yield takeEvery( postActionTypes.SET_POSTS_START, setPostsStartAsync )
}