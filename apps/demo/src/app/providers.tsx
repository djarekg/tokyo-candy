'use client';

import { darkTheme } from '@/styles/theme';
import {
  FluentProvider,
  RendererProvider,
  SSRProvider,
  createDOMRenderer,
  renderToStyleElements,
} from '@fluentui/react-components';
import { SessionProvider } from 'next-auth/react';
import { useServerInsertedHTML } from 'next/navigation';
import * as React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [renderer] = React.useState(() => createDOMRenderer());
  const didRenderRef = React.useRef(false);

  useServerInsertedHTML(() => {
    if (didRenderRef.current) {
      return;
    }
    didRenderRef.current = true;
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={darkTheme}>
          <SessionProvider>{children}</SessionProvider>
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
