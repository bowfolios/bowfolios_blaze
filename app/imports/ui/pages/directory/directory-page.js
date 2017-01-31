import { Template } from 'meteor/templating';

Template.Directory_Page.helpers({
  profiles() {
    return [
      {
        name: 'Lee Altenberg',
        picture: 'altenberg.jpg',
        title: 'Professor, ICS',
        description: 'Evolutionary Computation'
      },
      { name: 'Kyungim Baek', picture: 'baek.jpg', title: 'Professor, ICS', description: 'Computer Vision' },
      { name: 'Edo Biagioni', picture: 'biagioni.jpg', title: 'Professor, ICS', description: 'Networking' },
      { name: 'Kim Binsted', picture: 'binsted.jpg', title: 'Professor, ICS', description: 'Astrobiology' },
      {
        name: 'Henri Casanova',
        picture: 'casanova.jpg',
        title: 'Professor, ICS',
        description: 'High performance computing',
      },
      { name: 'David Chin', picture: 'chin.jpg', title: 'Professor, ICS', description: 'Artificial Intelligence' },
      {
        name: 'Martha Crosby',
        picture: 'crosby.jpg',
        title: 'Professor, ICS',
        description: 'Human-Computer Interaction',
      },
      { name: 'Rich Gazan', picture: 'gazan.jpg', title: 'Professor, ICS', description: 'Social Informatics' },
      { name: 'Stephen Itoga', picture: 'itoga.jpg', title: 'Professor, ICS', description: 'Computer Graphics' },
      { name: 'Philip Johnson', picture: 'johnson.jpg', title: 'Professor, ICS', description: 'Software Engineering' },
      { name: 'Gerald Lau', picture: 'lau.jpg', title: 'Professor, ICS', description: 'Educational Advising' },
      { name: 'Jason Leigh', picture: 'leigh.jpg', title: 'Professor, ICS', description: 'Visualization' },
      { name: 'Depeng Li', picture: 'li.jpg', title: 'Professor, ICS', description: 'Security' },
      { name: 'Lipyeow Lim', picture: 'lim.jpg', title: 'Professor, ICS', description: 'Data mining' },
    ];
  },
});
