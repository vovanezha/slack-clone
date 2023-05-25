import { RoomMessage } from '../../types';
import { ffetch } from '../ffetch';

export const getDirectMessagesByIdRequest = (id: string) =>
  ffetch<Record<string, RoomMessage[]>>('direct-messages').then((res) => res[id]);
