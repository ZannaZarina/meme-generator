import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {VueMasonryPlugin} from 'vue-masonry';
import VueMasonry from 'vue-masonry-css';
import VueDraggableResizable from 'vue-draggable-resizable';
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';
import VSwatches from 'vue-swatches'


const node = document.getElementById('elementId');
saveAsPng(node);
saveAsPng(node, {  filename: 'Report', printDate: true });
saveAsJpeg(node, {  filename: 'Album', printDate: false });

Vue.use(BootstrapVue)
Vue.use(VueMasonryPlugin)
Vue.use(VueMasonry);
Vue.use(saveAsPng, saveAsJpeg)
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(VSwatches)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
