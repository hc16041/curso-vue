const app = Vue.createApp({
  data() {
    return {
      title: 'Contador App',
      count: 0,
    };
  },
  methods: {
    modCount(instruction = 'add', limit) {
      if (instruction === 'dis') this.count -= limit;
      else this.count += limit;
    },
  },
});
