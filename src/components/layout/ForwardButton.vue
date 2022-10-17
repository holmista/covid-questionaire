<template>
  <div v-if="active === 'yes'" class="flex justify-center">
    <img
      src="@/assets/images/dark_forward_button.png"
      alt="forward"
      class="hover:cursor-pointer"
    />
  </div>
  <div v-else class="flex justify-center">
    <img
      src="@/assets/images/light_forward_button.png"
      alt="forward"
      class="hover:cursor-pointer"
    />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      required: true,
    },
  },
};
</script>
