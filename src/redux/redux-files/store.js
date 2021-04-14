import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';



// redux thunk implementation starts 

    import thunk from 'redux-thunk';
    // let middleWares = [logger,thunk];
    // const store = createStore(rootReducer, applyMiddleware(...middleWares));

// redux thunk implementation ends  






// redux saga implementation starts 
    import rootSaga from './rootSaga';
    import createSagaMiddleware from 'redux-saga';
    const sagaMiddleware = createSagaMiddleware();
    let middleWares = [sagaMiddleware,logger,thunk];
    export const store = createStore(rootReducer, applyMiddleware(...middleWares));
    sagaMiddleware.run(rootSaga);

// redux saga implementation ends  


export default store;