<template>
  <div class="flex space-x-2">
    <Field
      type="radio"
      :name="name"
      :value="value"
      v-model="val"
      rules="required"
      class="accent-kuro h-6 w-6"
      :ref="`radio-${name}`"
    />
    <p>{{ kaValue }}</p>
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
      type: [String, Boolean, Number],
      required: true,
    },
    kaValue: {
      type: String,
      required: true,
    },

    action: {
      type: String,
      required: true,
    },
    state: {
      required: true,
    },
    module: {
      required: true,
    },
  },
  computed: {
    val: {
      set(val) {
        this.$store.dispatch(`${this.module}/${this.action}`, val);
      },
      get() {
        return this.$store.state[this.module][this.state];
      },
    },
  },
  beforeUnmount() {
    this.$refs[`radio-${this.name}`].reset();
  },
};
</script>
