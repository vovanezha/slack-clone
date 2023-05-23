import { onConnect, reatomAsync, withDataAtom } from '@reatom/framework';
import { UserShort, getDirectsRequest } from '../../api/requests/direct';
import { getChannelsRequest } from '../../api/requests/channels';

export const getChannelsAction = reatomAsync(getChannelsRequest, 'getChannelsAction').pipe(withDataAtom([]));
onConnect(getChannelsAction.dataAtom, getChannelsAction);

const SLACKBOT: UserShort = {
  id: 0,
  name: 'Slackbot',
  image: 'https://a.slack-edge.com/80588/marketing/img/avatars/slackbot/avatar-slackbot.png',
};

export const getDirectsAction = reatomAsync(getDirectsRequest, 'getDirectsAction').pipe(
  withDataAtom([], (ctx, state) => [SLACKBOT].concat(state))
);
onConnect(getDirectsAction.dataAtom, getDirectsAction);
