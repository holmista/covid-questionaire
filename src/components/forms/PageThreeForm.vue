<template>
  <ValidationForm>
    <HadCovidSelect />
    <AntibodiesSelect visible="yes" />
    <AntibodiesDetails visible="yes" />
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import HadCovidSelect from "../form_elements/HadCovidSelect.vue";
import AntibodiesSelect from "../form_elements/AntibodiesSelect.vue";
import AntibodiesDetails from "../form_elements/AntibodiesDetails.vue";

export default {
  components: {
    ValidationForm,
    HadCovidSelect,
    AntibodiesSelect,
    AntibodiesDetails,
  },
};
</script>
