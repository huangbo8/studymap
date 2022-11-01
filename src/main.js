import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as L from "leaflet";
import * as esri from 'esri-leaflet'
import * as GeoServer from 'leaflet-geoserver-request'
import 'leaflet/dist/leaflet.css'
import 'leaflet.wmts'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import 'leaflet.chinatmsproviders'
import mapCommon from './map/mapCommon'
import * as echarts from 'echarts';

Vue.use(ElementUI);
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