<template>
  <div>
    Product page <br />
    id is {{ id }}
    <nuxt-link to="/">Go Back</nuxt-link>
    {{product}}
  </div>
</template>

<script>
  import { mapState } from 'vuex';
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState({productData: ['product']}),
    product() {
      const productStoredata = this.$store.getters['product/getProductsData'];

      return productStoredata.find(el => el.id === this.id);
      // return this.productData.storedata.find(el => el.id === this.id);
    }
  }
};
</script>

<style scoped></style>
