<template>
  <div class="flex flex-col space-y-3">
    <label for="had_covid" class="font-bold text-xl"
      >გაქვს გადატანილი Covid-19?*
    </label>
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="yes"
      kaValue="კი"
      :action="setHadCovid"
      :state="had_covid"
    />
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="no"
      kaValue="არა"
      :action="setHadCovid"
      :state="had_covid"
    />
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="currently"
      kaValue="ახლა მაქვს"
      :action="setHadCovid"
      :state="had_covid"
    />
  </div>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { BaseRadio },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapState("covidInformation", ["had_covid"]),
  },
  methods: {
    ...mapActions("covidInformation", ["setHadCovid"]),
  },
};
</script>
