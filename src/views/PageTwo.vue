<template>
  <BaseHeader page="2" class="" />
  <div class="flex justify-center">
    <div class="flex max-w-[1520px] w-full justify-between">
      <PageTwoForm />
      <div class="w-[750px]">
        <img src="@/assets/images/page2_image.png" alt="illustration" />
      </div>
    </div>
  </div>
  <ForwardButton active="no" />
</template>

<script>
import PageTwoForm from "@/components/form/PageTwoForm.vue";

export default {
  components: { PageTwoForm },
};
</script>
