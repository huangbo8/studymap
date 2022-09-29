import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/map',
        name: 'map',
        component: () =>
            import ('../views/map/map.vue')
    },
    {
        path: '/openLayers',
        name: 'openLayers',
        component: () =>
            import ('../views/map/openLayers.vue')
    }, {
        path: '/leafletDraw',
        name: 'leafletDraw',
        component: () =>
            import ('../views/map/leafletDraw.vue')
    }, {
        path: '/flex',
        name: 'flex',
        component: () =>
            import ('../views/cssClass/flex.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router