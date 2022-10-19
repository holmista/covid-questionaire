<template>
  <ValidationForm class="max-w-[606px] flex flex-col space-y-14">
    <div class="flex flex-col space-y-4">
      <p class="font-bold text-xl">
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <label for="non_formal_meetings"></label>
      <BaseRadio name="non_formal_meetings" value="კვირაში ორჯერ" />
      <BaseRadio name="non_formal_meetings" value="კვირაში ერთხელ" />
      <BaseRadio name="non_formal_meetings" value="ორ კვირაში ერთხელ" />
      <BaseRadio name="non_formal_meetings" value="თვეში ერთხელ" />
    </div>
    <div class="flex flex-col space-y-4">
      <p class="font-bold text-xl">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <label for="number_of_days_from_office"></label>
      <BaseRadio name="number_of_days_from_office" value="0" />
      <BaseRadio name="number_of_days_from_office" value="1" />
      <BaseRadio name="number_of_days_from_office" value="2" />
      <BaseRadio name="number_of_days_from_office" value="3" />
      <BaseRadio name="number_of_days_from_office" value="4" />
      <BaseRadio name="number_of_days_from_office" value="5" />
    </div>
    <div>
      <p class="font-bold text-xl">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
      <label for="what_about_meetings_in_live"></label>
      <textarea
        name="what_about_meetings_in_live"
        class="border-[1px] border-kuro p-2 w-[606px] mt-5"
        rows="4"
        columns="50"
      ></textarea>
    </div>
    <div>
      <p class="font-bold text-xl">
        რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
      </p>
      <label for="tell_us_your_opinion_about_us"></label>
      <textarea
        name="tell_us_your_opinion_about_us"
        class="border-[1px] border-kuro p-2 w-[606px] mt-5"
        rows="4"
        columns="50"
      ></textarea>
    </div>
    <div class="flex justify-end">
      <router-link :to="{ name: 'thank_you_page' }">
        <button
          class="bg-[#208298] w-44 h-14 rounded-[42px] text-white font-bold"
        >
          დასრულება
        </button>
      </router-link>
    </div>
  </ValidationForm>
</template>

<script>
import { Form as ValidationForm } from "vee-validate";
import BaseRadio from "@/components/form_elements/BaseRadio.vue";
export default {
  components: {
    ValidationForm,
    BaseRadio,
  },
};
</script>
