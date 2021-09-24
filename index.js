/* global Vue */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from Vue JS!",
      name: "Cheddar",
      showInfo: false
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "Woah, this is cool!";
    }
  }
});