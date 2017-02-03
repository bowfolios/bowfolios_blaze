import { Interests } from '/imports/api/interest/InterestCollection';
import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import { removeAllEntities } from '/imports/api/base/BaseUtilities';

/* eslint prefer-arrow-callback: "off", no-unused-expressions: "off" */
/* eslint-env mocha */

if (Meteor.isServer) {
  describe('InterestCollection', function testSuite() {
    const name = 'Software Engineering';
    const description = 'Tools and techniques for team-based development of high quality software systems';
    const defineObject = { name, description };

    before(function setup() {
      removeAllEntities();
    });

    after(function teardown() {
      removeAllEntities();
    });

    it('#define, #isDefined, #removeIt, #dumpOne, #restoreOne', function test() {
      let docID = Interests.define(defineObject);
      expect(Interests.isDefined(docID)).to.be.true;
      // Check that fields are available
      const doc = Interests.findDoc(docID);
      expect(doc.name).to.equal(name);
      expect(doc.description).to.equal(description);
      // Check that multiple definitions with the same name fail
      expect(function foo() { Interests.define(defineObject); }).to.throw(Error);
      // Check that we can dump and restore a Interest.
      const dumpObject = Interests.dumpOne(docID);
      Interests.removeIt(docID);
      expect(Interests.isDefined(docID)).to.be.false;
      docID = Interests.restoreOne(dumpObject);
      expect(Interests.isDefined(docID)).to.be.true;
      Interests.removeIt(docID);
    });

    it('#findID, #findIDs', function test() {
      const docID = Interests.define(defineObject);
      expect(Interests.isDefined(docID)).to.be.true;
      const docID2 = Interests.findID(name);
      expect(docID).to.equal(docID2);
      Interests.findIDs([name, name]);
      Interests.removeIt(docID);
    });
  });
}

