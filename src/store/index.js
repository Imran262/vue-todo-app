import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let timer;

export default new Vuex.Store({
  state: {
    completed: true,
    ttodos: [],
    todos: [
      {
        id: 1,
        title: "One",
        complete: true,
      },
      {
        id: 2,
        title: "Two",
        complete: true,
      },
      {
        id: 3,
        title: "three",
        complete: false,
      },
    ],
  },
  getters: {
    allTTodos: (state) => state.ttodos,
    allTodos: (state) => state.todos,
    completed: (state) => state.completed,
  },
  actions: {
    changeCompleted({ commit }) {
      commit("change_complete");
    },
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.isLogin = false;
      console.log(`result`, result);
    },
    async login(context, payload) {
      return context.dispatch('auth', {
        ...payload
      });
    },
    async auth(context, payload) {
      console.log("Payload", payload);
      // console.log("getId", payload.getId());
      // console.log("getBaseProfile", payload.getBasicProfile().getImageUrl());
      // this.imageUrl = payload.getBasicProfile().getImageUrl()
      // console.log("getAuthResponse", payload.getAuthResponse());
      // console.log(
      //     "getAuthResponse$G",
      //     this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      // );
      // let isLogin = this.$gAuth.isAuthorized;
      // const expiresIn = +responseData.expiresIn * 1000;
      // // const expiresIn = 5000;
      // const expirationDate = new Date().getTime() + expiresIn;

      // localStorage.setItem('token', responseData.idToken);
      // localStorage.setItem('userId', payload.getId());
      // localStorage.setItem('LoggedStatus', isLogin);
      // localStorage.setItem('tokenExpiration', expirationDate);

      // timer = setTimeout(function() {
      //   context.dispatch('autoLogout');
      // }, expiresIn);

      // context.commit('setUser', {
      //   token: responseData.idToken,
      //   userId: responseData.localId
      // });
    },
    tryLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(function() {
        context.dispatch('autoLogout');
      }, expiresIn);

      if (token && userId) {
        context.commit('setUser', {
          token: token,
          userId: userId
        });
      }
    },
    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null
      });
    },
    autoLogout(context) {
      context.dispatch('logout');
      context.commit('setAutoLogout');
    }
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      state.ttodos = state.todos;
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
      state.ttodos = state.todos;
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    },
    change_complete(state) {
      state.ttodos = state.todos;
      state.completed = state.completed == true ? false : true;
      state.ttodos = state.ttodos.filter((t) => t.complete == state.completed);
    },
  },
  modules: {},
});
