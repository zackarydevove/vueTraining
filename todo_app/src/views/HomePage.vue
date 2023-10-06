<template>
  <div class="p-4 flex flex-col justify-center items-center">
	<div class="p-4 flex">
		<input v-model="newTodo" class="border p-2 mr-2" placeholder="Add todo...">
		<button v-on:click="addTodo" class="bg-blue-500 text-white p-2">Add</button>
	</div>
    <div v-for="(todo, index) in todos" :key="index" class="mt-2">
      <input v-model="todo.title" @blur="editTodo(index)" class="border p-2">
      <button v-on:click="removeTodo(index)" class="bg-red-500 text-white p-2 ml-2">Delete</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import store from '../store';

export default {
  setup() {
    const newTodo = ref('');
    const todos = computed(() => store.state.todos);

    const addTodo = () => {
      if (newTodo.value) {
        store.commit('addTodo', { title: newTodo.value, completed: false });
        newTodo.value = '';
      }
    };

    const removeTodo = (todoIndex) => {
      store.commit('removeTodo', todoIndex);
    };

    const editTodo = (todoIndex) => {
      store.commit('editTodo', { todoIndex, newTitle: todos.value[todoIndex].title });
    };

    return { newTodo, todos, addTodo, removeTodo, editTodo };
  }
}

</script>