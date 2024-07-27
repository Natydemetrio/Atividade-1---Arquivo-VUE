// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router';

// createApp(App).mount('#app') 

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');






