'use client';

import { tokens } from '#app/styles/theme';
import { makeStyles } from '@fluentui/react-components';
import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';

type FormCardProps = {
  icon?: ReactNode;
  layout?: 'flex' | 'grid';
  title?: ReactNode;
  cols?: number;
};

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    paddingInline: tokens.spacingHorizontalL,
    paddingBlock: tokens.spacingVerticalL,
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: tokens.colorNeutralCardBackground,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingBlockEnd: tokens.spacingVerticalM,
  },
  title: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightBold,

    '> [class^="fui-"]': {
      inlineSize: '100px',
    },
  },
  content: {
    gap: tokens.spacingVerticalL,

    '> [class^="fui-"]': {
      inlineSize: '100%',
    },
  },
});

const FormCard: FC<PropsWithChildren<FormCardProps>> = ({
  children,
  icon,
  layout = 'flex',
  title,
  cols = 2,
  ...props
}) => {
  const classes = useStyles();
  let styles: CSSProperties = {};

  if (layout === 'flex') {
    styles = {
      display: 'flex',
      flexDirection: 'column',
    };
  } else {
    styles = {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
    };
  }

  return (
    <section
      className={`app-form-card ${classes.card}`}
      {...props}>
      <header className={classes.header}>
        <div className={classes.title}>{title}</div>
        {icon && icon}
      </header>
      <div
        className={classes.content}
        style={styles}>
        {children}
      </div>
    </section>
  );
};

export default FormCard;
