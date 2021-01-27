<template>
  <v-btn type="button" @click="click()"><slot />{{ count }}</v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "m-button",
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
