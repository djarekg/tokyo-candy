'use client';

import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
} from '@fluentui/react-components';
import {
  lazy,
  Suspense,
  useEffect,
  useEffectEvent,
  useState,
  type FC,
  type PropsWithoutRef,
} from 'react';
import CommandInput from './command-input';
import type { CommandItem } from './command-item';
import CommandList from './command-list';
import styles from './command-palette.module.css';

const Loader = lazy(() => import('@tc/components/loader'));

type CommandPaletteProps = {
  defaultItems?: CommandItem[];
  items?: CommandItem[];
  onSearch?: (value: string) => void;
};

const CommandPalette: FC<PropsWithoutRef<CommandPaletteProps>> = ({
  defaultItems = [],
  items,
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayItems, setDisplayItems] = useState<CommandItem[]>(defaultItems);

  // Trap keyboard shortcuts to open the command palette
  const onKeydown = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
  });

  // Wire up keydown event listener
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  // Update displayed items with the default unless items is not undefined/null
  useEffect(() => {
    if (items) {
      setDisplayItems(items);
    } else {
      setDisplayItems(defaultItems);
    }
  }, [defaultItems, items]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(_, { open }) => setIsOpen(open)}>
      <DialogSurface
        className={styles.dialogSurface}
        style={{ padding: 0 }}>
        <DialogBody style={{ gap: 0 }}>
          <DialogTitle>
            <header>
              <CommandInput onSearch={onSearch} />
            </header>
          </DialogTitle>
          <DialogContent style={{ padding: 0 }}>
            <Suspense fallback={<Loader />}>
              <CommandList items={displayItems} />
            </Suspense>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default CommandPalette;
