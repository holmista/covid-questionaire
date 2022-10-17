<template>
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
</template>

<script>
import { Form as ValidationForm } from "vee-validate";
import BaseInput from "../components/form/BaseInput.vue";
export default {
  components: { BaseInput, ValidationForm },
};
</script>
