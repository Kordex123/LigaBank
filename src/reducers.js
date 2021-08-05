import { combineReducers } from 'redux';

import { reducer as calculator } from './components/Calculator/CalculatorReducer';
import { reducer as login } from './components/Login/LoginReducer';
import { reducer as message } from './components/Message/MessageReducer';

export default combineReducers({
  calculator,
  login,
  message,
});
