<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <label for="i_am_waiting" class="text-xl font-bold">რას ელოდები?* </label>
    <BaseRadio
      name="i_am_waiting"
      kaValue="დარეგისტრირებული ვარ და ველოდები რიცხვს"
      value="registered_and_waiting"
      action="setWaitingFor"
      state="i_am_waiting"
      module="vaccinationInformation"
    />
    <BaseRadio
      name="i_am_waiting"
      kaValue="არ ვგეგმავ"
      value="not_planning"
      action="setWaitingFor"
      state="i_am_waiting"
      module="vaccinationInformation"
    />
    <BaseRadio
      name="i_am_waiting"
      kaValue="გადატანილი მაქვს და ვგეგმავ აცრას"
      value="had_covid_and_planning_to_be_vaccinated"
      action="setWaitingFor"
      state="i_am_waiting"
      module="vaccinationInformation"
    />
  </div>
  <CovidRegisterLink
    class="ml-8"
    :visible="
      i_am_waiting === 'not_planning' && had_vaccine === 'false' ? 'yes' : 'no'
    "
  />
  <CovidRegisterLink
    :visible="
      i_am_waiting === 'had_covid_and_planning_to_be_vaccinated' &&
      had_vaccine === 'false'
        ? 'yes'
        : 'no'
    "
    class="ml-8 max-w-[400px]"
  >
    <p>
      ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
      გაკეთება.
    </p>
  </CovidRegisterLink>
</template>
<script>
import BaseRadio from "./BaseRadio.vue";
import CovidRegisterLink from "./CovidRegisterLink.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { BaseRadio, CovidRegisterLink },
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState("vaccinationInformation", ["i_am_waiting", "had_vaccine"]),
  },
  methods: {
    ...mapActions("vaccinationInformation", ["setWaitingFor"]),
  },
};
</script>
