import Vue from 'vue'
import VueRouter from 'vue-router'

import Loginrouter from './Loginrouter';
import Sidebarrouter from './Sidebarrouter';
import newSidebar from './newSidebar';
import GetPayNumber from './GetPayNumber';
import myAdsReport from './myAdsReport';
import xiwen from './xiwen';
import duola from './duola';
import carl from './carl';
import zhazha from './zhazha';
import ayi from './ayi';
import baibai from './baibai';
import halande from './halande';
import dafei from './dafei';
import qinzhe from './qinzhe';
import pipi from './pipi';
import newPop from './newPop';
import jiuwan from './jiuwan';
import baiyang from './baiyang';
import akang from './akang';
import xiaoxiong from './xiaoxiong';
import awen from './awen';

import CCGetPayNumber from './CCGetPayNumber';


import cc from './pop';

import Report from './Report';
import Demo from './Demo';

Vue.use(VueRouter)

const routes = [
    Loginrouter,
    baiyang,
    newPop,
    baibai,
    halande,
    jiuwan,
    dafei,
    qinzhe,
    pipi,
    xiaoxiong,
    Sidebarrouter,
    awen,
    akang,
    newSidebar,
    GetPayNumber,
    CCGetPayNumber,
    Report,
    myAdsReport,
    cc,
    ayi,
    zhazha,
    xiwen,
    carl,
    duola,
    Demo
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router