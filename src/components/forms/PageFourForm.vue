<template>
  <ValidationForm class="w-[513px] flex flex-col space-y-10">
    <AlreadyVaccinated />
    <VaccinationStage />
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import AlreadyVaccinated from "@/components/form_elements/AlreadyVaccinated.vue";
import VaccinationStage from "@/components/form_elements/VaccinationStage.vue";
export default {
  components: {
    ValidationForm,
    AlreadyVaccinated,
    VaccinationStage,
  },
};
</script>
