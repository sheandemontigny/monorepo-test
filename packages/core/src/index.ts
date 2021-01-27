import { PluginObject } from "vue/types/umd";
import MButton from "./components/MButton.vue";

export { MButton };

const plugin: PluginObject<never> = {
  install(Vue) {
    Vue.component("MButton", MButton);
  },
};

export default plugin;
