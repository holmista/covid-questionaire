<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <p class="font-bold text-xl">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
      რაოდენობა*
    </p>
    <BaseDate name="test_date" />
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
