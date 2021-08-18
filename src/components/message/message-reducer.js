const ActionType = {
  SHOW_MESSAGE: 'SHOW_MESSAGE',
  HIDE_MESSAGE: 'HIDE_MESSAGE',
};

const MessageType = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
};

const MessageContentTypes = {
  Contact: {
    messageType: MessageType.SUCCESS,
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
  MessageType,
  MessageContentTypes,
  reducer,
};
