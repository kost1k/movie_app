<script>
export default {
  data() {
    return {
      selected: "home",
    };
  },
  watch: {
    $route(to) {
      this.selected = to.name;
    },
  },
};
</script>

<template>
  <div class="nav">
    <el-menu :default-active="selected" mode="horizontal" :router="true">
      <el-menu-item index="home" :route="{ name: 'home' }">
        HomePage
      </el-menu-item>
      <el-menu-item index="about" :route="{ name: 'about' }">
        About
      </el-menu-item>
    </el-menu>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
