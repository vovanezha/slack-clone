import { ffetch } from '../ffetch';

export type DirectItem = {
  id: number;
  name: string;
  image: string;
};

export const getDirectsRequest = () => ffetch<DirectItem[]>('direct');
