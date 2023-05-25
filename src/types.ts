import { UserShort } from './api/requests/direct';

export type RoomMessage = {
  id: string;
  author: UserShort;
  body: string;
};
