// mongoimport -h localhost:3001 -d meteor -c cars --type csv --headerline --file ./cars.csv

// https://atmospherejs.com/dsyko/node-csv-npm

Cars = new Meteor.Collection('cars');
