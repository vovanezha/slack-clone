import { ffetch } from '../ffetch';

export type UserShort = {
  id: number;
  name: string;
  image: string;
};

export const getDirectsRequest = () => ffetch<UserShort[]>('direct');
