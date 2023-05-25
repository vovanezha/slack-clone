import { useAction, useAtom } from '@reatom/npm-react';
import { historyAtom } from '@reatom/npm-history';
import { useEffect } from 'react';
import { getChannelByIdAction, getChannelMessagesByIdAction, getDirectMessagesByIdAction } from './model';
import { RoomChannel } from './room-channel';
import { RoomDirect } from './room-direct';
import { getDirectsAction } from '../sidebar/model';
import { meAtom } from '../../models/me';

export const Room = () => {
  const [location] = useAtom(historyAtom.location);

  const type = location.pathname.startsWith('/channels') ? 'channels' : 'direct';
  const id = location.pathname.at(-1);

  const [me] = useAtom(meAtom);
  const [channel] = useAtom(getChannelByIdAction.dataAtom);
  const [channelStatus] = useAtom(getChannelByIdAction.statusesAtom);
  const [channelMessages, updateChannelMessages] = useAtom(getChannelMessagesByIdAction.dataAtom);
  const [channelMessagesStatus] = useAtom(getChannelMessagesByIdAction.statusesAtom);
  const [direct] = useAtom((ctx) => ctx.spy(getDirectsAction.dataAtom).find((d) => d.id === id), [id]);
  const [directMessages, updateDirectMessages] = useAtom(getDirectMessagesByIdAction.dataAtom);
  const [directMessagesStatus] = useAtom(getDirectMessagesByIdAction.statusesAtom);
  const getChannelById = useAction(getChannelByIdAction);
  const getChannelMessagesById = useAction(getChannelMessagesByIdAction);
  const getDirectMessagesById = useAction(getDirectMessagesByIdAction);

  const handleSubmit = (body: string) => {
    if (!me) {
      return;
    }

    if (type === 'channels') {
      updateChannelMessages([
        ...channelMessages,
        {
          id: Math.random().toString(),
          author: me,
          body,
        },
      ]);
    }
    if (type === 'direct') {
      updateDirectMessages([
        ...directMessages,
        {
          id: Math.random().toString(),
          author: me,
          body,
        },
      ]);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    if (type === 'channels') {
      getChannelById(id);
      getChannelMessagesById(id);
    }

    if (type === 'direct') {
      getDirectMessagesById(id);
    }
  }, [location.pathname]);

  return type === 'channels' ? (
    <RoomChannel
      channel={channel}
      messages={channelMessages}
      loading={channelStatus.isPending}
      messagesLoading={channelMessagesStatus.isPending}
      onSubmit={handleSubmit}
    />
  ) : (
    <RoomDirect
      direct={direct}
      messages={directMessages}
      loading={!direct}
      messagesLoading={directMessagesStatus.isPending}
      onSubmit={handleSubmit}
    />
  );
};
