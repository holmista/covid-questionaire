<template>
  <div
    class="max-w-[1520px] flex justify-between border-b-2 border-kuro mb-10 mx-auto mt-24"
  >
    <div class="flex items-center">
      <img src="@/assets/images/redberry_logo.png" alt="redberry logo" />
    </div>
    <p class="font-ap text-[40px]">{{ page }}/4</p>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true,
    },
  },
};
</script>
