import { atom, onConnect, reatomAsync, withStatusesAtom } from '@reatom/framework';
import { getMeRequest } from '../api/requests/me';
import { UserShort } from '../api/requests/direct';

export const meAtom = atom<UserShort | null>(null, 'meAtom');

export const getMeAction = reatomAsync((ctx) => getMeRequest().then((me) => meAtom(ctx, me)), 'getMeAction').pipe(
  withStatusesAtom()
);

onConnect(meAtom, getMeAction);
