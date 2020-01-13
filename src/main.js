import Vue from "vue";
import App from "./App.vue";
import "./themes/variables.css";

Vue.config.productionTip = false;

window.onload = function() {
  new Vue({
    render: h => h(App)
  }).$mount("#app");
};
