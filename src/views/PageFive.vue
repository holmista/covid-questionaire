<template>
  <BaseHeader page="3" class="" />
  <div class="flex justify-center">
    <div class="flex max-w-[1520px] w-full justify-between">
      <div>
        <div class="max-w-[606px] text-xl">
          <p>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p class="mt-6">
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <PageFiveForm class="mt-11" />
      </div>
      <div class="w-[730px]">
        <img src="@/assets/images/page5_image.png" alt="illustration" />
      </div>
    </div>
  </div>
  <nav class="flex justify-center mt-20 mb-24">
    <BackButton to="/4" />
  </nav>
</template>
<script>
import PageFiveForm from "@/components/forms/PageFiveForm.vue";
import BaseHeader from "@/components/layout/BaseHeader.vue";
import BackButton from "@/components/layout/BackButton.vue";
export default {
  components: { PageFiveForm, BaseHeader, BackButton },
};
</script>
