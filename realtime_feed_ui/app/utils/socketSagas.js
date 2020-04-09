import { Socket } from 'phoenix';
import { put } from 'redux-saga/effects';

export function* connectToSocket() {
  const socket = new Socket('ws:localhost:4000/socket');
  socket.connect();
  return socket;
}
export function* joinChannel(socket, channelName) {
  const channel = socket.channel(channelName, {});
  channel
    .join()
    .receive('ok', resp => {
      console.log('Joined successfully', resp);
    })
    .receive('error', resp => {
      console.log('Unable to join', resp);
    });
  return channel;
}

export function* handleUpdatedData(action) {
  yield put(action);
}
export const createSocketChannel = (channel, constant, fn) =>
  eventChannel(emit => {
    const newDataHandler = event => {
      console.log(event);
      emit(fn(event));
    };
    channel.on(constant, newDataHandler);
    const unsubscribe = () => {
      channel.off(constant, newDataHandler);
    };
    return unsubscribe;
  });
