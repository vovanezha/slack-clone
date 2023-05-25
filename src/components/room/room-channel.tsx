import { ChannelTypeIcon } from '../channel-type-icon';
import { Channel } from '../../api/requests/channel-by-id';
import { RoomContent } from './room-content';
import { RoomMessage } from '../../types';

type Props = {
  channel?: Channel;
  loading: boolean;
  messages: RoomMessage[];
  messagesLoading: boolean;
  onSubmit: (body: string) => void;
};

export const RoomChannel = ({ channel, messages, loading, messagesLoading, onSubmit }: Props) => {
  return (
    <RoomContent
      messages={messages}
      messagesLoading={messagesLoading}
      onSubmit={onSubmit}
      header={
        !loading && channel ? (
          <>
            <p className="text-lg font-semibold">
              <ChannelTypeIcon type={channel.type} /> {channel.name}
            </p>
            <p className="ml-4 text-gray-600">{channel.description}</p>

            <div className="absolute right-4 top-2/4 -translate-y-2/4">users</div>
          </>
        ) : (
          <div className="grid grid-cols-[20px_1fr_3fr] gap-2">
            <span className="inline-flex items-center justify-center">
              <span className="h-4 w-4 rounded bg-gray-300" />
            </span>
            <span className={`inline-flex h-4 w-20 rounded bg-gray-300`} />

            <span className={`inline-flex h-4 rounded bg-gray-300`} />

            <span className="absolute right-4 top-2/4 inline-flex h-4 w-14 -translate-y-2/4 rounded bg-gray-300" />
          </div>
        )
      }
    />
  );
};
