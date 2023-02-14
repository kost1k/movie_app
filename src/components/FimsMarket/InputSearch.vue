<template>
  <el-input
    v-model="searchInput"
    placeholder="Please input"
    @keyup.enter="getFilm(searchInput)"
  ></el-input>
</template>

<script>
import { useFilmsMarket } from "@/stores/getFilmsMarket";
import { toRefs } from "vue";

export default {
  name: "InputSearch",
  setup() {
    const filmsStore = useFilmsMarket();
    const { movie_data, getFilm } = toRefs(filmsStore);

    return {
      movie_data,
      getFilm,
    };
  },
  data() {
    return {
      searchInput: "",
    };
  },
  watch: {
    movie_data() {
      this.searchInput = "";
    },
  },
};
</script>

<style scoped></style>
