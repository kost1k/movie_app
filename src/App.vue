<template>
  <el-container>
    <el-header>
      <el-menu
        class="nav_bar"
        :default-active="selected"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item index="favorite" :route="{ name: 'favorite' }">
          Favorite Films
        </el-menu-item>
        <el-menu-item index="market" :route="{ name: 'market' }">
          Search
        </el-menu-item>
        <el-sub-menu index="switchTheme">
          <template #title>Theme</template>
          <div class="theme_switch">
            <el-switch
              v-model="darkTheme"
              active-text="Dark"
              inactive-text="White"
            ></el-switch>
          </div>
        </el-sub-menu>
      </el-menu>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
      darkTheme: false,
    };
  },
  watch: {
    $route(to) {
      this.selected = to.name;
    },
    darkTheme(to) {
      if (to) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", JSON.stringify(to));
    },
  },
  created() {
    this.darkTheme = JSON.parse(localStorage.getItem("theme"));
  },
};
</script>

<style scoped>
.nav_bar {
  justify-content: center;
}
.theme_switch {
  display: flex;
  justify-content: center;
}
</style>
