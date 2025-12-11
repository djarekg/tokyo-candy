'use client';

import { Badge, Caption1, Card, CardHeader, makeStyles, Persona } from '@fluentui/react-components';
import { tokens } from '@tc/components';
import { format } from '@tc/core';
import { type UserModel } from '@tc/db';
import { useMemo, type FC } from 'react';

type UserCardProps = {
  user: UserModel;
};

const AVATAR_URL = process.env.NEXT_PUBLIC_AVATAR_URL!;

const useStyles = makeStyles({
  card: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    insetBlockStart: tokens.spacingVerticalS,
    insetInlineEnd: tokens.spacingHorizontalS,
  },
  header: {
    inlineSize: '100%',

    '> .fui-CardHeader__header': {
      inlineSize: '100%',
    },
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    inlineSize: '100%',
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  persona: {
    inlineSize: '100%',

    '> .fui-Persona__secondaryText': {
      inlineSize: '100%',
    },
  },
});

const UserCard: FC<UserCardProps> = ({ user, ...props }) => {
  const classes = useStyles();
  const { firstName, lastName, jobTitle, gender, imageId, isActive } = user;
  const avatarUrl = useMemo(
    () => format(AVATAR_URL, gender === 'MALE' ? 'men' : 'women', imageId.toString()),
    [gender, imageId]
  );

  return (
    <Card
      className={classes.card}
      {...props}>
      <CardHeader
        className={classes.header}
        header={
          <Persona
            className={classes.persona}
            name={`${firstName} ${lastName}`}
            secondaryText={
              <div className={classes.description}>
                <Caption1 className={classes.caption}>{jobTitle}</Caption1>
              </div>
            }
            size="large"
            avatar={{
              image: {
                src: avatarUrl,
              },
            }}
          />
        }
      />
      {!isActive && (
        <Badge
          className={classes.badge}
          color="danger"
          size="small"
          shape="rounded"
          appearance="outline">
          Inactive
        </Badge>
      )}
    </Card>
  );
};

export default UserCard;
