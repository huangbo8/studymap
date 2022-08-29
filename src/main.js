import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as L from "leaflet";
import * as esri from 'esri-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'
import 'leaflet.chinatmsproviders'
import map from './map/map'
import testMap from './map/testMap'
import 'ol/ol.css'
Vue.use(ElementUI);
Vue.prototype.$map = map
Vue.prototype.$testMap = testMap
Vue.L = Vue.prototype.$L = L;
L.esri = esri


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')