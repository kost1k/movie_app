<template>
  <div class="watched_movies">
    <h2>Watched movies (Count: {{ watchedMovies.length }})</h2>
    <CardFilms :props-item="watchedMovies" />
  </div>
  <div class="all_movies">
    <h2>All Movies (Count: {{ favoriteMovie.length }})</h2>
    <CardFilms :props-item="favoriteMovie" />
  </div>
</template>

<script>
import { useFavoriteFilms } from "@/stores/getFavoriteFilms";
import { toRefs } from "vue";
import CardFilms from "@/components/FavoriteFilms/FavoriteFilmsItems.vue";

export default {
  name: "FavoriteFilms",
  components: { CardFilms },
  setup() {
    const filmStore = useFavoriteFilms();
    const { favoriteMovie, deleteFilms, toggleWatchFilm, watchedMovies } =
      toRefs(filmStore);

    return {
      favoriteMovie,
      deleteFilms,
      toggleWatchFilm: toggleWatchFilm,
      watchedMovies,
    };
  },
};
</script>

<style scoped>
.all_movies {
  margin-top: 20px;
}

img {
  height: 300px;
  width: 200px;
}
</style>
