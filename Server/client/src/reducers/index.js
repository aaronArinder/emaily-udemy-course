import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveyReducer
});

//the keys are important because they are how we refer to the reducers
//in the state object of Redux

//the 'form' key is where reduxForm assumes the reducer will be stored; check
//docs for how to change the keyname
