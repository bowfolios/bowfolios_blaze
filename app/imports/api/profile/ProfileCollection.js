import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { Interests } from '/imports/api/interest/InterestCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

/** @module Profile */

/**
 * Profiles provide portfolio data for a user.
 * @extends module:Base~BaseCollection
 */
class ProfileCollection extends BaseCollection {

  /**
   * Creates the Profile collection.
   */
  constructor() {
    super('Profile', new SimpleSchema({
      firstName: { type: String },
      lastName: { type: String },
      email: { type: SimpleSchema.RegEx.Email },
      bio: { type: String },
      interestIDs: { type: [SimpleSchema.RegEx.Id] },
      title: { type: String },
      picture: { type: SimpleSchema.RegEx.Url, optional: true },
      // Remainder are optional
      github: { type: SimpleSchema.RegEx.Url, optional: true },
      facebook: { type: SimpleSchema.RegEx.Url, optional: true },
      instagram: { type: SimpleSchema.RegEx.Url, optional: true },
    }));
  }

  /**
   * Defines a new Profile.
   * @example
   * Profiles.define({ firstName: 'Philip',
   *                   lastName: 'Johnson',
   *                   email: 'johnson@hawaii.edu',
   *                   bio: 'I have been a professor of computer science at UH since 1990.',
   *                   interests: ['application-development', 'software-engineering', 'databases'],
   *                   title: 'Professor of Information and Computer Sciences',
   *                   picture: 'http://philipmjohnson.org/headshot.jpg',
   *                   github: 'https://github.com/philipmjohnson',
   *                   facebook: 'https://facebook.com/philipmjohnson',
   *                   instagram: 'https://instagram.com/philipmjohnson' });
   * @param { Object } description Object with required keys: firstName, lastName, email, bio, interests, title, picture
   * Optional keys are: github, facebook, instagram.
   * Email must be unique for all users.
   * Interests is an array of defined interest names.
   * @throws { Meteor.Error } If a user with the supplied email already exists, or if email is not an email, or
   * if github, facebook, and instagram are not URLs.
   * @returns The newly created docID.
   */
  define({ firstName, lastName, email, bio, interests, picture, title, github, facebook, instagram }) {
    // make sure required fields are OK.
    const checkPattern = { firstName: String, lastName: String, email: String, bio: String, picture: String,
      title: String };
    check({ firstName, lastName, email, bio, picture, title }, checkPattern);

    if (this.find({ email }).count() > 0) {
      throw new Meteor.Error(`${email} is previously defined in another Profile`);
    }

    // Get Interests, throw error if any of them are not found.
    const interestIDs = Interests.findIDs(interests);
    return this._collection.insert({ firstName, lastName, email, bio, interestIDs, picture, title, github,
      facebook, instagram });
  }

  /**
   * Returns an object representing the Profile docID in a format acceptable to define().
   * @param docID The docID of a Profile.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const firstName = doc.firstName;
    const lastName = doc.lastName;
    const email = doc.email;
    const bio = doc.bio;
    const interests = Interests.findNames(doc.interestIDs);
    const picture = doc.picture;
    const title = doc.title;
    const github = doc.github;
    const facebook = doc.facebook;
    const instagram = doc.instagram;
    return { firstName, lastName, email, bio, interests, picture, title, github, facebook, instagram };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Profiles = new ProfileCollection();
