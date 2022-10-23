<template>
  <div class="flex space-x-2">
    <!-- <Field
      :name="name"
      type="radio"
      :value="value"
      rules="required"
      class="accent-kuro h-6 w-6"
      v-model="val"
    /> -->
    <Field v-slot="{ handleChange, handleBlur }" :name="name" rules="required">
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="value === this.$store.state[this.module][this.state]"
        class="accent-kuro h-6 w-6"
        @click="change"
        @change="handleChange"
        @blur="handleBlur"
      />
    </Field>
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
      type: String || Boolean,
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
  data() {
    return {
      val: this.$store.state[this.module][this.state],
    };
  },
  methods: {
    change(e) {
      this.$store.dispatch(`${this.module}/${this.action}`, e.target.value);
    },
  },
};
</script>
