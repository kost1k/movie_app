<template>
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
</template>

<script>
import { useFilmsStore } from "@/stores/getFilms";
import { toRefs } from "vue";

export default {
  name: "MarketItems",
  setup() {
    const FilmStore = useFilmsStore();
    const { movie_data } = toRefs(FilmStore);

    return {
      movie_data,
    };
  },
};
</script>

<style scoped>
.body {
  display: flex;
  gap: 20px;
}

.card {
  margin-bottom: 20px;
}

.title {
  display: flex;
  flex-direction: column;
}

img {
  height: 300px;
  width: 200px;
}
</style>
