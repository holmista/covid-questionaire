<template>
  <router-link :to="to">
    <DarkBack />
  </router-link>
</template>

<script>
import DarkBack from "@/assets/icons/DarkBack.vue";
export default {
  components: { DarkBack },
  props: {
    to: {
      type: Object,
      required: true,
    },
  },
};
</script>
