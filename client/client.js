Messages = new Meteor.Collection("messages");
 
Template.messages.messages = function () {
    return Messages.find({}, {
        sort: {
            time: -1
        }
    });
}
 
Template.input.events = {
    'click a#send': function (event) {
        var name = Meteor.user().email;
        var message = document.getElementById('message').value;
 
        if (message != '') {
            Messages.insert({
                name: name,
                message: message,
                time: Date.now(),
            });
            message= '';
        } else {
            alert('Plase enter a valid message');
        }
    }
 
}