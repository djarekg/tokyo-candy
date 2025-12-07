'use client';

import { ArrowDownIcon } from '#app/icons';
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  type DialogOpenChangeData,
} from '@fluentui/react-components';
import {
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
  // const [focused, setFocused] = useState(false);
  //   const { findAllFocusable } = useFocusFinders();

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

  const handleNavKeyDown = () => {
    // setFocused(true);
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
    const element = document.querySelector<HTMLElement>('.fui-FluentProvider');

    const cleanup = () => {
      element?.classList.remove('tc-backdrop-visible');
      onClose?.();
    };

    if (isOpen) {
      onOpen?.();
      element?.classList.add('tc-backdrop-visible');
    } else {
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
              <CommandInput
                onNavKeyDown={handleNavKeyDown}
                onSearch={handleSearch}
              />
            </header>
          </DialogTitle>
          <DialogContent className={styles.dialogContent}>
            <Suspense>
              <CommandList
                // focused={focused}
                loading={isLoading}
                items={displayItems}
              />
            </Suspense>
          </DialogContent>
          <div className={styles.shortcutHints}>
            <span className={`${styles.shortcutHint} tc-shortcut-hint`}>
              <ArrowDownIcon
                size={14}
                fill="colorNeutralForeground3"
              />
            </span>
            <span className={styles.shortcutText}>Move down</span>
            <span
              className={`${styles.shortcutHint} tc-shortcut-hint`}
              style={{ marginLeft: '8px' }}>
              <ArrowDownIcon
                size={14}
                className={styles.shortcutIconFlipped}
                fill="colorNeutralForeground3"
              />
            </span>
            <span className={styles.shortcutText}>Move up</span>
          </div>
          <DialogActions>
            <footer className={styles.footer}>
              <div className={styles.footerPoweredBy}>Powered by</div>
              <span className="colorBrandGradient">Tokyo Candy</span>
            </footer>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default CommandPalette;
