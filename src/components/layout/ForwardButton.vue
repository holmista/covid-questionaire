<template>
  <div v-if="active === 'yes'" class="flex justify-center">
    <!-- <router-link :to="to"> -->
    <button>
      <DarkForward />
    </button>
    <!-- </router-link> -->
  </div>
  <div v-else class="flex justify-center">
    <LightForward />
  </div>
</template>

<script>
import DarkForward from "@/assets/icons/DarkForward.vue";
import LightForward from "@/assets/icons/LightForward.vue";
export default {
  props: {
    active: {
      type: String,
      required: true,
    },
    to: {
      type: Object,
      required: true,
    },
  },
  components: { DarkForward, LightForward },
};
</script>
