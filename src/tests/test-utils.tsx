/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import ReaderProvider from '../context/Reader';

function AllTheProviders({ children }: { children: ReactElement }) {
  return <ReaderProvider>{children}</ReaderProvider>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

