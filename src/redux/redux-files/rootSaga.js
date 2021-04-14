
import { all, call } from 'redux-saga/effects';
import { setPostsStart } from './posts/posts.saga';




export default function* rootSaga() {
    yield all([
        call(setPostsStart)
    ])
}