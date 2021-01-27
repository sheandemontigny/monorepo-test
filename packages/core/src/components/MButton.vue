<template>
  <v-btn type="button" color="red" @click="click()"><slot />{{ count }}</v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import { VBtn } from "vuetify/lib";

export default Vue.extend({
  name: "m-button",
  components: { VBtn },
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
