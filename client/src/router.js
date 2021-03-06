import Vue from 'vue';
import Router from 'vue-router';
import Input from './components/Input';
import Result from './components/Result';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'input',
            component: Input
        },
        {
            path: '/result/:city',
            name: 'result',
            component: Result
        }
    ]
})