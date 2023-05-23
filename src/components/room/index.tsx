import { useAction, useAtom } from '@reatom/npm-react';
import { historyAtom } from '@reatom/npm-history';
import { getChannelByIdAction } from './model';
import { useEffect } from 'react';
import { ChannelTypeIcon } from '../channel-type-icon';

export const Room = () => {
  const [location] = useAtom(historyAtom.location);
  const [channel] = useAtom(getChannelByIdAction.dataAtom);
  const [status] = useAtom(getChannelByIdAction.statusesAtom);
  const getChannelById = useAction(getChannelByIdAction);

  // @TODO: make room proxy to handle channel and direct differently

  useEffect(() => {
    const id = location.pathname.at(-1);

    if (id && location.pathname.startsWith('/channels')) {
      getChannelById(id);
    }
  }, [location.pathname]);

  return (
    <section className="flex flex-1 flex-col">
      <div className="relative flex h-12 items-center border-b-[1px] border-gray-300 p-2">
        {status.isFulfilled && channel ? (
          <>
            <p className="text-lg font-semibold">
              <ChannelTypeIcon type={channel.type} /> {channel.name}
            </p>
            <p className="ml-4 text-gray-600">{channel.description}</p>

            <div className="absolute right-4 top-2/4 -translate-y-2/4">users</div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-[20px_1fr_3fr] gap-2">
              <span className="inline-flex items-center justify-center">
                <span className="h-4 w-4 rounded bg-gray-300" />
              </span>
              <span className={`inline-flex h-4 w-20 rounded bg-gray-300`} />

              <span className={`inline-flex h-4 rounded bg-gray-300`} />

              <span className="absolute right-4 top-2/4 inline-flex h-4 w-14 -translate-y-2/4 rounded bg-gray-300" />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3">
        <div className="mt-auto grid gap-3">
          <div className="flex items-start">
            <div className="h-[40px] w-[40px] rounded-sm bg-gray-400" />
            <div className="ml-1">
              <p className="font-semibold leading-[14px]">User 1</p>
              <p className="mt-1">Hello guys! What's status of the current epic?</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-[40px] w-[40px] rounded-sm bg-gray-400" />
            <div className="ml-1">
              <p className="font-semibold leading-[14px]">User 2</p>
              <p className="mt-1">Hey! We are doing our best...</p>
            </div>
          </div>
        </div>
        <footer className="mt-4">
          <input className="w-full border border-solid border-gray-300" placeholder="Message #general" />
        </footer>
      </div>
    </section>
  );
};
