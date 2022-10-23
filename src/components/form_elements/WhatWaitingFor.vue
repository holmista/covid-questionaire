<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <label for="waiting_for" class="text-xl font-bold">რას ელოდები?* </label>
    <BaseRadio
      name="waiting_for"
      kaValue="დარეგისტრირებული ვარ და ველოდები რიცხვს"
      value="registered_and_waiting_for_date"
      action="setWaitingFor"
      state="waiting_for"
      module="vaccinationInformation"
    />
    <BaseRadio
      name="waiting_for"
      kaValue="არ ვგეგმავ"
      value="not_planning"
      action="setWaitingFor"
      state="waiting_for"
      module="vaccinationInformation"
    />
    <BaseRadio
      name="waiting_for"
      kaValue="გადატანილი მაქვს და ვგეგმავ აცრას"
      value="had_and_planning"
      action="setWaitingFor"
      state="waiting_for"
      module="vaccinationInformation"
    />
  </div>
  <CovidRegisterLink
    class="ml-8"
    :visible="
      waiting_for === 'not_planning' && had_vaccine === 'false' ? 'yes' : 'no'
    "
  />
  <CovidRegisterLink
    :visible="
      waiting_for === 'had_and_planning' && had_vaccine === 'false'
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
    ...mapState("vaccinationInformation", ["waiting_for", "had_vaccine"]),
  },
  methods: {
    ...mapActions("vaccinationInformation", ["setWaitingFor"]),
  },
};
</script>
