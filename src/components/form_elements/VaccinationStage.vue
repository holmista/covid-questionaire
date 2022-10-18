<template>
  <div class="flex flex-col space-y-3">
    <label for="vaccination_stage" class="text-xl font-bold"
      >აირჩიე რა ეტაპზე ხარ*
    </label>
    <BaseRadio
      name="vaccination_stage"
      value="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
    />
    <BaseRadio name="vaccination_stage" value="სრულად აცრილი ვარ" />
    <BaseRadio
      name="vaccination_stage"
      value="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
    />
  </div>
</template>
<script>
import BaseRadio from "./BaseRadio.vue";
export default {
  components: { BaseRadio },
};
</script>
