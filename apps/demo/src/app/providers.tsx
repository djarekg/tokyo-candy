'use client';

import {
  createDOMRenderer,
  FluentProvider,
  RendererProvider,
  renderToStyleElements,
  SSRProvider,
} from '@fluentui/react-components';
import { darkTheme } from '@tc/components/styles';
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
