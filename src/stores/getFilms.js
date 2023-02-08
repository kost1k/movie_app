import { defineStore } from "pinia";
const api_key = "ee52fd28bd25dda214a5330a1eea558f";

export const useFilmsStore = defineStore("counter", {
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
  },
});
