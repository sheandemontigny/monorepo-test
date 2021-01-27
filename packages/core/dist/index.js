'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

var script = Vue__default['default'].extend({
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
  const _component_v_btn = Vue.resolveComponent("v-btn");

  return (Vue.openBlock(), Vue.createBlock(_component_v_btn, {
    type: "button",
    color: "red",
    onClick: _cache[1] || (_cache[1] = $event => (_ctx.click()))
  }, {
    default: Vue.withCtx(() => [
      Vue.renderSlot(_ctx.$slots, "default"),
      Vue.createTextVNode(Vue.toDisplayString(_ctx.count), 1 /* TEXT */)
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

exports.MButton = script;
exports.default = plugin;
//# sourceMappingURL=index.js.map
