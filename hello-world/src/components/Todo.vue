<template>
  <div id="app">
    <!-- <ul>
      <li v-for="todo in todos" v-bind:key="todo.text">
        {{ todo.text }}
      </li>
    </ul> -->

    <input v-model="newTodo" v-on:keyup.enter="addTodo" />
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.key">
        <span>{{ todo.text }}</span>
        <button v-on:click="removeTodo($index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
//import Vue from 'vue'
export default {
  props: ["todoText"],
  data: function () {
    return {
      todos: [
        { text: "Add some todos", key: 0 }
      ],
    };
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
};
</script>
