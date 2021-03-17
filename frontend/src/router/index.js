import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
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
    name: 'beats',
    component: () => import('../views/Beats.vue'),
  },
  {
    path: '/hiphop',
    name: 'hiphop',
    component: () => import('../views/HipHop.vue'),
  },
  {
    path: '/jazz',
    name: 'jazz',
    component: () => import('../views/Jazz.vue'),
  },
  {
    path: '/rock',
    name: 'rock',
    component: () => import('../views/Rock.vue'),
  },
  {
    path: '/soulandfunk',
    name: 'soulandfunk',
    component: () => import('../views/Soul&Funk.vue'),
  },
  {
    path: '/dance',
    name: 'dance',
    component: () => import('../views/Dance.vue'),
  },
  {
    path: '/world',
    name: 'world',
    component: () => import('../views/World.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginForm.vue'),
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('../views/Record.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
