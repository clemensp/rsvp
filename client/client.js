Meteor.subscribe("parties")
Meteor.subscribe("invitations")

Template.partyCreation.events({
  "click #party-creation .create": function(event, template) {
    var name = template.find(".party-name").value
    Parties.insert({name: name})

    return false;
  }
})

Template.partyList.parties = function() {
  return Parties.find({})
}

Template.partyList.events({
  "click .party-header": function() {
    Session.set("showPartyDetailsFor", this.name)

    return false
  }
})

Template.partyList.showDetailsFor = function(partyName) {
  var showPartyDetailsFor = Session.get("showPartyDetailsFor")
  return showPartyDetailsFor === partyName
}

Template.invitationCreation.events({
  "click #invitation-creation .create": function(event, template) {
    var partyName = this.name,
        inviteeName = template.find(".invitee-name").value
    Meteor.call("createInvitationForParty", partyName, inviteeName)

    return false
  }
})

Template.invitationList.invitations = function() {
  return Invitations.find({partyName: this.name}).fetch()
}

Template.openInvitation.events({
  "click .open-invitation": function(event, template) {
    var invitationCode = template.find("#invitation_id").value
    Meteor.call("openInvitation", invitationCode)

    return false
  }
})

Template.guestPage.viewInvitation = function() {
  return Session.get("invitationCode")
}

Template.invitationDetails.invitation = function() {
  var invitationCode = Session.get("invitationCode")
  return Invitations.findOne({invitationCode: invitationCode})
}

Template.invitationDetails.events({
  "change .invitation-status": function(event, template) {
    var newStatus = event.target.value
    Meteor.call("updateInvitationStatus", Session.get("invitationCode"), newStatus)
    return false
  },

  "blur .number-of-guests": function(event, template) {
    var numberOfGuests = event.target.value
    Meteor.call("updateInvitationNumberOfGuests", Session.get("invitationCode"), numberOfGuests)
    return false
  }
})


Handlebars.registerHelper("selected", function(selectedValue, optionValue) {
  return optionValue === selectedValue ? " selected" : "";
})
