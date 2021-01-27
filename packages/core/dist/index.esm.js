import Vue, { resolveComponent, openBlock, createBlock, withCtx, renderSlot, createTextVNode, toDisplayString } from 'vue';

var script = Vue.extend({
    name: "m-button",
    data: () => ({
        count: 0
    }),
    methods: {
        click() {
            this.count += 1;
        }
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_btn = resolveComponent("v-btn");

  return (openBlock(), createBlock(_component_v_btn, {
    type: "button",
    onClick: _cache[1] || (_cache[1] = $event => (_ctx.click()))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default"),
      createTextVNode(toDisplayString(_ctx.count), 1 /* TEXT */)
    ]),
    _: 3 /* FORWARDED */
  }))
}

script.render = render;
script.__file = "src/components/MButton.vue";

const plugin = {
    install(Vue) {
        Vue.component("MButton", script);
    },
};

export default plugin;
export { script as MButton };
//# sourceMappingURL=index.esm.js.map
