<template>
  <div class="bg-kuro h-screen flex justify-center items-center">
    <p v-if="success" class="font-bold text-white tracking-widest text-[64px]">
      მადლობა
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.success = true;
    }, 2000);
  },
};
</script>
