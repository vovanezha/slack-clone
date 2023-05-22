import { ffetch } from '../ffetch';

export type ChannelItem = {
  id: number;
  name: string;
  type: 'public' | 'private';
};

export const getChannelsRequest = () => ffetch<ChannelItem[]>('channels');
