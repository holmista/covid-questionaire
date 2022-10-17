<template>
  <div class="flex flex-col">
    <label :for="name" class="mb-3 text-xl font-bold">{{ kaName }}*</label>
    <Field
      :name="name"
      :type="type"
      :rules="rules"
      class="border-[#232323] border-solid border-[1px] py-2 px-5 h-12 text-lg text-[#232323] mb-1 font-light focus:outline-none"
      v-model="value"
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
  emits: ["name"],
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    kaName: {
      type: String,
      required: true,
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
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
