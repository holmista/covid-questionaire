<template>
  <div v-if="visible === 'yes'" class="flex flex-col space-y-3">
    <p class="font-bold text-xl">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
      რაოდენობა*
    </p>
    <BaseDate name="test_date" placeholder="რიცხვი" />
    <div>
      <label for="number"></label>
      <Field
        name="number"
        type="number"
        rules="required|numeric"
        class="border-kuro border-solid border-[1px] py-2 px-5 h-12 text-lg text-kuro mb-1 font-light focus:outline-none w-full"
        placeholder="ანტისხეულების რაოდენობა"
      />
    </div>
  </div>
</template>

<script>
import BaseDate from "./BaseDate.vue";
import { Field } from "vee-validate";
export default {
  props: {
    visible: {
      type: String,
      required: true,
    },
  },
  components: { BaseDate, Field },
};
</script>
