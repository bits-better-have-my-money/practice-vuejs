/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from Vue JS!",
      name: "Cheddar",
      showInfo: false,
      fruits: ["apple", "orange", "banana"],
      newFruit: ""
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Woah, this is cool!";
    },
    addNewFruit: function() {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
});