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
