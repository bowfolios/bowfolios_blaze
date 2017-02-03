import { Meteor } from 'meteor/meteor';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Interests } from '/imports/api/interest/InterestCollection';

/* global Assets */

Meteor.startup(() => {
  /** Only initialize database if it's empty. */
  const totalDocuments = Profiles.count() + Interests.count();
  if (totalDocuments === 0) {
    const fileName = Meteor.settings.public.initialDatabaseFileName;
    console.log(`Restoring database from file ${fileName}.`);
    const restoreJSON = JSON.parse(Assets.getText(fileName));
  }
});
