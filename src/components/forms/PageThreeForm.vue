<template>
  <ValidationForm v-slot="{ meta }" as="div">
    <form class="w-[513px] flex flex-col space-y-10">
      <HadCovidSelect />
      <AntibodiesSelect visible="yes" />
      <AntibodiesDetails visible="no" />
      <WhenHadCovid visible="yes" />
    </form>
    <div class="absolute w-[1520px] bottom-12">
      <nav class="flex space-x-24 justify-center">
        <BackButton :to="{ name: 'basic_information_page' }" />
        <ForwardButton
          :active="meta.valid && meta.touched ? 'yes' : 'no'"
          :to="{ name: 'vaccination_information_page' }"
        />
      </nav>
    </div>
  </ValidationForm>
</template>
<script>
import { Form as ValidationForm } from "vee-validate";
import HadCovidSelect from "../form_elements/HadCovidSelect.vue";
import AntibodiesSelect from "../form_elements/AntibodiesSelect.vue";
import AntibodiesDetails from "../form_elements/AntibodiesDetails.vue";
import WhenHadCovid from "../form_elements/WhenHadCovid.vue";
import ForwardButton from "@/components/layout/ForwardButton.vue";
import BackButton from "@/components/layout/BackButton.vue";

export default {
  components: {
    ValidationForm,
    HadCovidSelect,
    AntibodiesSelect,
    AntibodiesDetails,
    WhenHadCovid,
    ForwardButton,
    BackButton,
  },
};
</script>
