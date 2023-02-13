import { defineStore } from "pinia";

export const useFavoriteFilms = defineStore("favoriteFilms", {
  state() {
    return {
      favoriteMovie: [],
    };
  },
  getters: {
    watchedMovies() {
      return this.favoriteMovie.filter((arr) => arr.watch);
    },
  },
  actions: {
    deleteFilms(id) {
      this.favoriteMovie = this.favoriteMovie.filter((arr) => arr.id !== id);
    },
    toggleWatchFilm(id) {
      const idx = this.favoriteMovie.findIndex((el) => el.id === id);
      this.favoriteMovie[idx].watch = !this.favoriteMovie[idx].watch;
    },
  },
});
