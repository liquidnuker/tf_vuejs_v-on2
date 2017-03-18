var example1 = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increment: function() {
      return this.counter += 1;
    }
  }
})
