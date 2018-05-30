import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import contactReducer from './contact-reducer';

export default combineReducers({
    form: formReducer,
    contact: contactReducer
});
