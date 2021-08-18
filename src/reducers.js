import { combineReducers } from 'redux';

import { reducer as calculator } from './components/calculator/calculator-reducer';
import { reducer as login } from './components/login/login-reducer';
import { reducer as message } from './components/message/message-reducer';

export default combineReducers({
  calculator,
  login,
  message,
});
