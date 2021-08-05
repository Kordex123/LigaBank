const addEscapeEventHandler = (event, handler) => {
  if (event.key === 'Esc' || event.key === 'Escape' || event.key.code === 27) {
    event.preventDefault();
    handler();
  }
};

export default addEscapeEventHandler;
