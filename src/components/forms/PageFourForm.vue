<template>
  <ValidationForm v-slot="{ meta }" as="div">
    <form class="w-[513px] flex flex-col space-y-10">
      <AlreadyVaccinated />
      <VaccinationStage
        :visible="
          $store.state.vaccinationInformation.had_vaccine === 'true'
            ? 'yes'
            : 'no'
        "
      />
      <!-- <WhatWaitingFor
        :visible="
          $store.state.vaccinationInformation.had_vaccine === 'false'
            ? 'yes'
            : 'no'
        "
      /> -->
    </form>

    <div class="absolute w-[1520px] bottom-12">
      <nav class="flex space-x-24 justify-center">
        <BackButton :to="{ name: 'covid_information_page' }" />
        <ForwardButton
          :active="meta.valid && meta.touched ? 'yes' : 'no'"
          :to="{ name: 'office_information_page' }"
        />
      </nav>
    </div>
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import AlreadyVaccinated from "@/components/form_elements/AlreadyVaccinated.vue";
import VaccinationStage from "@/components/form_elements/VaccinationStage.vue";
import WhatWaitingFor from "@/components/form_elements/WhatWaitingFor.vue";
import ForwardButton from "@/components/layout/ForwardButton.vue";
import BackButton from "@/components/layout/BackButton.vue";

export default {
  components: {
    ValidationForm,
    AlreadyVaccinated,
    VaccinationStage,
    WhatWaitingFor,
    ForwardButton,
    BackButton,
  },
};
</script>
