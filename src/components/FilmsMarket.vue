<template>
  <div class="btn_div">
    <el-input
      @keyup.enter="
        () => {
          getFilm(searchInput)((searchInput = ''));
        }
      "
      v-model="searchInput"
      placeholder="Please input"
    />
  </div>
  <div class="container_films">
    <el-card
      v-for="(item, idx) in movie_data"
      :key="idx"
      class="card"
      shadow="always"
      :body-class="{ padding: '0px' }"
    >
      <div style="padding: 10px" class="body">
        <img
          :src="
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : './public/img/error.png'
          "
          alt=""
        />
        <div class="title">
          <div style="flex: max-content">
            {{ item.title }}
            <br />
            {{ item.overview }}
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div>Rating: {{ item.vote_average }}</div>
            <div>Release date: {{ item.release_date }}</div>
            <el-button>Watch</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { useFilmsStore } from "@/stores/getFilms";
import { ref, toRefs } from "vue";

export default {
  setup() {
    const filmsStore = useFilmsStore();
    const { movie_data, getFilm } = toRefs(filmsStore);

    const searchInput = ref("");

    return {
      movie_data,
      getFilm,
      searchInput,
    };
  },
};
</script>

<style scoped>
img {
  height: 300px;
  width: 200px;
}

.btn_div {
  margin: 20px auto;
}

.body {
  display: flex;
  gap: 20px;
}

.container_films {
  width: 700px;
  margin: auto;
}

.card {
  margin-bottom: 20px;
}

.title {
  display: flex;
  flex-direction: column;
}
</style>
