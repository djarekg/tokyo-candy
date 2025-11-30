'use client';

import { makeStyles } from '@fluentui/react-components';
import { useDebounce } from '@tc/core/hooks';
import { isNull } from '@tc/core/utils';
import {
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type FC,
  type InputEvent,
} from 'react';

type CommandInputProps = ComponentPropsWithoutRef<'input'> & {
  onSearch: (value: string | undefined) => void;
};

const MIN_SEARCH_LENGTH = 2;

const useStyles = makeStyles({
  input: {
    inlineSize: '100%',
    fontSize: 'var(--fontSizeBase400)',
    padding: 'var(--_padding-inline)',
    border: 'none',
    borderStartStartRadius: 'var(--borderRadiusXLarge)',
    borderStartEndRadius: 'var(--borderRadiusXLarge)',
    outline: 'none',
    background: 'transparent',
  },

  shortcutHintContainer: {
    position: 'absolute',
    insetBlockStart: '16px',
    insetInlineEnd: '10px',
    transform: 'translateY(-50%)',
    fontSize: 'var(--fontSizeBase200)',
    color: 'var(--colorNeutralForeground1)',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
  },
});

/**
 * Command Input component for the command palette. Displays an input field and
 * handles search input with debouncing.
 *
 * @param {CommandInputProps} props - The component props.
 */
const CommandInput: FC<CommandInputProps> = ({ onSearch, ...props }) => {
  const classes = useStyles();
  const [inputTriggered, setInputTriggered] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 500);

  const handleInput = ({ target }: InputEvent<HTMLInputElement>) => {
    setInputTriggered(true);
    const value = (target as HTMLInputElement).value;
    setSearchValue(value);
  };

  useEffect(() => {
    if (inputTriggered) {
      const valid = !isNull(debouncedValue) && debouncedValue.length >= MIN_SEARCH_LENGTH;
      onSearch(valid ? debouncedValue : undefined);
      setInputTriggered(false);
    }
  }, [debouncedValue]);

  return (
    <>
      <input
        placeholder="Let's search for something interesting..."
        autoFocus={true}
        className={classes.input}
        onInput={handleInput}
        {...props}
      />
      <span className={classes.shortcutHintContainer}>
        <kbd className="tc-shortcut-hint">esc</kbd>
      </span>
    </>
  );
};

export default CommandInput;
