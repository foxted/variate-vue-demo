import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import config from './variate.json';
import VueABTest from '@variate/vue';
import router from './router';

Vue.use(ElementUI);

Vue.use(VueABTest, {
    debug: true,
    config: config,
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
