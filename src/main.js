import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as L from "leaflet";
import * as esri from 'esri-leaflet'
import * as GeoServer from 'leaflet-geoserver-request'
import 'leaflet.wmts'
import 'leaflet/dist/leaflet.css'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import 'leaflet.chinatmsproviders'
import map from './map/map'
import mapCommon from './map/mapCommon'
import 'ol/ol.css'
import * as echarts from 'echarts';
// import '@/api/flexRem' // icon

Vue.use(ElementUI);
Vue.prototype.$map = map
L.esri = esri
L.GeoServer = GeoServer
Vue.L = Vue.prototype.$L = L;
Vue.L = Vue.prototype.$echarts = echarts;
Vue.prototype.$mapCommon = mapCommon

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')