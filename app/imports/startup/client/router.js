import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});

/*                        USER ROUTE s                      */


function addBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'userRoutes',
  triggersEnter: [addBodyClass],
  triggersExit: [removeBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});

/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};

// export const profilePageRouteName = 'Profile_Page';
// FlowRouter.route('/profile', {
//   name: profilePageRouteName,
//   action() {
//     BlazeLayout.render('User_Layout', { main: profilePageRouteName });
//   },
// });

