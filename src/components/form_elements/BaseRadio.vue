<template>
  <div class="flex space-x-2">
    <Field
      :name="name"
      type="radio"
      :value="value"
      rules="required"
      class="accent-kuro h-6 w-6"
      @click="handleClick"
      v-model="val"
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
    rules: {
      type: String,
      required: false,
    },
    action: {
      type: Function,
      required: true,
    },
    state: {
      required: true,
    },
  },
  data() {
    return {
      val: this.state,
    };
  },
  methods: {
    handleClick(e) {
      this.action(e.target.value);
    },
  },
};
</script>
