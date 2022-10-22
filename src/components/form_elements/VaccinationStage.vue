<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <label for="vaccination_stage" class="text-xl font-bold"
      >აირჩიე რა ეტაპზე ხარ*
    </label>
    <BaseRadio
      name="vaccination_stage"
      value="first_dosage_and_registered_on_the_second"
      kaValue="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
      :action="setVaccinationStage"
      :state="vaccination_stage"
    />
    <BaseRadio
      name="vaccination_stage"
      value="completely_vaccinated"
      kaValue="სრულად აცრილი ვარ"
      :action="setVaccinationStage"
      :state="vaccination_stage"
    />
    <BaseRadio
      name="vaccination_stage"
      value="first_dosage_and_not_registered_on_the_second"
      kaValue="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
      :action="setVaccinationStage"
      :state="vaccination_stage"
    />
  </div>
  <RegisterNow
    class="ml-8"
    :visible="
      vaccination_stage === 'first_dosage_and_not_registered_on_the_second' &&
      had_vaccine === 'true'
        ? 'yes'
        : 'no'
    "
  />
</template>
<script>
import BaseRadio from "./BaseRadio.vue";
import RegisterNow from "./RegisterNow.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { BaseRadio, RegisterNow },
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState("vaccinationInformation", ["vaccination_stage", "had_vaccine"]),
  },
  methods: {
    ...mapActions("vaccinationInformation", ["setVaccinationStage"]),
  },
};
</script>
