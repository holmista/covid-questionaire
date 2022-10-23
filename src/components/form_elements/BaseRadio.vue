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
    <!-- <Field v-slot="{ handleChange, handleBlur }" :name="name" rules="required">
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
    </Field> -->
    <Field
      type="radio"
      :name="name"
      :value="value"
      v-model="val"
      rules="required"
      class="accent-kuro h-6 w-6"
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
};
</script>
