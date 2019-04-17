import { Mongo } from 'meteor/mongo';

export const temperature_data = new Mongo.Collection('temperature_data');

// https://docs.meteor.com/api/pubsub.html
if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('temperature_data', function tasksPublication() {
        return temperature_data.find();
    });
}




