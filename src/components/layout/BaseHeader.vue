<template>
  <div
    class="max-w-[1520px] flex justify-between border-b-2 border-[#232323] pb-6 mb-10 mx-auto mt-24"
  >
    <div>
      <img src="@/assets/images/redberry_logo.png" alt="redberry logo" />
    </div>
    <p>{{ page }}/4</p>
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
