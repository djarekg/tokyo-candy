'use client';

import { Badge, Caption1, makeStyles, Text } from '@fluentui/react-components';
import { tokens } from '@tc/components';
import { format } from '@tc/core';
import { type UserModel } from '@tc/db';
import { useMemo, type FC } from 'react';

type UserCardProps = {
  user: UserModel;
};

const AVATAR_URL = process.env.NEXT_PUBLIC_AVATAR_URL!;

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    blockSize: '64px',
    borderRadius: tokens.borderRadiusMedium,
    padding: tokens.spacingVerticalM,
    boxShadow: tokens.shadow4,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  caption: {
    color: tokens.colorNeutralForeground3,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  image: {
    inlineSize: '40px',
    blockSize: '40px',
    borderRadius: tokens.borderRadiusCircular,
  },
  badge: {
    position: 'absolute',
    insetBlockStart: '10px',
    insetInlineEnd: '10px',
  },
});

const UserCard: FC<UserCardProps> = ({ user, ...props }) => {
  const classes = useStyles();
  const { firstName, lastName, jobTitle, gender, imageId, isActive } = user;
  const fullName = `${firstName} ${lastName}`;
  const avatarUrl = useMemo(
    () => format(AVATAR_URL, gender === 'MALE' ? 'men' : 'women', imageId.toString()),
    [gender, imageId]
  );

  return (
    <div
      className={classes.container}
      {...props}>
      <img
        className={classes.image}
        src={avatarUrl}
        alt={fullName}
      />
      <div className={classes.text}>
        <Text as="h2">{fullName}</Text>
        <Caption1 className={classes.caption}>{jobTitle}</Caption1>
      </div>
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
    </div>
  );
};

export default UserCard;
