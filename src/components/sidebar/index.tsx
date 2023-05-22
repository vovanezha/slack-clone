import { useAtom } from '@reatom/npm-react';
import { getChannelsAction, getDirectsAction } from './model';
import { ChannelItem } from '../../api/requests/channels';
import { PropsWithChildren, ReactNode } from 'react';

const ICON_BY_CHANNEL_TYPE: Record<ChannelItem['type'], ReactNode> = {
  private: (
    <span className="inline-flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        height="1rem"
        width="1rem"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 330 330"
      >
        <g id="XMLID_509_">
          <path
            id="XMLID_510_"
            d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85   S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15   s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25   C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"
          />
        </g>
      </svg>
    </span>
  ),
  public: <span className="inline-flex items-center justify-center">#</span>,
};

const ChannelsSkeleton = () => (
  <ul className="grid gap-1">
    {Array.from({ length: 3 }).map((_, index) => (
      <li key={index} className="items-top grid h-[24px] grid-cols-[20px_auto] items-center gap-1">
        <span className="inline-flex items-center justify-center">
          <span className="h-4 w-4 rounded bg-gray-300" />
        </span>
        <span className={`h-4 w-${28 - 8 * (index / 2)} rounded bg-gray-300`} />
      </li>
    ))}
  </ul>
);

const DirectsSkeleton = () => (
  <ul className="grid gap-1">
    {Array.from({ length: 3 }).map((_, index) => (
      <li key={index} className="items-top grid h-[24px] grid-cols-[30px_auto] items-center gap-1">
        <span className="inline-flex items-center justify-center">
          <span className="h-6 w-6 rounded bg-gray-300" />
        </span>
        <span className={`h-4 w-${28 - 8 * (index / 2)} rounded bg-gray-300`} />
      </li>
    ))}
  </ul>
);

const LiItem = ({ className, children }: PropsWithChildren<{ className?: string }>) => (
  <li className={`mr-2 cursor-pointer rounded pb-[0.15rem] pl-2 pt-[0.15rem] hover:bg-gray-200 ${className}`}>
    {children}
  </li>
);

export const Sidebar = () => {
  const [channels] = useAtom(getChannelsAction.dataAtom);
  const [channelsPending] = useAtom(getChannelsAction.pendingAtom);
  const [directs] = useAtom(getDirectsAction.dataAtom);
  const [directsPending] = useAtom(getDirectsAction.pendingAtom);

  return (
    <aside className="h-full w-[300px] border-r-2 border-solid border-gray-800 pl-2">
      <h1 className="mb-1 mt-1 inline-flex cursor-pointer rounded pb-1 pl-2 pr-2 pt-1 text-xl hover:bg-gray-200">
        Workspace
      </h1>

      <span className="relative right-2 flex h-[1px] w-[calc(100%+0.5rem)] bg-gray-300"></span>

      <ul className="grid pb-3 pt-3">
        <LiItem>Threads</LiItem>
        <LiItem>Later</LiItem>
        <LiItem>Direct messages</LiItem>
        <LiItem>Mentions & reactions</LiItem>
        <LiItem>Drafts & sent</LiItem>
        <LiItem>Slack connect</LiItem>
        <LiItem>Files</LiItem>
        <LiItem>Apps</LiItem>
        <LiItem>More</LiItem>
      </ul>

      <span className="relative right-2 flex h-[1px] w-[calc(100%+0.5rem)] bg-gray-300"></span>

      <nav className="pb-3 pt-3">
        <details open>
          <summary className="cursor-default pb-1 pl-1 pt-1">Channels</summary>
          {channelsPending > 0 ? (
            <ChannelsSkeleton />
          ) : (
            <ul className="grid">
              {channels.map((item) => (
                <LiItem key={item.id} className="items-top grid grid-cols-[20px_auto] gap-1">
                  {ICON_BY_CHANNEL_TYPE[item.type]} {item.name}
                </LiItem>
              ))}
            </ul>
          )}
        </details>
      </nav>

      <nav className="pb-3 pt-3">
        <details open>
          <summary className="cursor-default pb-1 pl-1 pt-1">Direct messages</summary>
          {directsPending > 0 ? (
            <DirectsSkeleton />
          ) : (
            <ul className="grid">
              {directs.map((item) => (
                <LiItem key={item.id} className="grid grid-cols-[30px_auto] items-center gap-1">
                  <img src={item.image} className="h-[30px] w-[30px] rounded object-cover" /> {item.name}
                </LiItem>
              ))}
            </ul>
          )}
        </details>
      </nav>
    </aside>
  );
};
