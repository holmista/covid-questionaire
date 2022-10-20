<template>
  <div class="flex flex-col">
    <ValidationForm class="w-[513px] flex flex-col space-y-10">
      <BaseInput
        kaName="სახელი"
        name="name"
        type="text"
        rules="required|min:3|max:256|alpha"
      />
      <BaseInput
        kaName="გვარი"
        name="surname"
        type="text"
        rules="required|min:3"
      />
      <BaseInput
        kaName="იმეილი"
        name="email"
        type="email"
        rules="required|email|redberry_email"
      />
    </ValidationForm>
    <RequireFields class="mt-28" />
  </div>
</template>

<script>
import { Form as ValidationForm } from "vee-validate";
import BaseInput from "../form_elements/BaseInput.vue";
import RequireFields from "./RequireFields.vue";

export default {
  components: { ValidationForm, BaseInput, RequireFields },
  methods: {
    nameEvent(val) {
      console.log(val);
    },
  },
};
</script>
