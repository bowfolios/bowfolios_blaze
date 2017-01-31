import { Template } from 'meteor/templating';

Template.Interests_Form_Field.onRendered(function onRendered() {
  this.$('.dropdown').dropdown();
});

