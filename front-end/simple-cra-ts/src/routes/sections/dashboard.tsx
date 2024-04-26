import {lazy, Suspense} from 'react';
import {Outlet} from 'react-router-dom';
// auth
import {AuthGuard} from 'src/auth/guard';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import {LoadingScreen} from 'src/components/loading-screen';
import {BoardManagerProvider} from 'src/sections/board/board-manage-provider';
import BoardListPage from "../../pages/dashboard/board/list";

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen/>}>
            <Outlet/>
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      {element: <IndexPage/>, index: true},
      {path: 'board', element: <BoardManagerProvider><BoardListPage/></BoardManagerProvider>},
      {path: 'two', element: <PageTwo/>},
      {path: 'three', element: <PageThree/>},
      {
        path: 'group',
        children: [
          {element: <PageFour/>, index: true},
          {path: 'five', element: <PageFive/>},
          {path: 'six', element: <PageSix/>},
        ],
      },
    ],
  },
];
