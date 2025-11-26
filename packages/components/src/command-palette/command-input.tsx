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
  onSearch?: (value: string) => void;
};

const MIN_SEARCH_LENGTH = 2;

const useStyles = makeStyles({
  shortcutHint: {
    position: 'absolute',
    insetInlineEnd: '10px',
    insetBlockStart: '20px',
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
    if (isNull(debouncedValue) || debouncedValue.length < MIN_SEARCH_LENGTH) {
      return;
    }

    onSearch?.(debouncedValue);
  }, [debouncedValue]);

  return (
    <>
      <input
        autoFocus={true}
        placeholder="Let's search for something interesting..."
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
