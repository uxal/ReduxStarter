/**
 * Define the routes in this file
 */

import React from 'react';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import HomePage from './components/home/home';

const TestComponent1 = () => <h3>Page 1</h3>
const TestComponent2 = () => <h3>Page 2</h3>

const appRoutes = [
    {
        path: '/',
        component: App,
        indexRoute: {component: HomePage},
        childRoutes: [
            {
                path: 'page1',
                component: TestComponent1
            },
            {
                path: 'page2',
                component: TestComponent2
            }
        ]
    }
]

const AppRouting = () => (
    <Router history={browserHistory} routes={appRoutes} />
)

export default AppRouting;