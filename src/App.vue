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
  <nav>
    <el-menu :default-active="selected" mode="horizontal" :router="true">
      <el-menu-item index="home" :route="{ name: 'home' }">
        Favorite Films
      </el-menu-item>
      <el-menu-item index="about" :route="{ name: 'about' }">
        Search
      </el-menu-item>
    </el-menu>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}
</style>
