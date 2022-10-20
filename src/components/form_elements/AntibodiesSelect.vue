<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <label for="antibodies" class="font-bold text-xl"
      >ანტისხეულების ტესტი გაქვს გაკეთებული?*
    </label>
    <BaseRadio name="antibodies" value="კი" />
    <BaseRadio name="antibodies" value="არა" />
  </div>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";
export default {
  components: { BaseRadio },
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
};
</script>
