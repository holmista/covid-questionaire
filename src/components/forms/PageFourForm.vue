<template>
  <ValidationForm class="w-[513px] flex flex-col space-y-10">
    <AlreadyVaccinated />
    <VaccinationStage visible="no" />
    <WhatWaitingFor visible="yes" />
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import AlreadyVaccinated from "@/components/form_elements/AlreadyVaccinated.vue";
import VaccinationStage from "@/components/form_elements/VaccinationStage.vue";
import WhatWaitingFor from "@/components/form_elements/WhatWaitingFor.vue";
export default {
  components: {
    ValidationForm,
    AlreadyVaccinated,
    VaccinationStage,
    WhatWaitingFor,
  },
};
</script>
