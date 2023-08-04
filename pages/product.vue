<script setup>
const config = useRuntimeConfig();
console.log(config.public);
console.log(config.public);
if (process.server) {
  console.log('server token:', config.path);
}

const { data } = await useFetch(
  `${config.public.apiUrl}/api/${config.public.path}/products/all`,
  {}
);

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
  <div>
    <p>
      {{ data }}
    </p>
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
    justify-content: end;
    align-items: center;
  }
}
</style>
