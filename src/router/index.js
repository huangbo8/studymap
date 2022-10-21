import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomePage from '../views/HomePage.vue'
import HomePage from '../views/disaster/disaster.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage
},
{
    path: '/map',
    name: 'map',
    component: () =>
        import('../views/map/map.vue')
},
{
    path: '/openLayers',
    name: 'openLayers',
    component: () =>
        import('../views/map/openLayers.vue')
}, {
    path: '/leafletDraw',
    name: 'leafletDraw',
    component: () =>
        import('../views/map/leafletDraw.vue')
}, {
    path: '/flex',
    name: 'flex',
    component: () =>
        import('../views/cssClass/flex.vue')
},
{
    path: '/router',
    name: 'router',
    component: () =>
        import('../views/test/router.vue')
},
{
    path: '/disaster',
    name: 'disaster',
    component: () =>
        import('../views/disaster/disaster.vue')
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router