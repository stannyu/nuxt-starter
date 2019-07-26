<template>
  <div class="team_main_container">
    <div class="header_links">
      <nuxt-link class="link" to="/">Main Page</nuxt-link>
    </div>
    <h2>Team index page.</h2>

    <ul class="user_cards_container">
      <li v-for="user in usersData" :key="user.id" class="user_card">
        <nuxt-link :to="/team/ + user.id">
          <img class="photo_wrapper" :src="user.userpic" alt="" />
          <p>{{ user.username }}</p>
        </nuxt-link>
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
.user_cards_container {
  list-style: none;
  .user_card {
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 300px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
    margin-right: 20px;
    display: inline-block;
    .photo_wrapper {
      width: 100%;
    }
    p {
      position: absolute;
      bottom: 20px;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
