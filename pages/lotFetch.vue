<script setup>
import axios from 'axios';

const config = useRuntimeConfig();
console.log(config.public.apiUrl);
console.log(config.public.path);
// 這樣會一個一個執行會阻塞
// const { data: orgsData } = await useFetch(`https://api.github.com/orgs/nuxt`);
// const { data: repoData } = await useFetch(`https://api.github.com/orgs/nuxt/repos`);

// const [{ data: orgsData }, { data: reposData }] = await Promise.all([
//   useFetch(`https://api.github.com/orgs/nuxt`),
//   useFetch(`https://api.github.com/orgs/nuxt/repos`)
// ]);

// axios 打api
const { data } = await useAsyncData('products', async () => {
  const res = await axios.get(`${config.public.apiUrl}/api/${config.public.path}/products/all`);
  console.log(res);
  return res.data;
});
</script>
<template>
  <div>
    <div>{{ data }}</div>
    <!-- <div>{{ orgsData }}</div>
    <div>{{ reposData }}</div> -->
  </div>
</template>
<style lang="scss" scoped></style>
