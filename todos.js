/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      todos: [],
      title: ""
    };
  },
  created: function() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      this.todos = response.data;
      console.log(response.data);
    });
  },
  methods: {
    addTodo: function() {
      // send a post request using axios to the todo api and then add the new todo object to the todos array
      var params = {
        userId: 1,
        title: this.title,
        completed: false
      };
      axios.post("https://jsonplaceholder.typicode.com/todos", params)
      .then(response => {
        console.log(response.data);
        this.todos.push(response.data);
        this.title = "";
      })
    }
  }
});