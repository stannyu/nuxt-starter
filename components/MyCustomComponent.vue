<template>
  <div class="root_block">
    <span>Message is: {{ msg }}</span>
    <p>The count is: </p><h2>{{count}}</h2>
    <button @click="increaseCounter">Increase</button>
    <button @click="decreaseCounter">Decrease</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Message from data",
      count: 0
    };
  },
  created() {
    console.log("VueJS component was created!");
  },
  methods: {
    increaseCounter() {
      if(this.count + 1 === 5 || this.count === 5) {
        this.count = 5;
        return;
      }
      this.count = this.count + 1;
    },
    decreaseCounter() {
      if(this.count - 1 === 0 || this.count === 0) {
        this.count = 0;
        return;
      }
      this.count = this.count - 1;
    }
  }
};
</script>

<style scoped lang="scss">
$sass_clr: yellow;

.root_block {
  width: 100%;
  height: 100px;
  background: darkcyan;
  margin-top: 200px;
  border-radius: 20px;
  span {
    color: $sass_clr;
    line-height: 100px;
  }
}
</style>
