<script setup>
const config = useRuntimeConfig();
console.log(config.public.apiUrl);
console.log(config.public.path);
const productList = ref([]);

// 使用 useFetch 發送 GET 請求到指定的 API 端點（'/api/items/:id'）
const { data: products } = await useFetch(
  `${config.public.apiUrl}/api/${config.public.path}/products/all`
);
console.log(products.value);
productList.value = products.value.products;

// const { data } = await useFetch(
//   `${config.public.apiUrl}/api/${config.public.path}/products/all`,
//   {}
// );

// const { data } = await useAsyncData('userInfo', () => $fetch('https://api.nuxtjs.dev/mountains'));
// const refreshGetData = () => {
//   refreshNuxtData('userInfo');
//   console.log(refreshGetData);
// };
// getProductList() {
//       this.$http
//         .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
//         .then((res) => {
//           this.productList = res.data.products.reverse();
//           this.isLoading = false;
//         })
//         .catch((error) => {
//           Toast.fire({
//             icon: "error",
//             title: `${error.response.data.message}`,
//           });
//         });
//     }
</script>

<template>
  <div class="container">
    <ul class="row gy-9">
      <li v-for="product in productList" :key="product.id" class="col-6 col-md-4">
        <h2 class="fs-2xl">
          {{ product.title }}
        </h2>
        <img :src="product.imageUrl" alt="" />
      </li>
    </ul>
    <button type="button" @click="refreshGetData">refresh</button>
    <h1>1233</h1>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/all.scss';
.title {
  position: relative;
  &-sub {
    position: relative;
    line-height: 0.63;
    padding-right: 6.2vw;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: $secondary;
    }
  }
  &-main {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 8vw;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
