<template>
  <div v-if="visible === 'yes'">
    <a href="https://booking.moh.gov.ge/" class="text-sky-600"
      >👉 https://booking.moh.gov.ge/</a
    >
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
};
</script>
