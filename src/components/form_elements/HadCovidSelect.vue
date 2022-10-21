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
    />
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="no"
      kaValue="არა"
      :action="setHadCovid"
    />
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="currently"
      kaValue="ახლა მაქვს"
      :action="setHadCovid"
    />
  </div>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";
import { mapActions } from "vuex";
export default {
  components: { BaseRadio },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions("covidInformation", ["setHadCovid"]),
  },
};
</script>
