<template>
  <div v-for="film in favoriteMovie" :key="film.id">
    <div class="card_ojb">
      <el-card>
        <div class="cards">
          <div>
            {{ film.name }}
            <br />
            {{ film.title }}
          </div>
          <div>
            <el-button v-if="film.watch" @click="watchFilm(film.id)"
              >unWatch</el-button
            >
            <el-button v-else @click="watchFilm(film.id)">Watch</el-button>
            <el-button @click="deleteFilms(film.id)">Delete</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { useFavoriteFilms } from "@/stores/getFavoriteFilms";
import { toRefs } from "vue";

export default {
  name: "FavoriteFilms",
  setup() {
    const filmStore = useFavoriteFilms();
    const { favoriteMovie, deleteFilms, watchFilm } = toRefs(filmStore);

    return {
      favoriteMovie,
      deleteFilms,
      watchFilm,
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
}
.card_ojb {
  margin-top: 10px;
}
</style>
