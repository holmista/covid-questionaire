<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <label for="had_antibody_test" class="font-bold text-xl"
      >ანტისხეულების ტესტი გაქვს გაკეთებული?*
    </label>
    <BaseRadio
      name="had_antibody_test"
      value="true"
      kaValue="კი"
      :action="setHadAntibodyTest"
      :state="had_antibody_test"
    />
    <BaseRadio
      name="had_antibody_test"
      value="false"
      kaValue="არა"
      :action="setHadAntibodyTest"
      :state="had_antibody_test"
    />
  </div>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { BaseRadio },
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState("covidInformation", ["had_antibody_test"]),
  },
  methods: {
    ...mapActions("covidInformation", ["setHadAntibodyTest"]),
  },
};
</script>
