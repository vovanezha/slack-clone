import { Children, PropsWithChildren, isValidElement } from 'react';
import { useAtom } from '@reatom/npm-react';
import { historyAtom } from '@reatom/npm-history';
import { RouterProps } from './Router';

export const RouterSwitch = ({ children }: PropsWithChildren) => {
  const [location] = useAtom(historyAtom.location);

  if (Children.count(children) === 1) {
    return <>{children}</>;
  }

  console.log(Children.toArray(children));

  const matched = Children.toArray(children).find((c) => {
    if (!isValidElement(c)) {
      return false;
    }

    const childProps = c.props as RouterProps;

    if (childProps.exact) {
      return location.pathname.replace(/^\//, '') === childProps.pattern;
    }

    return location.pathname.match(c.props?.pattern);
  });

  return <>{matched}</>;
};
