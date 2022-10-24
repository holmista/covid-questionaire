<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <p class="font-bold text-xl">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
      რაოდენობა*
    </p>
    <BaseDate
      name="antibodies_test_date"
      placeholder="რიცხვი"
      :action="setAntibodiesTestDate"
      :state="antibodies_test_date"
    />
    <div>
      <BaseInput
        name="antibodies_test_number"
        type="number"
        rules="required"
        placeholder="ანტისხეულების რაოდენობა"
        :action="setAntibodiesTestNumber"
        :state="antibodies_test_number"
      />
    </div>
  </div>
</template>

<script>
import BaseDate from "./BaseDate.vue";
import { mapActions, mapState } from "vuex";
import BaseInput from "./BaseInput.vue";
export default {
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
  components: { BaseDate, BaseInput },
  computed: {
    ...mapState("covidInformation", [
      "antibodies_test_date",
      "antibodies_test_number",
    ]),
  },
  methods: {
    ...mapActions("covidInformation", [
      "setAntibodiesTestDate",
      "setAntibodiesTestNumber",
    ]),
  },
};
</script>
