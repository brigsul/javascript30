 const people = [
     { name: 'Wes', year: 1988 },
     { name: 'Kait', year: 1986 },
     { name: 'Irv', year: 1970 },
     { name: 'Lux', year: 2015 }
 ];

 const comments = [
     { text: 'Love this!', id: 523423 },
     { text: 'Super good', id: 823423 },
     { text: 'You are the best', id: 2039842 },
     { text: 'Ramen is my fav food ever', id: 123523 },
     { text: 'Nice Nice Nice!', id: 542328 }
 ];

 // Some and Every Checks
 // Array.prototype.some() // is at least one person 19 or older?
 const somePeople = people.some(person => (2017 - person.year) >= 19);
 console.log("Is someone over 19? " + somePeople);

 // Array.prototype.every() // is everyone 19 or older?
 const everyPeople = people.every(person => (2017 - person.year) >= 19);
 console.log("Is everyone over 19? " + everyPeople);

 // Array.prototype.find()
 // Find is like filter, but instead returns just the one you are looking for
 // find the comment with the ID of 823423
 const foundComment = comments.find(com => com.id === 823423);
 console.log("Finding comment 823423... " + foundComment.text);

 // Array.prototype.findIndex()
 // Find the comment with this ID
 // delete the comment with the ID of 823423
 const deletedComment = comments.findIndex(com => com.id === 823423);
 comments.splice(deletedComment, 1);
 console.table(comments);