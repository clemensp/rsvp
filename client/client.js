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

    return false;
  }
})

Template.partyList.showDetailsFor = function(partyName) {
  var showPartyDetailsFor = Session.get("showPartyDetailsFor")
  return showPartyDetailsFor === partyName
}
