import { Mongo } from 'meteor/mongo';

export const room_0 = new Mongo.Collection('room_0');
export const room_1 = new Mongo.Collection('room_1');
export const room_2 = new Mongo.Collection('room_2');
export const room_3 = new Mongo.Collection('room_3');
export const room_4 = new Mongo.Collection('room_4');
export const room_5 = new Mongo.Collection('room_5');
export const room_6 = new Mongo.Collection('room_6');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('room_0', function tasksPublication() {
        return room_0.find();
    });

    Meteor.publish('room_1', function tasksPublication() {
        return room_1.find();
    });

    Meteor.publish('room_2', function tasksPublication() {
        return room_2.find();
    });

    Meteor.publish('room_3', function tasksPublication() {
        return room_3.find();
    });

    Meteor.publish('room_4', function tasksPublication() {
        return room_4.find();
    });

    Meteor.publish('room_5', function tasksPublication() {
        return room_5.find();
    });

    Meteor.publish('room_6', function tasksPublication() {
        return room_6.find();
    });

}
