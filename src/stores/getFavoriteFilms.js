import { defineStore } from "pinia";

export const useFavoriteFilms = defineStore("favoriteFilms", {
  state() {
    return {
      favoriteMovie: [
        {
          name: "Batman",
          title: "this batman",
          id: 1,
        },
        {
          name: "piderman",
          title: "this spiderman",
          id: 2,
        },
        {
          name: "Thor",
          title: "this thor",
          id: 3,
        },
      ],
    };
  },
  actions: {
    deleteFilms(id) {
      this.favoriteMovie = this.favoriteMovie.filter((arr) => arr.id !== id);
    },
    watchFilm(id) {
      this.favoriteMovie = this.favoriteMovie.map((arr) => {
        if (arr.id === id) {
          if (arr.watch === true) {
            return { ...arr, watch: false };
          } else {
            return { ...arr, watch: true };
          }
        } else {
          return arr;
        }
      });
    },
  },
});
