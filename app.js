import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {
  if (!Meteor.users.findOne()) {
    const adminId = Accounts.createUser({
      email: 'admin@example.com',
      password: 'adminPassword',
    });

    Roles.addUsersToRoles(adminId, ['admin']);
  }
});

Template.registerHelper('isRole', (role) => {
    return Roles.userIsInRole(Meteor.userId(), role);
  });

  // To Handle loan request
Template.borrowerDashboard.events({
    'click #requestLoanBtn': function () {
      // Implement loan request logic here
    },
  });
  
  // To Handle payment confirmation
  Template.lenderDashboard.events({
    'click #confirmPaymentBtn': function () {
      // Implementation of payment confirmation logic goes below
    },

  });

  Template.adminDashboard.helpers({
    transactions: function () {
      // Fetch and return all transactions for the admin
    },
  });
  
  