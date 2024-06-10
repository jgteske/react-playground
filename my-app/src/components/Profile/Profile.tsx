'use client';

import Avatar from '@mui/material/Avatar';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import SocialAction from './Social';

interface ProfileProps {
  userName: string;
  badgeContent?: number;
  image?: string;
  bannerImage?: string;
  facebook?: string;
  x?: string;
  instagram?: string;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    vertical: 'top',
    horizontal: 'right',
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Profile = ({
  userName = 'DefaultUser',
  badgeContent = 0,
  image,
  bannerImage,
  facebook,
  x,
  instagram,
}: ProfileProps) => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    if (!name) {
      return null;
    }

    const hasWhitespace = () => /\s/.test(name);

    if (hasWhitespace() && name.split(' ')[1][0]) {
      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }

    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name[0]}`,
    };
  }

  return (
    <Card className='w-[300px]'>
      {bannerImage && (
        <CardMedia
          component='img'
          alt='green iguana'
          height='100'
          image={bannerImage}
        />
      )}
      <CardContent className='flex justify-between'>
        <StyledBadge
          badgeContent={badgeContent}
          color='secondary'>
          {image ? (
            <Avatar
              alt={userName}
              src={image}
            />
          ) : (
            <Avatar {...stringAvatar(userName)} />
          )}
        </StyledBadge>
        <div>
          <div className='font-semibold'>{userName}</div>
        </div>
      </CardContent>
      {facebook ? (
        <SocialAction
          facebook={facebook}
          x={x}
          instagram={instagram}
        />
      ) : x ? (
        <SocialAction
          facebook={facebook}
          x={x}
          instagram={instagram}
        />
      ) : instagram ? (
        <SocialAction
          facebook={facebook}
          x={x}
          instagram={instagram}
        />
      ) : (
        <></>
      )}
    </Card>
  );
};
