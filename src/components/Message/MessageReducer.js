const ActionType = {
  SHOW_MESSAGE: 'SHOW_MESSAGE',
  HIDE_MESSAGE: 'HIDE_MESSAGE',
};

const MessageTypes = {
  Success: 'success',
  Error: 'error',
  Info: 'info',
};

const MessageContentTypes = {
  Contact: {
    messageType: MessageTypes.Success,
    title: 'Спасибо за обращение в наш банк.',
    content: 'Наш менеджер скоро свяжется с Вами по указанному номеру телефона.',
  },
};

const defaultState = {
  isVisible: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MESSAGE:
      return {
        isVisible: true,
        ...action.payload,
      };
    case ActionType.HIDE_MESSAGE:
      return {
        isVisible: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export {
  ActionType,
  MessageTypes,
  MessageContentTypes,
  reducer,
};
