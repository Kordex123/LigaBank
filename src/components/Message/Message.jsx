import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addEscapeEventHandler from '../../utils/event-utils';
import './Message.scss';
import { ActionType, MessageTypes } from './MessageReducer';

class Message extends PureComponent {
  constructor(props) {
    super(props);
    this.closePopupHandler = this.closePopupHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.closePopupHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.closePopupHandler);
  }

  closePopupHandler(event) {
    const { hideMessage } = this.props;
    addEscapeEventHandler(event, hideMessage);
  }

  render() {
    const {
      messageType, title, content, hideMessage,
    } = this.props;

    return (
      <section className={`message message--${messageType}}`}>
        <button className="message__close-button" type="button" onClick={hideMessage}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13M13 1L1 13" stroke="#1F1E25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="message__title">{title}</h1>
        <p className="message__message">{content}</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.message });

const mapDispatchToProps = (dispatch) => ({
  hideMessage: () => {
    dispatch({
      type: ActionType.HIDE_MESSAGE,
    });
  },
});

Message.propTypes = {
  messageType: PropTypes.oneOf(Object.values(MessageTypes)).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  hideMessage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
