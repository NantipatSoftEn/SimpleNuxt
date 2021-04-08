<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
    </li>
  </ul>
</template>

<script>
import Store, { TodosDecorStore } from "@/store";

export default {
  computed: {
    todos: () => {
      return TodosDecorStore.list;
    }
  },
  methods: {
    addTodo: e => {
      TodosDecorStore.addTodo(e);
      e.target.value = "";
    },
    toggle: todo => {
      TodosDecorStore.toggle(todo);
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
