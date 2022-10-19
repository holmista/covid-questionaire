<template>
  <div class="flex flex-col items-center mt-[250px]">
    <div>
      <img src="@/assets/images/redberry_start_logo.png" alt="logo" />
    </div>
    <router-link :to="{ name: 'basic_information_page' }">
      <p class="text-center font-bold text-3xl mt-24">
        კითხვარის <br />დაწყება
      </p>
    </router-link>
  </div>
</template>
