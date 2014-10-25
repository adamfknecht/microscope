if (Posts.find().count() == 0) {
    Posts.inset({
        title: "Introducing Telescope",
        url: "http://sachagreif.com"
    });

    Posts.insert({
        title: "Meteor",
        url: "http://meteor.com"
    });

    Posts.insert({
        title: "The Meteor Book",
        url: "http://themeteorbook.com"
    });
}