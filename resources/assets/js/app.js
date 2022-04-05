require('./bootstrap');
import store from './vuex/store'

window.Vue = require('vue');

/**
 * Components
 */
Vue.component('notifications', require('./components/notifications/Notifications'));
Vue.component('notification', require('./components/notifications/Notification'));
//Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    store,
    el: '#app'
});
