<template>
  <ValidationForm>
    <HadCovidSelect />
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import HadCovidSelect from "../form_elements/HadCovidSelect.vue";

export default {
  components: { ValidationForm, HadCovidSelect },
};
</script>
