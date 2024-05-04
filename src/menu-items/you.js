// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| You MENU ITEMS ||============================== //

const You = {
  id: 'You',
  title: 'You',
  type: 'group',
  children: [
    {
      id: 'Subscriptions',
      title: 'Subscriptions',
      type: 'item',
      url: '/user/subscriptions',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'like-videos',
      title: 'Like Videos',
      type: 'item',
      url: '/user/like-videos',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'history',
      title: 'History',
      type: 'item',
      url: '/user/history',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'user',
      title: 'User',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'channel',
          title: 'User Channel',
          type: 'item',
          url: '/user/channel',
          breadcrumbs: true
        },
        {
          id: 'collections',
          title: 'User Collections',
          type: 'item',
          url: '/user/collections',
          breadcrumbs: true
        }
        // {
        //   id: 'material-icons',
        //   title: 'Material Icons',
        //   type: 'item',
        //   external: true,
        //   target: '_blank',
        //   url: 'https://mui.com/material-ui/material-icons/',
        //   breadcrumbs: false
        // }
      ]
    }
  ]
};

export default You;
