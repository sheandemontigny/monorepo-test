<template>
  <div>SOME TEXT</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "m-text",
  data: () => ({
    count: 0
  }),
  methods: {
    click(): void {
      this.count += 1;
    }
  }
});
</script>
