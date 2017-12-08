var app = new Vue({
  el: '#app',
  data () {
    return {
      selectedDate: {
        start: '',
        end: ''
      }
    }
  },
  methods: {
    onDateSelected: function (daterange) {
      this.selectedDate = daterange
    }
  },
  components: {
    VueRangedatePicker
  }
})
