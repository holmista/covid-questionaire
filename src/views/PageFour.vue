<template>
  <BaseHeader page="3" class="" />
  <div class="flex justify-center">
    <div class="flex max-w-[1520px] w-full justify-between">
      <PageFourForm />
      <div class="w-[730px]">
        <img src="@/assets/images/page4_image.png" alt="illustration" />
      </div>
    </div>
  </div>
  <nav class="flex space-x-24 justify-center">
    <BackButton to="/3" />
    <ForwardButton active="no" to="/5" />
  </nav>
</template>

<script>
import PageFourForm from "@/components/forms/PageFourForm.vue";
import ForwardButton from "@/components/layout/ForwardButton.vue";
import BackButton from "@/components/layout/BackButton.vue";

export default {
  components: { PageFourForm, ForwardButton, BackButton },
};
</script>
