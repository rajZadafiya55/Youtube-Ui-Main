import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UserSubscriptions = Loadable(lazy(() => import('views/you/Subscriptions')));
const UserLikeVideos = Loadable(lazy(() => import('views/you/LikeVideos')));
const UserHistory = Loadable(lazy(() => import('views/you/History')));
const UserUserChannel = Loadable(lazy(() => import('views/you/UserChannel')));
const UserCollections = Loadable(lazy(() => import('views/you/Collections')));

// DetailView routing
const VideoDetailView = Loadable(lazy(() => import('views/dashboard/SubPage/VideoDetailView')));

// Tweets page routing
const TweetsPage = Loadable(lazy(() => import('views/tweets')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },

    {
      path: 'user',
      children: [
        {
          path: 'subscriptions',
          element: <UserSubscriptions />
        }
      ]
    },
    {
      path: 'user',
      children: [
        {
          path: 'like-videos',
          element: <UserLikeVideos />
        }
      ]
    },
    {
      path: 'user',
      children: [
        {
          path: 'history',
          element: <UserHistory />
        }
      ]
    },
    {
      path: 'user',
      children: [
        {
          path: 'channel',
          element: <UserUserChannel />
        }
      ]
    },
    {
      path: 'user',
      children: [
        {
          path: 'collections',
          element: <UserCollections />
        }
      ]
    },

    {
      path: 'tweets',
      element: <TweetsPage />
    },
    {
      path: 'videodetailview/:vid',
      element: <VideoDetailView />
    }
  ]
};

export default MainRoutes;
