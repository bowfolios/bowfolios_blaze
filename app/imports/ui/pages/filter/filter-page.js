import { Template } from 'meteor/templating';

Template.Filter_Page.helpers({
  profiles() {
    return [
      {
        name: 'Lee Altenberg',
        picture: 'altenberg.jpg',
        title: 'Professor, ICS',
        description: 'Evolutionary Computation',
        interests: ['Algorithms'],
      },
      {
        name: 'Kyungim Baek',
        picture: 'baek.jpg',
        title: 'Professor, ICS',
        description: 'Computer Vision',
        interests: ['Algorithms'],
      },
    ];
  },
});
