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
  onSearch?: (value: string | undefined) => void;
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

  shortcutHint: {
    position: 'absolute',
    insetInlineEnd: '10px',
    insetBlockStart: '16px',
    transform: 'translateY(-50%)',
    fontSize: 'var(--fontSizeBase200)',
    color: 'var(--colorNeutralForeground1)',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',

    '& > kbd': {
      background: 'var(--colorNeutralBackground1)',
      border: '1px solid var(--colorNeutralStroke1)',
      borderRadius: 'var(--borderRadiusMedium)',
      padding: '0.1rem 0.4rem',
      fontSize: 'inherit',
      fontWeight: 500,
      boxShadow: 'var(--shadow2)',
    },
  },
});

const CommandInput: FC<CommandInputProps> = ({ onSearch, ...props }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 500);

  const handleInput = ({ target }: InputEvent<HTMLInputElement>) => {
    const value = (target as HTMLInputElement).value;
    setSearchValue(value);
  };

  useEffect(() => {
    const valid = !isNull(debouncedValue) && debouncedValue.length >= MIN_SEARCH_LENGTH;

    onSearch?.(valid ? debouncedValue : undefined);
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
      <span className={classes.shortcutHint}>
        <kbd>esc</kbd>
      </span>
    </>
  );
};

export default CommandInput;
