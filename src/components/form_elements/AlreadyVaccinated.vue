<template>
  <div class="flex flex-col space-y-3">
    <label for="had_vaccine" class="text-xl font-bold"
      >უკვე აცრილი ხარ?*
    </label>
    <BaseRadio
      name="had_vaccine"
      value="true"
      kaValue="კი"
      :action="setHadVaccine"
      :state="had_vaccine"
    />
    <BaseRadio
      name="had_vaccine"
      value="false"
      kaValue="არა"
      :action="setHadVaccine"
      :state="had_vaccine"
    />
  </div>
</template>
<script>
import BaseRadio from "./BaseRadio.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { BaseRadio },
  computed: {
    ...mapState("covidInformation", ["had_vaccine"]),
  },
  methods: {
    ...mapActions("vaccinationInformation", ["setHadVaccine"]),
  },
};
</script>
