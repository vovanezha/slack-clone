import { ReactNode } from 'react';
import { RoomMessage } from '../../types';
import { UserAvatar } from '../user-avatar';
import { ChatInput } from '../chat-input';

type Props = {
  header: ReactNode;
  messages: RoomMessage[];
  messagesLoading: boolean;
  onSubmit: (body: string) => void;
};

export const RoomContent = ({ header, messages, messagesLoading, onSubmit }: Props) => (
  <section className="flex flex-1 flex-col">
    <div className="relative flex h-12 items-center border-b-[1px] border-gray-300 p-2">{header}</div>

    <div className="flex flex-1 flex-col pb-3 pt-3">
      <div className="mt-auto grid">
        {messagesLoading ? (
          <>
            <div className="mb-3 grid grid-cols-[3rem_auto] pl-3 pr-3">
              <img className="h-[40px] w-[40px] rounded bg-gray-300" />
              <div className="ml-1">
                <span className="flex h-4 w-24 rounded bg-gray-300 font-semibold leading-[14px]" />
                <span className="mt-2 flex h-4 w-72 rounded bg-gray-300 font-semibold leading-[14px]" />
              </div>
            </div>
            <div className="mb-3 grid grid-cols-[3rem_auto] pl-3 pr-3">
              <img className="h-[40px] w-[40px] rounded bg-gray-300" />
              <div className="ml-1">
                <span className="flex h-4 w-24 rounded bg-gray-300 font-semibold leading-[14px]" />
                <span className="mt-2 flex h-4 w-64 rounded bg-gray-300 font-semibold leading-[14px]" />
              </div>
            </div>
            <div className="mb-3 grid grid-cols-[3rem_auto] pl-3 pr-3 last:mb-0">
              <img className="h-[40px] w-[40px] rounded bg-gray-300" />
              <div className="ml-1">
                <span className="flex h-4 w-24 rounded bg-gray-300 font-semibold leading-[14px]" />
                <span className="mt-2 flex h-4 w-56 rounded bg-gray-300 font-semibold leading-[14px]" />
              </div>
            </div>
          </>
        ) : (
          <>
            {messages.length > 0 ? (
              <>
                {messages.map((m, index) => {
                  const sameAuthor = messages[index - 1]?.author.id === m.author.id;

                  return (
                    <div
                      className="grid grid-cols-[3rem_auto] pb-2 pl-3 pr-3 pt-2 last:mb-0 hover:bg-gray-100"
                      key={m.id}
                    >
                      {!sameAuthor ? <UserAvatar src={m.author.image} size="l" /> : <span />}
                      <div className="ml-1">
                        {!sameAuthor && <p className="font-semibold leading-[14px]">{m.author.name}</p>}
                        <p
                          className={`${!sameAuthor && 'mt-2'} whitespace-pre-line`}
                          dangerouslySetInnerHTML={{ __html: m.body }}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <p className="mb-4 text-center font-medium text-gray-500">There are no messages yet. Start chating...</p>
            )}
          </>
        )}
      </div>
      <footer className="mt-4 pl-3 pr-3">
        <ChatInput onSubmit={onSubmit} placeholder="Message #general" />
      </footer>
    </div>
  </section>
);
