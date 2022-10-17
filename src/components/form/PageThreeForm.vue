<template>
  <ValidationForm class="h-[500px] w-[500px]">
    <div class="flex flex-col space-y-3">
      <label for="had_covid" class="font-bold text-xl"
        >გაქვს გადატანილი Covid-19?*
      </label>
      <BaseSelect
        kaName="გაქვს გადატანილი Covid-19?*"
        name="had_covid"
        value="კი"
      />
      <BaseSelect
        kaName="გაქვს გადატანილი Covid-19?*"
        name="had_covid"
        value="არა"
      />
      <BaseSelect
        kaName="გაქვს გადატანილი Covid-19?*"
        name="had_covid"
        value="ახლა მაქვს"
      />
    </div>
  </ValidationForm>
</template>
<script>
import BaseSelect from "./BaseRadio.vue";
import { Form as ValidationForm } from "vee-validate";
export default {
  components: { BaseSelect, ValidationForm },
};
</script>
