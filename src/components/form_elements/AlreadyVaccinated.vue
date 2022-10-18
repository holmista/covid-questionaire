<template>
  <div class="flex flex-col space-y-3">
    <label for="had_vaccine" class="text-xl font-bold"
      >უკვე აცრილი ხარ?*
    </label>
    <BaseRadio name="had_vaccine" value="კი" />
    <BaseRadio name="had_vaccine" value="არა" />
  </div>
</template>
<script>
import BaseRadio from "./BaseRadio.vue";
export default {
  components: { BaseRadio },
};
</script>
