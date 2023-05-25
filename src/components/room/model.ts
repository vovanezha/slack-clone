import { reatomAsync, withCache, withDataAtom, withStatusesAtom } from '@reatom/framework';
import { getChannelByIdRequest } from '../../api/requests/channel-by-id';
import { getChannelMessagesByIdRequest } from '../../api/requests/channel-messages-by-id';
import { getDirectMessagesByIdRequest } from '../../api/requests/direct-messages-by-id';

export const getChannelByIdAction = reatomAsync(
  (ctx, id: string) => getChannelByIdRequest(id),
  'getChannelByIdAction'
).pipe(withDataAtom(), withStatusesAtom(), withCache());

export const getChannelMessagesByIdAction = reatomAsync(
  (ctx, id: string) => getChannelMessagesByIdRequest(id),
  'getChannelMessagesByIdAction'
).pipe(withDataAtom([]), withStatusesAtom(), withCache());

export const getDirectMessagesByIdAction = reatomAsync(
  (ctx, id: string) => getDirectMessagesByIdRequest(id),
  'getDirectMessagesByIdAction'
).pipe(withDataAtom([]), withStatusesAtom(), withCache());
