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
      console.log(`TodosDecorStore.list`, TodosDecorStore.list);

      return TodosDecorStore.list;
    }
  },
  methods: {
    addTodo: e => {
      console.log(`todosDecor`, e.target.value);

      TodosDecorStore.addTodo(e);
      e.target.value = "";
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
