<template>
  <ValidationForm class="w-[513px] flex flex-col space-y-10">
    <HadCovidSelect />
    <AntibodiesSelect visible="yes" />
    <AntibodiesDetails visible="no" />
    <WhenHadCovid visible="yes" />
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import HadCovidSelect from "../form_elements/HadCovidSelect.vue";
import AntibodiesSelect from "../form_elements/AntibodiesSelect.vue";
import AntibodiesDetails from "../form_elements/AntibodiesDetails.vue";
import WhenHadCovid from "../form_elements/WhenHadCovid.vue";

export default {
  components: {
    ValidationForm,
    HadCovidSelect,
    AntibodiesSelect,
    AntibodiesDetails,
    WhenHadCovid,
  },
};
</script>
