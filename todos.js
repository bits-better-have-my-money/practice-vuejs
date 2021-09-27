/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      todos: [
        {
          id: 1, 
          title: "walk the dog", 
          completed: false,
          userId: 1
        },
        {
          id: 2, 
          title: "brush my hair", 
          completed: false,
          userId: 1
        },
        {
          id: 3, 
          title: "clean the dishes", 
          completed: false,
          userId: 1
        },
      ]
    };
  },
});
