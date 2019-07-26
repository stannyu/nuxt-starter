<template>
  <div>
    <div class="header_links">
      <nuxt-link class="link" to="/">Main page</nuxt-link>
      <nuxt-link class="link" to="/team">Team page</nuxt-link>
    </div>
    <div v-if="currentUser" class="user_container">
      <h3>User with {{ currentUser }} ID page.</h3>

      <img :src="getUser.userpic" alt="">
      <p>{{ getUser.username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  transition: "bounce",
  layout: 'member',
  data() {
    return {
      currentUser: null,
      usersData: [
        {
          username: "John Doe",
          id: 1,
          userpic:
            "https://theinspirationgrid.com/app/uploads/2019/07/illustration-oleg-smirnov-08.jpg"
        },
        {
          username: "John Doe1",
          id: 2,
          userpic:
            "https://theinspirationgrid.com/app/uploads/2019/07/illustration-oleg-smirnov-11.jpg"
        },
        {
          username: "John Doe2",
          id: 3,
          userpic:
            "https://theinspirationgrid.com/app/uploads/2019/07/illustration-oleg-smirnov-05.jpg"
        },
        {
          username: "John Doe4",
          id: 4,
          userpic:
            "https://theinspirationgrid.com/app/uploads/2019/07/illustration-oleg-smirnov-03.jpg"
        }
      ]
    };
  },
  mounted() {
    this.setUserId();
  },
  methods: {
    setUserId() {
      this.currentUser = this.$route.params.id;
    }
  },
  computed: {
    getUser() {
      let userObj = this.usersData[this.currentUser - 1];
      return userObj;
    }
  }
};
</script>

<style scoped lang="scss">
.header_links {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: lightblue;
  box-shadow: 0 0 5px 4px lightcyan;
  .link {
    display: inline-block;
    line-height: 50px;
    margin-left: 40px;
  }
}
  .user_container {
    width: 100%;
    text-align: center;
    padding-top: 100px;
    p {
      font-weight: bold;
      font-size: 32px;
      font-style: italic;
      opacity: .3;
    }
    img {
      max-width: 500px;
      margin-top: 40px;
    }
  }
</style>
