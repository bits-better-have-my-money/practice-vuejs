var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0
    };
  },
  methods: {
    computeSum: function() {
      return parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    computeDifference: function() {
      return parseInt(this.number1) - parseInt(this.number2) - parseInt(this.number3);
    }
  }
});