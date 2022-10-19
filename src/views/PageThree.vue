<template>
  <BaseHeader page="2" class="" />
  <div class="flex justify-center">
    <div class="flex max-w-[1520px] w-full justify-between">
      <PageThreeForm />
      <div class="w-[750px]">
        <img src="@/assets/images/page3_image.png" alt="illustration" />
      </div>
    </div>
  </div>
  <nav class="flex space-x-24 justify-center">
    <BackButton to="/2" />
    <ForwardButton active="no" to="/4" />
  </nav>
</template>

<script>
import PageThreeForm from "@/components/forms/PageThreeForm.vue";
import ForwardButton from "@/components/layout/ForwardButton.vue";
import BackButton from "@/components/layout/BackButton.vue";

export default {
  components: { PageThreeForm, ForwardButton, BackButton },
};
</script>
