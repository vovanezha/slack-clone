import { useAtom } from '@reatom/npm-react';
import { historyAtom } from '@reatom/npm-history';
import { getChannelsAction, getDirectsAction } from './model';
import { PropsWithChildren, useMemo } from 'react';
import { Link } from '../../router/Link';
import { Routes } from '../../routes';
import { ChannelTypeIcon } from '../channel-type-icon';

const ChannelsSkeleton = () => (
  <ul className="grid gap-1">
    {Array.from({ length: 3 }).map((_, index) => (
      <li key={index} className="items-top grid h-[24px] grid-cols-[20px_auto] items-center gap-1 pr-2">
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
      <li key={index} className="items-top grid h-[24px] grid-cols-[30px_auto] items-center gap-1 pr-2">
        <span className="inline-flex items-center justify-center">
          <span className="h-6 w-6 rounded bg-gray-300" />
        </span>
        <span className={`h-4 w-${28 - 8 * (index / 2)} rounded bg-gray-300`} />
      </li>
    ))}
  </ul>
);

const LiItem = ({ className, active, children }: PropsWithChildren<{ className?: string; active?: boolean }>) => (
  <li className={`mr-2 rounded pl-2 ${active ? 'bg-red-400' : 'hover:bg-gray-200'} ${className}`}>{children}</li>
);

const LinkItem = ({ children, href }: PropsWithChildren<{ href: string }>) => (
  <Link className="inline-flex w-full pb-[0.15rem] pt-[0.15rem]" href={href}>
    {children}
  </Link>
);

export const Sidebar = () => {
  const [location] = useAtom(historyAtom.location);
  const [channels] = useAtom(getChannelsAction.dataAtom);
  const [channelsPending] = useAtom(getChannelsAction.pendingAtom);
  const [directs] = useAtom(getDirectsAction.dataAtom);
  const [directsPending] = useAtom(getDirectsAction.pendingAtom);

  const currentItem = useMemo(() => {
    return location.pathname.replace('/', '');
  }, [location]);

  return (
    <aside className="h-full w-[300px] border-r-2 border-solid border-gray-800 pl-2">
      <h1 className="mb-1 mt-1 inline-flex cursor-pointer rounded pb-1 pl-2 pr-2 pt-1 text-xl hover:bg-gray-200">
        Workspace
      </h1>

      <span className="relative right-2 flex h-[1px] w-[calc(100%+0.5rem)] bg-gray-300"></span>

      <ul className="grid pb-3 pt-3">
        <LiItem active={currentItem === Routes.threads}>
          <LinkItem href={'/' + Routes.threads}>Threads</LinkItem>
        </LiItem>
        <LiItem active={currentItem === Routes.later}>
          <LinkItem href={'/' + Routes.later}>Later</LinkItem>
        </LiItem>
        <LiItem active={currentItem === Routes.direct}>
          <LinkItem href={'/' + Routes.direct}>Direct messages</LinkItem>
        </LiItem>
        <LiItem active={currentItem === Routes.mentions}>
          <LinkItem href={'/' + Routes.mentions}>Mentions & reactions</LinkItem>
        </LiItem>
        <LiItem active={currentItem === Routes.drafts}>
          <LinkItem href={'/' + Routes.drafts}>Drafts & sent</LinkItem>
        </LiItem>
        <LiItem active={currentItem === Routes.connect}>
          <LinkItem href={'/' + Routes.connect}>Slack connect</LinkItem>
        </LiItem>
        <LiItem active={currentItem === Routes.files}>
          <LinkItem href={'/' + Routes.files}>Files</LinkItem>
        </LiItem>
        <LiItem active={currentItem === Routes.apps}>
          <LinkItem href={'/' + Routes.apps}>Apps</LinkItem>
        </LiItem>
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
                <LiItem
                  key={item.id}
                  className="items-top grid grid-cols-[20px_auto] gap-1"
                  active={currentItem === Routes.channels(item.id)}
                >
                  <ChannelTypeIcon type={item.type} />
                  <LinkItem href={'/' + Routes.channels(item.id)}>{item.name}</LinkItem>
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
                <LiItem
                  key={item.id}
                  className="grid grid-cols-[25px_auto] items-center gap-1 pb-1 pt-1"
                  active={currentItem === Routes.directs(item.id)}
                >
                  <img src={item.image} className="h-[25px] w-[25px] rounded object-cover" />{' '}
                  <LinkItem href={'/' + Routes.directs(item.id)}>{item.name}</LinkItem>
                </LiItem>
              ))}
            </ul>
          )}
        </details>
      </nav>
    </aside>
  );
};
