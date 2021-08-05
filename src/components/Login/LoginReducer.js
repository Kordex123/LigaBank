const ActionType = {
  SHOW_LOGIN: 'SHOW_LOGIN',
  HIDE_LOGIN: 'HIDE_LOGIN',
};

const defaultLoginState = {
  isVisible: false,
};

const reducer = (state = defaultLoginState, action) => {
  switch (action.type) {
    case ActionType.SHOW_LOGIN:
      return {
        isVisible: true,
      };
    case ActionType.HIDE_LOGIN:
      return {
        isVisible: false,
      };
    default:
      return state;
  }
};

export {
  ActionType,
  reducer,
};
