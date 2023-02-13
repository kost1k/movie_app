import { defineStore } from "pinia";
import { useFavoriteFilms } from "@/stores/getFavoriteFilms";
const api_key = "ee52fd28bd25dda214a5330a1eea558f";

export const useFilmsStore = defineStore("searchFilms", {
  state() {
    return {
      movie_data: {},
    };
  },
  actions: {
    async getFilm(s) {
      const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${s}\n`;
      const res = await fetch(`${api_url}`);
      const data = await res.json();
      this.movie_data = data.results;
    },
    addToUserMovies(obj) {
      const movieStore = useFavoriteFilms();
      movieStore.favoriteMovie.push({ ...obj, watch: false });
    },
  },
});
