<template>
  <div>
    empty sceleton 4 DotCom
    <p class="color_class_global">Lorem ipsum dolor.</p>
    <p class="color_class_theme">Lorem ipsum dolor.</p>
    <base-component></base-component>

    <hr />

    <div class="centered_container">
      <md-card style="width: 300px;">
        <md-card-header>
          <div class="md-title">Card without hover effect</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
          accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
    </div>

    <hr />

    <md-button class="md-raised md-primary" @click="onClickHandler">Primary</md-button>

    <hr />

    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>Bottom Start</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

    <hr />
  </div>
</template>

<script>
import BaseComponent from '@/components/BaseComponent';
import 'nuxt-vue-material';
export default {
  components: {
    BaseComponent
  },
  created() {
    console.log();
    if (process.client) {
      console.log('Client triggered');
    }
    if (process.server) {
      console.log('Server triggered');
    }
  },
  methods: {
    foo() {},
    onClickHandler() {
      console.log('Logging message');
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 40px 0;
}
.centered_container {
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
}
</style>
