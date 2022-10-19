<template>
  <router-link :to="to">
    <img src="@/assets/images/back_button.png" alt="back" />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
