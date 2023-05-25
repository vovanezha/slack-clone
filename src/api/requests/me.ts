import { ffetch } from '../ffetch';
import { UserShort } from './direct';

export const getMeRequest = () => ffetch<UserShort>('me');
