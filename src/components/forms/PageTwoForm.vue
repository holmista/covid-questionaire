<template>
  <div class="flex flex-col">
    <ValidationForm v-slot="{ meta }" as="div">
      <form class="w-[513px] flex flex-col space-y-10">
        <BaseInput
          kaName="სახელი*"
          name="first_name"
          type="text"
          rules="required|min:2|max:256|alpha"
          :action="setFirstName"
          :state="first_name"
        />
        <BaseInput
          kaName="გვარი*"
          name="last_name"
          type="text"
          rules="required|min:2|max:256|alpha"
          :action="setLastName"
          :state="last_name"
        />
        <BaseInput
          kaName="იმეილი*"
          name="email"
          type="email"
          rules="required|email|redberry_email"
          :action="setEmail"
          :state="email"
        />
        <div class="absolute w-[1520px] bottom-12">
          <ForwardButton
            :active="meta.valid ? 'yes' : 'no'"
            :to="{ name: 'covid_information_page' }"
          />
        </div>
      </form>
    </ValidationForm>
    <RequireFields class="mt-28" />
  </div>
</template>

<script>
import { Form as ValidationForm } from "vee-validate";
import BaseInput from "../form_elements/BaseInput.vue";
import RequireFields from "./RequireFields.vue";
import ForwardButton from "@/components/layout/ForwardButton.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { ValidationForm, BaseInput, RequireFields, ForwardButton },
  computed: {
    ...mapState("basicInformation", ["first_name", "last_name", "email"]),
  },
  methods: {
    ...mapActions("basicInformation", [
      "setFirstName",
      "setLastName",
      "setEmail",
    ]),
  },
};
</script>
