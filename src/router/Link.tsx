import React from 'react';
import { useAtom } from '@reatom/npm-react';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { historyAtom } from '@reatom/npm-history';

export const Link = (props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  const [reatomHistory] = useAtom(historyAtom);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey && props.target !== '_blank') {
      e.preventDefault();
      reatomHistory.push(e.currentTarget.href);
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return <a {...props} onClick={handleClick} />;
};
