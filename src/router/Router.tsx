import { PropsWithChildren } from 'react';

export type RouterProps = PropsWithChildren<{
  exact?: boolean;
  pattern: string | RegExp;
}>;

export const Router = (props: RouterProps) => {
  return <>{props.children}</>;
};
