<template>
  <div v-if="visible === 'yes'" class="max-w-[337px]">
    რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
    <a href="https://booking.moh.gov.ge/" target="_blank" class="text-sky-600">
      https://booking.moh.gov.ge/</a
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
