<template>
  <div
    v-if="visible === true"
    class="w-60 h-14 bg-red-500 flex justify-center items-center rounded-xl mt-10"
  >
    <p class="font-bold text-white text-xl text-center">invalid form</p>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
