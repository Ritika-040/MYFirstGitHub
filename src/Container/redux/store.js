import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from "react-router-redux";
import rootReducer from './mainReducer';
import createHistory from "history/createBrowserHistory";
import { postApi ,getApi} from '../Products/Middleware/index';

const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        getApi,
        postApi,
        middleware
    )
);