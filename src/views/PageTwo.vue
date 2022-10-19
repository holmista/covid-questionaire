<template>
  <BaseHeader page="1" class="" />
  <div class="flex justify-center">
    <div class="flex max-w-[1520px] w-full justify-between">
      <PageTwoForm />
      <div class="w-[750px]">
        <img src="@/assets/images/page2_image.png" alt="illustration" />
      </div>
    </div>
  </div>
  <ForwardButton active="yes" :to="{ name: 'covid_information_page' }" />
</template>

<script>
import PageTwoForm from "@/components/forms/PageTwoForm.vue";

export default {
  components: { PageTwoForm },
};
</script>
