import { Template } from 'meteor/templating';
import { Interests } from '/imports/api/interest/InterestCollection';

Template.Directory_Profile.onCreated(function onCreated() {
  this.subscribe(Interests.getPublicationName());
});

Template.Directory_Profile.helpers({
  interest(interestID) {
    return Interests.findName(interestID);
  },
});
