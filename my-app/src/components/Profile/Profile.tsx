'use client';

import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if (!event.currentTarget.id) {
      return;
    }
    // remove <Menu id> to resolve calling it 2x
    const id = event.currentTarget.id;

    switch (id) {
      case 'profile': {
        console.log('You clicked profile');
        break;
      }
      case 'account': {
        console.log('You clicked account');
        break;
      }
      case 'add-account': {
        console.log('You clicked add-account');
        break;
      }
      case 'settings': {
        console.log('You clicked settings');
        break;
      }
      case 'logout': {
        console.log('You clicked logout');
        break;
      }
      default: {
        break;
      }
    }

    //console.log(`You clicked me with the id: ${id}`);

    // reset Anchor Element
    setAnchorEl(null);
  };

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
        <div>
          <Tooltip title='Account settings'>
            <Button
              onClick={handleClick}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}>
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
            </Button>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
            <MenuItem
              id='profile'
              onClick={handleClose}>
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
              </StyledBadge>{' '}
              Profile
            </MenuItem>
            <MenuItem
              id='account'
              onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem
              id='add-account'
              onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize='small' />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem
              id='settings'
              onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize='small' />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem
              id='logout'
              onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>

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
