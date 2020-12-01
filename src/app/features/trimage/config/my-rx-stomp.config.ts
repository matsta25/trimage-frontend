import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

export const myRxStompConfig: InjectableRxStompConfig = {
  // brokerURL: 'ws://localhost:8080/trimage',
  brokerURL: 'wss://trimage-backend.herokuapp.com/trimage',
};
