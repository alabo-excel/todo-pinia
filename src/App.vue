<template>
  <main>
    <h1>Hello {{ todoStore.name }}</h1>
    <div class="add-todo">
      <input v-model="newTodo" type="text" placeholder="Enter a new Todo" />
      <button @click="handelSubmit">Submit</button>
    </div>
    <div class="todos">
      <div class="single" v-for="(todo, index) in todoStore.todos" :key="index">
        <Todo :todo="todo" />
      </div>
    </div>
    <!-- <div class="todos">
      <div
        class="single"
        v-for="(todo, index) in todoStore.completed"
        :key="index"
      >
        <Todo :todo="todo" />
      </div>
    </div> -->
  </main>
</template>

<script>
import { useTodoStore } from "./stores/TodoStore";
import Todo from "./components/Todo.vue";
import { ref } from "vue";
export default {
  components: {
    Todo,
  },
  setup() {
    const todoStore = useTodoStore();
    const newTodo = ref("");

    const handelSubmit = () => {
      if (newTodo.value.length > 0) {
        todoStore.addTodo({
          title: newTodo.value,
          completed: false,
          inProgress: false,
          id: Math.floor(Math.random() * 1000),
        });
        newTodo.value = "";
      }
    };
    return { todoStore, newTodo, handelSubmit };
  },
};
</script>