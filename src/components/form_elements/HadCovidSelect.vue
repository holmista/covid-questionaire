<template>
  <div class="flex flex-col space-y-3">
    <label for="had_covid" class="font-bold text-xl"
      >გაქვს გადატანილი Covid-19?*
    </label>
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="კი"
    />
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="არა"
    />
    <BaseRadio
      kaName="გაქვს გადატანილი Covid-19?*"
      name="had_covid"
      value="ახლა მაქვს"
    />
  </div>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";
export default {
  components: { BaseRadio },
};
</script>
