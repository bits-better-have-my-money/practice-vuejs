/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      todos: []
    };
  },
  methods: {
    loadTodos: function() {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        this.todos = response.data;
        console.log(response.data);
      });
    }
  }
});
