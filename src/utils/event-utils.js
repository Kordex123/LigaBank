const addEscapeEventHandler = (event, handler) => {
  if (event.key === 'Esc' || event.key === 'Escape' || event.keyCode === 27) {
    event.preventDefault();
    handler();
  }
};

export default addEscapeEventHandler;
