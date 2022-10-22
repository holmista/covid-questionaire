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
</template>

<script>
import PageThreeForm from "@/components/forms/PageThreeForm.vue";

export default {
  components: { PageThreeForm },
};
</script>
