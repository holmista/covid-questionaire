<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <p class="font-bold text-xl">
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
    </p>
    <BaseDate
      name="covid_sickness_date"
      placeholder="დდ/თთ/წწ"
      :action="setHadCovidDate"
      :state="had_covid_date"
    />
  </div>
</template>

<script>
import BaseDate from "./BaseDate.vue";
import { mapActions, mapState } from "vuex";
export default {
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
  components: { BaseDate },
  computed: {
    ...mapState("covidInformation", ["had_covid_date"]),
  },
  methods: {
    ...mapActions("covidInformation", ["setHadCovidDate"]),
  },
};
</script>
