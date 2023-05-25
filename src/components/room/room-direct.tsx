import { RoomContent } from './room-content';
import { UserShort } from '../../api/requests/direct';
import { RoomMessage } from '../../types';
import { UserAvatar } from '../user-avatar';

type Props = {
  direct?: UserShort;
  loading: boolean;
  messages: RoomMessage[];
  messagesLoading: boolean;
};

export const RoomDirect = ({ direct, messages, loading, messagesLoading }: Props) => {
  return (
    <RoomContent
      messages={messages}
      messagesLoading={messagesLoading}
      header={
        !loading && direct ? (
          <>
            <UserAvatar src={direct.image} size="s" className="mr-2" />
            <p className="text-lg font-semibold">{direct.name}</p>

            <div className="absolute right-4 top-2/4 -translate-y-2/4">call</div>
          </>
        ) : (
          <div className="grid grid-cols-[20px_1fr_3fr] gap-2">
            <span className="inline-flex items-center justify-center">
              <span className="h-4 w-4 rounded bg-gray-300" />
            </span>

            <span className="absolute right-4 top-2/4 inline-flex h-4 w-5 -translate-y-2/4 rounded bg-gray-300" />
          </div>
        )
      }
    />
  );
};
