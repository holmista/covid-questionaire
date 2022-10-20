<template>
  <div>
    <label :for="name"></label>
    <input
      :name="name"
      :placeholder="placeholder"
      type="text"
      onfocus="(this.type='date')"
      class="px-3 py-5 border-kuro border-solid border-[1px] text-kuro mb-1 font-light focus:outline-none w-full h-12"
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
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>
