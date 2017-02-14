import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';


/**
 * Define a callback to be run when after a user logs in to redirect them to their home page.
 * This is not straightforward because this callback is invoked even on a page refresh, and we don't want to do
 * anything on a page refresh.
 * To determine if the function is being invoked during a "true" login, we check to see that the userId is defined and
 * that the user is currently on the landing page. Only then do we redirect to the user's profile page.
 */
Accounts.onLogin(function onLogin() {
  const id = Meteor.userId();
  const onLandingPage = FlowRouter.current().path && (FlowRouter.current().path === '/');
  const initialLogin = (id && onLandingPage);

  if (initialLogin) {
    const username = Meteor.user().profile.name;
    FlowRouter.go(`/${username}/profile`);
  }
});

Accounts.onLogout(function logout() {
  FlowRouter.go('/');
});
