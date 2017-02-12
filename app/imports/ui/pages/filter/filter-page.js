import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Interests } from '/imports/api/interest/InterestCollection';

/* eslint-disable no-param-reassign */

const profileIDs = 'profileIDs';

Template.Filter_Page.onCreated(function onCreated() {
  this.subscribe(Interests.getPublicationName());
  this.subscribe(Profiles.getPublicationName());
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(profileIDs, undefined);
});

Template.Filter_Page.helpers({
  profiles() {
    // Initialize the profiles to display to all of the existing profiles.
    if (!Template.instance().messageFlags.get(profileIDs)) {
      Template.instance().messageFlags.set(profileIDs, _.map(Profiles.findAll(), profile => profile._id));
    }

    return _.map(Template.instance().messageFlags.get(profileIDs), profileID => Profiles.findDoc(profileID));
  },
});
