<template>
  <div class="team_main_container">
    <div class="header_links">
      <nuxt-link class="link" to="/">Main Page</nuxt-link>
    </div>
    <h2>Team index page.</h2>

    <ul>
      <li v-for="user in usersData" :key="user.id">
        <nuxt-link :to="/team/ + user.id">User {{ user.id }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersData: [
        {
          username: "John Doe",
          id: 1
        },
        {
          username: "John Doe1",
          id: 2
        },
        {
          username: "John Doe2",
          id: 3
        },
        {
          username: "John Doe4",
          id: 4
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.team_main_container {
  padding-top: 100px;
  .header_links {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: lightblue;
    box-shadow: 0 0 5px 4px lightcyan;
    .link {
      line-height: 50px;
      margin-left: 40px;
    }
  }
  h2 {
    text-align: center;
    margin-bottom: 100px;
  }
}
ul {
  list-style: none;
}
</style>
