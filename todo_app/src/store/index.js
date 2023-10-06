import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
		todos: []
    };
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoIndex) {
      state.todos.splice(todoIndex, 1);
    },
    editTodo(state, { todoIndex, newTitle }) {
      state.todos[todoIndex].title = newTitle;
    }
  },
  actions: {
  },
  getters: {
  }
});

export default store;
