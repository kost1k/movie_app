<template>
  <div v-for="film in propsItem" :key="film.id">
    <div class="card_ojb">
      <el-card>
        <div class="cards">
          <img
            :src="
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : './public/img/error.png'
            "
            alt=""
          />
          <div class="card_body">
            <div class="card_title">
              <h2>{{ film.title }} ({{ film.release_date }})</h2>
              <h3>{{ film.overview }}</h3>
            </div>
            <div class="card_btn">
              <el-button
                type="primary"
                v-if="film.watch"
                @click="toggleWatchFilm(film.id)"
                >unWatch</el-button
              >
              <el-button type="primary" v-else @click="toggleWatchFilm(film.id)"
                >Watch</el-button
              >
              <el-button type="danger" @click="deleteFilms(film.id)"
                >Delete</el-button
              >
            </div>
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
  name: "cardFilms",
  props: ["propsItem"],
  setup() {
    const FilmStore = useFavoriteFilms();
    const { toggleWatchFilm, deleteFilms } = toRefs(FilmStore);

    return {
      toggleWatchFilm,
      deleteFilms,
    };
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.card_ojb {
  margin-top: 10px;
}
.card_body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card_btn {
  display: flex;
  justify-content: end;
}

img {
  height: 150px;
  width: 100px;
}
</style>
