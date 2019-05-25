var fs = require('fs');

var parkInfo = fs.readFileSync('../textfiles/parkInfo.txt', 'utf8');
//fs.writeFileSync('new.txt', parkInfo);

// // Asynchronous??
// fs.readFile('../textfiles/parkInfo.txt', 'utf8', function(err, data){
//   fs.writeFile('new.txt', data, (err) => {
//     if (err) throw err;
//    });
//  });

// // Delete file
// fs.unlink('new.txt');

// // Make directory (delete is rm)
// fs.mkdirSync('directoryname');

// // var stuff = require('./stuff');
// //
// // console.log(stuff.counter([1, 2, 3]));
// // console.log(stuff.adder(1,stuff.pi));
//
// var events = require('events');
//
// // EMITS
// // var myEmitter = new events.EventEmitter();
// // myEmitter.on('someEvent', function(msg){
// //   console.log(msg);
// // });
// //
// // myEmitter.emit('someEvent', 'the event was emitted');
//
// // REQUIRE
// var util = require('util');
//
// var Person = function(name) {
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// var james = new Person('james');
// var mary = new Person('mary');
//
// var people = [james, mary];
//
// people.forEach(function(person) {
//   person.on('speak', function(msg) {
//     console.log(person.name + ' said: ' + msg);
//   });
// });
//
// james.emit('speak', "hey i'm james");
// mary.emit('speak', "hey i'm mary");
