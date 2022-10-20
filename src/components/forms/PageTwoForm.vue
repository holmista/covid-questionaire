<template>
  <div class="flex flex-col">
    <ValidationForm v-slot="{ meta, handleSubmit }" as="div">
      <form
        @submit="handleSubmit($event, onSubmit)"
        class="w-[513px] flex flex-col space-y-10"
      >
        <BaseInput
          kaName="სახელი"
          name="name"
          type="text"
          rules="required|min:3|max:256|alpha"
        />
        <BaseInput
          kaName="გვარი"
          name="surname"
          type="text"
          rules="required|min:3"
        />
        <BaseInput
          kaName="იმეილი"
          name="email"
          type="email"
          rules="required|email|redberry_email"
        />
        <div class="absolute w-[1520px] bottom-12">
          <ForwardButton
            :active="meta.valid && meta.touched ? 'yes' : 'no'"
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
import { mapActions } from "vuex";

export default {
  components: { ValidationForm, BaseInput, RequireFields, ForwardButton },
  methods: {
    ...mapActions("basicInformation", [
      "setFirstName",
      "setLastName",
      "setEmail",
    ]),
    onSubmit(values) {
      this.setFirstName(values.name);
      this.setLastName(values.surname);
      this.setEmail(values.email);
      console.log(
        this.$store.state.basicInformation.first_name,
        this.$store.state.basicInformation.last_name,
        this.$store.state.basicInformation.email
      );
    },
  },
};
</script>
