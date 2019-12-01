import Vue from 'vue';
import Router from 'vue-router';
import Top from './components/pages/Top';
import Feedback from './components/pages/Feedback';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'top',
            component: Top
        },
        {
            path: '/feedback/:to',
            name: 'feedback',
            component: Feedback
        }
    ]
});