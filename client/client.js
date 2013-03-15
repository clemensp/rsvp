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
