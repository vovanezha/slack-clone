import { RoomMessage } from '../../types';
import { ffetch } from '../ffetch';

export const getChannelMessagesByIdRequest = (id: string) =>
  ffetch<Record<string, RoomMessage[]>>('channels-messages').then((res) => res[id]);
