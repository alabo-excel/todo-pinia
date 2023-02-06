<template>
  <div class="todo">
    <div class="close" @click="todoStore.deleteTodo(todo.id)">
      <img class="icons" src="../assets/cancel.svg" alt="" />
    </div>
    <div>
      <h3>{{ todo.title }}</h3>
    </div>
    <div class="todo">
      <div @click="todoStore.todoCompleted(todo.id)" :class="todo.completed === true ? 'check' : ''">
        <img class="icons" src="../assets/check.svg" alt="" />
      </div>
      <div :class="todo.inProgress === true ? 'star' : ''">
        <img class="icons" src="../assets/star.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from "../stores/TodoStore";

export default {
  props: ["todo"],

  setup() {
    const todoStore = useTodoStore();

   
    return { todoStore };
  },
};
</script>