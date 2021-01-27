import Vue, { openBlock, createBlock, renderSlot, createTextVNode, toDisplayString } from 'vue';

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
  return (openBlock(), createBlock("button", {
    type: "button",
    onClick: _cache[1] || (_cache[1] = $event => (_ctx.click()))
  }, [
    renderSlot(_ctx.$slots, "default"),
    createTextVNode(toDisplayString(_ctx.count), 1 /* TEXT */)
  ]))
}

script.render = render;
script.__file = "src/components/MButton.vue";

export { script as MButton };
//# sourceMappingURL=index.esm.js.map