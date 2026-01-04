'use client';

import ImageUpload from '@/components/image-upload/image-upload';
import { makeStyles, mergeClasses } from '@fluentui/react-components';
import { tokens } from '@tc/components';
import { format } from '@tc/core';
import type { UserModel } from '@tc/db';
import { useMemo, useState, type ComponentProps, type FC } from 'react';

type UserAvatarProps = ComponentProps<'div'> & {
  user: UserModel;
};

const AVATAR_URL = process.env.NEXT_PUBLIC_AVATAR_URL!;

const useStyles = makeStyles({
  container: {
    position: 'relative',

    '&:hover': {
      '& .image': {
        backgroundClip: 'padding-box',
        border: `3px solid transparent`,

        '&:before': {
          content: '',
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          margin: '-3px',
          borderRadius: 'inherit',
          background: tokens.colorBrandGradient,
        },
      },
      '& .edit': {
        opacity: 1,
      },
    },
  },
  image: {
    border: `3px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusCircular,

    // '&:hover': {
    //   border: `3px solid ${tokens.colorBrandStroke2Hover}`,
    // },
  },
  edit: {
    position: 'absolute',
    inset: 0,
    display: 'grid',
    placeContent: 'center',
    color: tokens.colorNeutralForeground2LinkHover,
    opacity: 0,
    cursor: 'pointer',
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    textShadow: `
    -2px -2px 0 ${tokens.colorBrandForegroundLink},
    2px -2px 0 ${tokens.colorBrandForegroundLink},
    -2px 2px 0 ${tokens.colorBrandForegroundLink},
    2px 2px 0 ${tokens.colorBrandForegroundLink}; /* 1px black shadow on all four sides */
    `,
  },
});

const UserAvatar: FC<UserAvatarProps> = ({ className, user, ...props }) => {
  const classes = useStyles();
  const { gender, imageId } = user;
  const avatarUrl = useMemo(
    () => format(AVATAR_URL, gender === 'MALE' ? 'men' : 'women', imageId.toString()),
    [gender, imageId]
  );
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false);

  const handleEditClick = () => {
    setIsImageUploadOpen(true);
  };

  return (
    <>
      <div
        className={mergeClasses(classes.container, className)}
        {...props}>
        <span
          className={`edit ${classes.edit}`}
          onClick={handleEditClick}>
          Edit
        </span>
        <img
          className={`image ${classes.image}`}
          src={avatarUrl}
          alt="User Avatar"
          width={72}
          height={72}
        />
      </div>
      <ImageUpload
        open={isImageUploadOpen}
        onClose={() => setIsImageUploadOpen(false)}
      />
    </>
  );
};

export default UserAvatar;
