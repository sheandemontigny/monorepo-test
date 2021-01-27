import { PluginObject } from "vue/types/umd";
import MButton from "./components/MButton.vue";
import Text from "./components/Text.vue";

export { MButton };

const plugin: PluginObject<never> = {
  install(Vue) {
    Vue.component("MButton", MButton);
    Vue.component("MText", Text);
  },
};

export default plugin;
