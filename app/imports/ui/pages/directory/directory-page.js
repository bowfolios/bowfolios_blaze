import { Template } from 'meteor/templating';

Template.Directory_Page.helpers({
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
      {
        name: 'Edo Biagioni',
        picture: 'biagioni.jpg',
        title: 'Professor, ICS',
        description: 'Networking',
        interests: ['Mobile networks', 'Sailing'],
      },
      {
        name: 'Kim Binsted',
        picture: 'binsted.jpg',
        title: 'Professor, ICS',
        description: 'Astrobiology',
        interests: ['Mars', 'Imu cooking'],
      },
      {
        name: 'Henri Casanova',
        picture: 'casanova.jpg',
        title: 'Professor, ICS',
        description: 'High performance computing',
        interests: ['Scuba', 'Photography'],
      },
      {
        name: 'David Chin',
        picture: 'chin.jpg',
        title: 'Professor, ICS',
        description: 'Artificial Intelligence',
        interests: ['Wind Surfing'],
      },
      {
        name: 'Martha Crosby',
        picture: 'crosby.jpg',
        title: 'Professor, ICS',
        description: 'Human-Computer Interaction',
        interests: ['Psychology'],
      },
      {
        name: 'Rich Gazan',
        picture: 'gazan.jpg',
        title: 'Professor, ICS',
        description: 'Social Informatics',
        interests: ['Motorcycling'],
      },
      {
        name: 'Stephen Itoga',
        picture: 'itoga.jpg',
        title: 'Professor, ICS',
        description: 'Computer Graphics',
        interests: ['Accreditation'],
      },
      {
        name: 'Philip Johnson',
        picture: 'johnson.jpg',
        title: 'Professor, ICS',
        description: 'Software Engineering',
        interests: ['Paddling', 'Crossfit'],
      },
      {
        name: 'Gerald Lau',
        picture: 'lau.jpg',
        title: 'Professor, ICS',
        description: 'Educational Advising',
        interests: ['Cybersecurity'],
      },
      {
        name: 'Jason Leigh',
        picture: 'leigh.jpg',
        title: 'Professor, ICS',
        description: 'Visualization',
        interests: ['Surfing'],
      },
      {
        name: 'Depeng Li',
        picture: 'li.jpg',
        title: 'Professor, ICS',
        description: 'Security',
        interests: ['Networks'],
      },
      {
        name: 'Lipyeow Lim',
        picture: 'lim.jpg',
        title: 'Professor, ICS',
        description: 'Data mining',
        interests: ['Martial Arts'],
      },
    ];
  },
});
