/* eslint-disable react/display-name */
import { ComponentType, FC, Suspense } from 'react';
import { Preloader } from 'src/Components/Content/Preloader/Preloader';

export type SuspenseHOC = <P extends Record<string, unknown>>(
  component: ComponentType<P>
) => FC<P>;

export const lazyLoad: SuspenseHOC = (Component) => (props) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>
  );
};
