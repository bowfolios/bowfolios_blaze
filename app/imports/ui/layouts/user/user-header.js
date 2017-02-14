import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.User_Header.helpers({
  routeUserName() {
    return FlowRouter.getParam('username');
  },
});
