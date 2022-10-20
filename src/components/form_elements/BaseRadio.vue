<template>
  <div class="flex space-x-2">
    <Field
      :name="name"
      type="radio"
      :value="value"
      class="accent-kuro h-6 w-6"
    />
    <p>{{ value }}</p>
  </div>
</template>

<script>
import { Field } from "vee-validate";
export default {
  components: { Field },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
