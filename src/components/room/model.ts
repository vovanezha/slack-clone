import { reatomAsync, withCache, withDataAtom, withStatusesAtom } from '@reatom/framework';
import { getChannelById } from '../../api/requests/channel-by-id';

export const getChannelByIdAction = reatomAsync((ctx, id: string) => getChannelById(id), 'getChannelByIdAction').pipe(
  withDataAtom(),
  withStatusesAtom(),
  withCache()
);
