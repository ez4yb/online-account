import {RouteConfig} from 'react-router-config';
import { Redirect } from 'react-router';
import ChartPage from '../pages/chart/ChartPage';
import DetailPage from '../pages/detail/DetailPage';

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