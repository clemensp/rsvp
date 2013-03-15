Parties = new Meteor.Collection("parties")

Invitations = new Meteor.Collection("invitations")

Meteor.methods({
  createInvitationForParty: function(partyName, inviteeName) {
    var party = Parties.findOne({name: partyName})
    if (!party) {
      throw new Meteor.Error(500, "Missing Party")
    }

    var invitationCode = Meteor.call("generateUUID")

    Invitations.insert({
      invitationCode: invitationCode,
      numberOfGuests: 0,
      partyName: partyName,
      inviteeName: inviteeName,
      invitationStatus: "pending"
    })
  },

  generateUUID: function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4()
  }
})
