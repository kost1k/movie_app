import { defineStore } from "pinia";

export const useFavoriteFilms = defineStore("favoriteFilms", {
  state() {
    return {
      favoriteMovie: [
        {
          name: "Batman",
          title: "sukablyat",
          id: 1,
        },
        {
          name: "piderman",
          title: "xyita",
          id: 2,
        },
      ],
    };
  },
  actions: {
    deleteFilms(id) {
      this.favoriteMovie = this.favoriteMovie.filter((arr) => arr.id !== id);
    },
  },
});
