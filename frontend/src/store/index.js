import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import {
  fetchMovieList
} from '../api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    movies: []
  },
  getters: {
    // fetchMovieList

  },
  mutations: {
    SET_MOVIES (state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    FETCH_MOVIE (context) {
      fetchMovieList()
        .then(res => {
          //   this.movies = res.data;
          context.commit('SET_MOVIES', res.data);
        })
        .catch(err => console.log(err));
    }
  }
});
