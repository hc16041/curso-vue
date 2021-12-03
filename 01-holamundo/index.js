const app = Vue.createApp({
  data() {
    return {
      user: {
        title: 'hola mundo',
        name: 'Fernando',
        age: 250,
        movies: ['batman', 'superman', 'spiderman', 'guerra mundial z'],
        url: 'http://google.com',
        picture:
          'https://media.istockphoto.com/photos/beautiful-travel-or-tourism-style-look-down-aerial-of-pedestrian-foot-picture-id1287690457',
        classValue: 'error',
      },
    };
  },
});
