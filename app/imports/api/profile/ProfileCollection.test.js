/* eslint prefer-arrow-callback: "off", no-unused-expressions: "off" */
/* eslint-env mocha */

import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Interests } from '/imports/api/interest/InterestCollection';
import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import { removeAllEntities } from '/imports/api/base/BaseUtilities';

if (Meteor.isServer) {
  describe('ProfileCollection', function testSuite() {
    const interestName1 = 'Software Engineering';
    const interestDescription1 = 'Tools for software development';
    const interestName2 = 'Software Engineering';
    const interestDescription2 = 'Tools for software development';
    const firstName = 'Philip';
    const lastName = 'Johnson';
    const username = 'johnson';
    const bio = 'I have been a professor of computer science at UH since 1990.';
    const interests = [interestName1];
    const picture = 'http://philipmjohnson.org/headshot.jpg';
    const title = 'Professor Computer Science';
    const github = 'http://github.com/philipjohnson';
    const facebook = 'http://github.com/philipjohnson';
    const instagram = 'http://github.com/philipjohnson';
    const defineObject = { firstName, lastName, username, bio, interests, picture, title, github, facebook, instagram };

    before(function setup() {
      removeAllEntities();
      // Define a sample interest.
      Interests.define({ name: interestName1, description: interestDescription1 });
    });

    after(function teardown() {
      removeAllEntities();
    });

    it('#define, #isDefined, #removeIt, #dumpOne, #restoreOne', function test() {
      let docID = Profiles.define(defineObject);
      expect(Profiles.isDefined(docID)).to.be.true;
      // Check that fields are available
      const doc = Profiles.findDoc(docID);
      expect(doc.firstName).to.equal(firstName);
      expect(doc.lastName).to.equal(lastName);
      expect(doc.username).to.equal(username);
      expect(doc.bio).to.equal(bio);
      expect(doc.interests[0]).to.equal(interestName1);
      expect(doc.picture).to.equal(picture);
      expect(doc.title).to.equal(title);
      expect(doc.github).to.equal(github);
      expect(doc.facebook).to.equal(facebook);
      expect(doc.instagram).to.equal(instagram);
      // Check that multiple definitions with the same email address fail
      expect(function foo() { Profiles.define(defineObject); }).to.throw(Error);
      // Check that we can dump and restore a Profile.
      const dumpObject = Profiles.dumpOne(docID);
      Profiles.removeIt(docID);
      expect(Profiles.isDefined(docID)).to.be.false;
      docID = Profiles.restoreOne(dumpObject);
      expect(Profiles.isDefined(docID)).to.be.true;
      Profiles.removeIt(docID);
    });

    it('#define (illegal interest)', function test() {
      const illegalInterests = ['foo'];
      const username2 = 'philipmjohnson';
      const defineObject2 = { firstName, lastName, username2, bio, illegalInterests, picture, title,
        github, facebook, instagram };
      expect(function foo() { Profiles.define(defineObject2); }).to.throw(Error);
    });

    it('#define (duplicate interest)', function test() {
      const interests = [interestName1, interestName2];
      const username3 = 'philipmjohnson';
      const defineObject3 = { firstName, lastName, username3, bio, interests, picture, title, github, facebook, instagram };
      expect (function foo() {Profiles.define(defineObject3); }).to.throw(Error);
    });
  });
}

