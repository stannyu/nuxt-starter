<template>
  <div>
    <nuxt-link to="/">Main page</nuxt-link>
    <nuxt-link to="/team">Team page</nuxt-link>
    <div v-if="currentUser">
      <h3>User with {{currentUser}} ID page.</h3>
    </div>
  </div>
</template>

<script>
  export default {
    transition: 'bounce',
    data() {
      return {
        currentUser: null
      }
    },
    mounted() {
      this.setUserId()
    },
    methods: {
      setUserId() {
        this.currentUser = this.$route.params.id;
      }
    }
  }
</script>

<style scoped>

</style>
