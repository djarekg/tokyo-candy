'use client';

import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  type DialogOpenChangeData,
} from '@fluentui/react-components';
import { useEffect, useEffectEvent, useState, type FC, type PropsWithoutRef } from 'react';
import CommandInput from './command-input';
import type { CommandItem } from './command-item';
import CommandList from './command-list';
import styles from './command-palette.module.css';

type CommandPaletteProps = {
  defaultItems?: CommandItem[];
  items?: CommandItem[];
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onSearch?: (value: string | undefined) => void;
};

/**
 * Command Palette component that provides a searchable interface for executing commands
 * and displaying results.
 *
 * @param {CommandPaletteProps} props - The component props.
 */
const CommandPalette: FC<PropsWithoutRef<CommandPaletteProps>> = ({
  defaultItems = [],
  items,
  open,
  onOpen,
  onClose,
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayItems, setDisplayItems] = useState<CommandItem[]>(defaultItems);
  const [isLoading, setIsLoading] = useState(false);

  // Trap keyboard shortcuts to open the command palette
  const onKeydown = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
  });

  const handleOpenChange = (_: any, { open }: DialogOpenChangeData) => {
    setIsOpen(open);
  };

  // If we're searching then set loading state.
  const handleSearch = (value: string | undefined) => {
    if (value !== undefined) {
      setIsLoading(true);
    }
    onSearch?.(value);
  };

  // Add/remove `tc-backdrop-visible` class on body when dialog opens/closes.
  useEffect(() => {
    const cleanup = () => {
      document.body.classList.remove('tc-backdrop-visible');
    };

    if (isOpen) {
      onOpen?.();
      document.body.classList.add('tc-backdrop-visible');
    } else {
      onClose?.();
      cleanup();
    }

    return cleanup;
  }, [isOpen]);

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  // Wire up keydown event listener
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  useEffect(() => {
    setDisplayItems(items ?? defaultItems);
    setIsLoading(false);
  }, [defaultItems, items]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleOpenChange}>
      <DialogSurface
        className={styles.dialogSurface}
        style={{ padding: 0 }}>
        <DialogBody
          style={{
            rowGap: '2px',
            columnGap: 0,
            paddingInlineEnd: '2px',
            marginBlockEnd: '6px',
          }}>
          <DialogTitle>
            <header>
              <CommandInput onSearch={handleSearch} />
            </header>
          </DialogTitle>
          <DialogContent className={styles.dialogContent}>
            <CommandList
              loading={isLoading}
              items={displayItems}
            />
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default CommandPalette;
