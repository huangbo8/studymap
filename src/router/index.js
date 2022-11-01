import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/homePage/homePage'
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
    path: '/leafletDraw',
    name: 'leafletDraw',
    component: () =>
        import('@/views/map/leafletDraw.vue')
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