<template>
  <ValidationForm
    class="max-w-[606px] flex flex-col space-y-14"
    v-slot="{ meta }"
  >
    <div class="flex flex-col space-y-4">
      <p class="font-bold text-xl">
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <label for="non_formal_meetings"></label>
      <BaseRadio
        name="non_formal_meetings"
        value="twice_a_week"
        kaValue="კვირაში ორჯერ"
        action="setNonFormalMeetings"
        state="non_formal_meetings"
        module="officeInformation"
      />
      <BaseRadio
        name="non_formal_meetings"
        value="once_a_week"
        kaValue="კვირაში ერთხელ"
        action="setNonFormalMeetings"
        state="non_formal_meetings"
        module="officeInformation"
      />
      <BaseRadio
        name="non_formal_meetings"
        value="once_in_a_two_weeks"
        kaValue="ორ კვირაში ერთხელ"
        action="setNonFormalMeetings"
        state="non_formal_meetings"
        module="officeInformation"
      />
      <BaseRadio
        name="non_formal_meetings"
        value="once_in_a_month"
        kaValue="თვეში ერთხელ"
        action="setNonFormalMeetings"
        state="non_formal_meetings"
        module="officeInformation"
      />
    </div>
    <div class="flex flex-col space-y-4">
      <p class="font-bold text-xl">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <label for="number_of_days_from_office"></label>
      <BaseRadio
        name="number_of_days_from_office"
        :value="0"
        kaValue="0"
        action="setNumberOfDaysFromOffice"
        state="number_of_days_from_office"
        module="officeInformation"
      />
      <BaseRadio
        name="number_of_days_from_office"
        :value="1"
        kaValue="1"
        action="setNumberOfDaysFromOffice"
        state="number_of_days_from_office"
        module="officeInformation"
      />
      <BaseRadio
        name="number_of_days_from_office"
        :value="2"
        kaValue="2"
        action="setNumberOfDaysFromOffice"
        state="number_of_days_from_office"
        module="officeInformation"
      />
      <BaseRadio
        name="number_of_days_from_office"
        :value="3"
        kaValue="3"
        action="setNumberOfDaysFromOffice"
        state="number_of_days_from_office"
        module="officeInformation"
      />
      <BaseRadio
        name="number_of_days_from_office"
        :value="4"
        kaValue="4"
        action="setNumberOfDaysFromOffice"
        state="number_of_days_from_office"
        module="officeInformation"
      />
      <BaseRadio
        name="number_of_days_from_office"
        :value="5"
        kaValue="5"
        action="setNumberOfDaysFromOffice"
        state="number_of_days_from_office"
        module="officeInformation"
      />
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
      <!-- <router-link :to="{ name: 'thank_you_page' }" v-if="meta.valid"> -->
      <button
        type="button"
        v-if="meta.valid"
        class="bg-[#208298] w-44 h-14 rounded-[42px] text-white font-bold"
        @click="sendForm"
      >
        დასრულება
      </button>
      <!-- </router-link> -->
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
  methods: {
    sendForm() {
      let data = this.flatten(JSON.parse(JSON.stringify(this.$store.state)));
      if (data.antibodies_test_date && data.antibodies_test_number) {
        data.antibodies = {
          test_date: data.antibodies_test_date,
          number: data.antibodies_test_number,
        };
        delete data.antibodies_test_date;
        delete data.antibodies_test_number;
      }
      console.log(this.strToBool(this.romoveNulls(data)));
    },
    flatten(obj) {
      let shallowFlat = {};
      for (let i in obj) {
        shallowFlat = { ...shallowFlat, ...obj[i] };
      }
      return shallowFlat;
    },
    strToBool(obj) {
      for (let i in obj) {
        if (obj[i] === "true") {
          obj[i] = true;
        } else if (obj[i] === "false") {
          obj[i] = false;
        }
      }
      return obj;
    },
    romoveNulls(obj) {
      for (let i in obj) {
        if (obj[i] === null) {
          delete obj[i];
        }
      }
      return obj;
    },
  },
};
</script>
