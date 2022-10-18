<template>
  <BaseHeader page="3" class="" />
  <div class="flex justify-center">
    <div class="flex max-w-[1520px] w-full justify-between">
      <PageThreeForm />
      <div class="w-[750px]">
        <img src="@/assets/images/page3_image.png" alt="illustration" />
      </div>
    </div>
  </div>
  <nav class="flex space-x-24 justify-center">
    <img src="@/assets/images/back_button.png" alt="back" />
    <ForwardButton active="no" />
  </nav>
</template>

<script>
import PageThreeForm from "@/components/forms/PageThreeForm.vue";
import ForwardButton from "@/components/layout/ForwardButton.vue";

export default {
  components: { PageThreeForm, ForwardButton },
};
</script>
