<template>
  <nav class="flex space-x-24 justify-center">
    <img
      src="@/assets/images/back_button.png"
      alt="back"
      v-if="showBackButton === 'yes'"
    />
    <ForwardButton active="no" />
  </nav>
</template>

<script>
import ForwardButton from "@/components/layout/ForwardButton.vue";
export default {
  components: { ForwardButton },
  props: {
    showBackButton: {
      type: String,
      required: true,
    },
  },
};
</script>
