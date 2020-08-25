import {
    createStore as reduxCreateStore,
    combineReducers,
} from 'redux';

// Import reducers
// import { ProductsReducer } from '../products/reducers';
import UsersReducer from '../users/reducers'

const createStore = () => {
    return reduxCreateStore(
        combineReducers({
            // products: ProductsReducer,
            users: UsersReducer,
        })
    );
};

export default createStore;
