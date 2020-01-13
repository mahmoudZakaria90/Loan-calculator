import Vue from "vue";
import App from "./App.vue";
import "./themes/variables.css";

Vue.config.productionTip = false;

Vue.directive("currency", {
  bind(el, binding, vnode) {
    el.value =
      binding.value &&
      Number(binding.value).toLocaleString("en-US", {
        style: "currency",
        currency: !binding.arg ? "USD" : binding.arg
      });
    el.onblur = function(e) {
      e.target.value = Number(e.target.value).toLocaleString("en-US", {
        style: "currency",
        currency: !binding.arg ? "USD" : binding.arg
      });
    };
    el.onfocus = function(e) {
      e.target.value =
        e.target.value && Number(e.target.value.replace(/[^\d.]/g, ""));
    };
    el.oninput = function(e) {
      vnode.context.$data[binding.expression] = e.target.value;
    };
  }
});

window.onload = function() {
  new Vue({
    render: h => h(App)
  }).$mount("#app");
};
