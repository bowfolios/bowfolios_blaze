/* eslint prefer-arrow-callback: "off", no-unused-expressions: "off" */
/* eslint-env mocha */

import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Interests } from '/imports/api/interest/InterestCollection';
import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import { removeAllEntities } from '/imports/api/base/BaseUtilities';

if (Meteor.isServer) {
  describe('ProfileCollection', function testSuite() {
    const interestName = 'software-engineering';
    const interestDescription = 'Tools for software development';
    let interestID = null;

    const firstName = 'Philip';
    const lastName = 'Johnson';
    const email = 'johnson@hawaii.edu';
    const bio = 'Professor of Information and Computer Science, University of Hawaii';
    const interests = [interestName];
    const address = '1680 East-West Rd. #307, Honolulu, HI 96822';
    const phone = '808-387-6663';
    const github = 'http://github.com/philipjohnson';
    const facebook = 'http://github.com/philipjohnson';
    const instagram = 'http://github.com/philipjohnson';
    const defineObject = { firstName, lastName, email, bio, interests, address, phone, github, facebook, instagram };

    before(function setup() {
      removeAllEntities();
      // Define a sample interest.
      interestID = Interests.define({ name: interestName, description: interestDescription });
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
      expect(doc.email).to.equal(email);
      expect(doc.bio).to.equal(bio);
      expect(doc.interestIDs[0]).to.equal(interestID);
      expect(doc.address).to.equal(address);
      expect(doc.phone).to.equal(phone);
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
  });
}

