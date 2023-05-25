import { ffetch } from '../ffetch';

export type UserShort = {
  id: string;
  name: string;
  image: string;
};

export const getDirectsRequest = () => ffetch<UserShort[]>('direct');
