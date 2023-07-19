const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('tidy living room', 'make beds', 'clean bathroom', 'hoover');
console.log(chores);
let choresDone = chores.pop();
console.log(chores);
console.log(choresDone);
console.log(typeof choresDone);
choresDone += chores.pop();
console.log(chores);
console.log(choresDone);


//try concat