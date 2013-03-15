Parties = new Meteor.Collection("parties")






// Invitations = new Meteor.Collection("invitations")
// 
// Meteor.methods({
//   createInvitationForParty: function(party, inviteeName) {
//     if (!party || !inviteeName) {
//       return new Meteor.Error(500, "Missing fields")
//     }
//     var inviteCode = generateUUID()
// 
//     Invitations.insert({
//       inviteCode: inviteCode,
//       numberOfGuests: 0,
//       party: party,
//       inviteeName: inviteeName
//     })
//   },
// 
//   generateUUID: function() {
//     var s4 = function() {
//       return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1)
//     }
// 
//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//       s4() + '-' + s4() + s4() + s4()
//   }
// })
