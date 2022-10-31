import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/homePage/homePage'
// import HomePage from '@/views/homePage/homePage'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage
},
{
    path: '/management',
    name: 'management',
    redirect: '/management/notification',
    component: () =>
        import('@/views/management/management.vue'),
    children: [
        //需要注意的是：子路由规则不要以/开头
        {
            path: 'notification', component: () =>
                import('@/views/management/notification/notification.vue'),
        },
        {
            path: 'exportReport', component: () =>
                import('@/views/management/exportReport/exportReport.vue'),
        },
        {
            path: 'dataDissemination', component: () =>
                import('@/views/management/dataDissemination/dataDissemination.vue'),
        },
    ]

},
{
    path: '/map',
    name: 'map',
    component: () =>
        import('@/views/map/map.vue')
},
{
    path: '/openLayers',
    name: 'openLayers',
    component: () =>
        import('@/views/map/openLayers.vue')
}, {
    path: '/leafletDraw',
    name: 'leafletDraw',
    component: () =>
        import('@/views/map/leafletDraw.vue')
}, {
    path: '/flex',
    name: 'flex',
    component: () =>
        import('@/views/cssClass/flex.vue')
},
{
    path: '/router',
    name: 'router',
    component: () =>
        import('@/views/test/router.vue')
},
{
    path: '/disaster',
    name: 'disaster',
    component: () =>
        import('@/views/disaster/disaster.vue')
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router