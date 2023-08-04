<script setup>
// const { data } = await useFetch('https://api.nuxtjs.dev/mountains');

// const { data } = await useFetch(
//   'https://vue3-course-api.hexschool.io/v2/api/week3dean/products/all'
// );

// const { data } = await useFetch(
//   'https://vue3-course-api.hexschool.io/v2/api/week3dean/products/all',
//   {
//     onRequest({ request, options }) {
//       // 設置 request headers
//       options.headers = options.headers || {};
//       options.headers.authorization = `Bearer token123234`;
//       console.log(options.headers);
//     },

//     onResponse({ request, response, options }) {
//       // 處理回傳資料
//       return response._data;
//       console.log(response._data);
//     }
//   }
// );

const { data } = await useAsyncData('userInfo', () => $fetch('https://api.nuxtjs.dev/mountains'));

console.log(data);
</script>
<template>
  <div>
    <div>useFetch</div>

    {{ data }}
  </div>
</template>
<style></style>
