<template>
  <div v-for="film in favoriteMovie" :key="film.id">
    <el-card>
      <div class="cards">
        <div>
          {{ film.name }}
          <br />
          {{ film.title }}
        </div>
        <el-button @click="deleteFilms(film.id)">Delete</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { useFavoriteFilms } from "@/stores/getFavoriteFilms";
import { toRefs } from "vue";

export default {
  name: "FavoriteFilms",
  setup() {
    const filmStore = useFavoriteFilms();
    const { favoriteMovie, deleteFilms } = toRefs(filmStore);

    return {
      favoriteMovie,
      deleteFilms,
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
}
</style>
