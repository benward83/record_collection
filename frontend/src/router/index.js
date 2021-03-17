import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/12inch',
    name: '12Inch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/12Inch.vue'),
  },
  {
    path: '/7inch',
    name: '7Inch',
    component: () => import('../views/7Inch.vue'),
  },
  {
    path: '/beats',
    name: 'Beats',
    component: () => import('../views/Beats.vue'),
  },
  {
    path: '/hiphop',
    name: 'HipHop',
    component: () => import('../views/HipHop.vue'),
  },
  {
    path: '/jazz',
    name: 'Jazz',
    component: () => import('../views/Jazz.vue'),
  },
  {
    path: '/rock',
    name: 'Rock',
    component: () => import('../views/Rock.vue'),
  },
  {
    path: '/soul&funk',
    name: 'Soul&Funk',
    component: () => import('../views/Soul&Funk.vue'),
  },
  {
    path: '/dance',
    name: 'Dance',
    component: () => import('../views/Dance.vue'),
  },
  {
    path: '/world',
    name: 'World',
    component: () => import('../views/World.vue'),
  },
  {
    path: '/loginform',
    name: 'LoginForm',
    component: () => import('../views/LoginForm.vue'),
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('../views/Record.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
