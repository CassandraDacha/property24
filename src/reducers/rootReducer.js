import propertyReducer from './propertyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  property: propertyReducer
});

export default rootReducer