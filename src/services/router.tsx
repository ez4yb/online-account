import React from 'react';
import {RouteConfig} from 'react-router-config';
import { Redirect } from 'react-router';
import DetailPage from '../pages/detail/DetailPage';
const ChartPage = React.lazy(() => import('../pages/chart/ChartPage'));


export const ROUTER_CONFIG: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: DetailPage
    },
    {
        path: '/chart',
        exact: true,
        component: ChartPage
    },
    {
        render: () => <Redirect to = {'/'} />
    }
]