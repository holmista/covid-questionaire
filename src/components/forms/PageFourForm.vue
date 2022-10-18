<template>
  <ValidationForm class="w-[513px] flex flex-col space-y-10">
    <div>
      <label for="had_vaccine"></label>
      <BaseRadio name="had_vaccine" value="კი" />
      <BaseRadio name="had_vaccine" value="არა" />
    </div>
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import BaseRadio from "../form_elements/BaseRadio.vue";

export default {
  components: {
    ValidationForm,
    BaseRadio,
  },
};
</script>
