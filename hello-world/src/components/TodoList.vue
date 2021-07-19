<template>
  <li>
    <span>{{ todo.text }}</span>
    <button v-on:click="removeTodo($index)">X</button>
  </li>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todo"],
  data: {
    newTodo: "",
    todos: [{ text: "Add some todos" }],
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text: text });
        this.newTodo = "";
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
</style>