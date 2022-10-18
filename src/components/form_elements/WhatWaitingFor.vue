<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <label for="waiting_for" class="text-xl font-bold">რას ელოდები?* </label>
    <BaseRadio
      name="waiting_for"
      value="დარეგისტრირებული ვარ და ველოდები რიცხვს"
    />
    <BaseRadio name="waiting_for" value="არ ვგეგმავ" />
    <BaseRadio name="waiting_for" value="გადატანილი მაქვს და ვგეგმავ აცრას" />
  </div>
  <RegisterNow visible="no" class="ml-8" />
  <CovidRegisterLink visible="yes" class="ml-8" />
</template>
<script>
import BaseRadio from "./BaseRadio.vue";
import RegisterNow from "./RegisterNow.vue";
import CovidRegisterLink from "./CovidRegisterLink.vue";
export default {
  components: { BaseRadio, RegisterNow, CovidRegisterLink },
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
};
</script>
