import { combineReducers } from 'redux';
import postsReducer from './posts/posts.reducer';
import generalReducer from './general/general.reducer';
import { reducer as formReducer } from 'redux-form'





const rootReducer = combineReducers({
    postsReducer,
    generalReducer,
    form : formReducer
})


export default rootReducer;