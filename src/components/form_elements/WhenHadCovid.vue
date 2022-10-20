<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <p class="font-bold text-xl">
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
    </p>
    <BaseDate name="test_date" placeholder="დდ/თთ/წწ" />
  </div>
</template>

<script>
import BaseDate from "./BaseDate.vue";
export default {
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
  components: { BaseDate },
};
</script>
