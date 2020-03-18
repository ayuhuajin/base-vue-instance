import Notification from './notification.js';

let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice({ type = 'success', duration = 1500, content = '' }) {
  let instance = getMessageInstance();

  instance.add({
    type: type,
    content: content,
    duration: duration
  });
}

export default {
  info(options) {
    return notice(options);
  }
};
