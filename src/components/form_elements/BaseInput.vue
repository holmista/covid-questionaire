<template>
  <div class="flex flex-col">
    <label :for="name" class="mb-3 text-xl font-bold">{{ kaName }}</label>
    <Field
      :name="name"
      :type="type"
      :rules="rules"
      class="border-kuro border-solid border-[1px] py-2 px-5 h-12 text-lg text-kuro mb-1 font-light focus:outline-none"
      v-model="value"
      :placeholder="placeholder"
    />
    <div class="flex items-center justify-center">
      <ErrorMessage
        :name="name"
        class="text-[#F15524] text-center font-light"
      />
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    kaName: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    state: {
      required: true,
    },
  },
  data() {
    return {
      value: this.state,
    };
  },
  watch: {
    value(val) {
      this.action(val);
    },
  },
};
</script>
