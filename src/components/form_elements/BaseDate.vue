<template>
  <div>
    <label :for="name"></label>
    <input
      :name="name"
      placeholder="რიცხვი"
      type="text"
      onfocus="(this.type='date')"
      class="px-3 py-5 border-[#232323] border-solid border-[1px] text-[#232323] mb-1 font-light focus:outline-none max-w-[537px] w-full"
    />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
