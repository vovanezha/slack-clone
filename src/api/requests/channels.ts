import { ffetch } from '../ffetch';

export type ChannelShort = {
  id: number;
  name: string;
  type: 'public' | 'private';
};

export const getChannelsRequest = () => ffetch<ChannelShort[]>('channels');
