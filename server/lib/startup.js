Meteor.startup(function() {
    if (Items.find().count() === 0) {
        for (var i = 100 - 1; i >= 0; i--) {
        	var type = i % 2;
            if((i % 10) === 0){ //reset the type of each 10
                type = 2
            }
            Items.insert({
                name: "name " + i,
                value: "value " + i,
                type: type
            });
        }
    }
});
