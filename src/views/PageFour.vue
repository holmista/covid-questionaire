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
</template>

<script>
import PageFourForm from "@/components/forms/PageFourForm.vue";

export default {
  components: { PageFourForm },
};
</script>
