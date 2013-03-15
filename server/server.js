Meteor.publish("parties", function() {
  return Parties.find({})
})

Meteor.publish("invitations", function() {
  return Invitations.find({})
})
