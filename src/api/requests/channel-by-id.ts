import { ffetch } from '../ffetch';
import { ChannelShort } from './channels';
import { UserShort } from './direct';

export type Channel = ChannelShort & {
  description: string;
  usersPreview: UserShort[];
};

export const getChannelById = (id: string) => ffetch<Record<string, Channel>>('channels-by-id').then((res) => res[id]);
